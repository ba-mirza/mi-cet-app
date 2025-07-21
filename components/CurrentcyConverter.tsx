"use client";
import React, { useState, useEffect } from "react";

interface Currency {
    code: string;
    name: string;
    value: number;
    countryCode: string;
}

interface CurrencyData {
    meta: {
        last_updated_at: string;
    };
    data: {
        [key: string]: {
            code: string;
            value: number;
        };
    };
}

interface Props {
    searchParams: {
        from?: string;
        to?: string;
        amount?: string;
    };
}

async function fetchCurrencies(): Promise<Currency[]> {
    try {
        const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_1ohFR6u0zRejdmWaA4qeAHwUcVvod2NCA3c97ZQZ`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: CurrencyData = await response.json();

        return Object.entries(data.data).map(([key, currency]) => ({
            code: currency.code,
            name: currency.code,
            value: parseFloat(currency.value.toString()),
            countryCode: currency.code.slice(0, 2)
        }));
    } catch (error) {
        console.error('Failed to fetch currencies:', error);
        throw new Error('Не удалось загрузить курсы валют');
    }
}

function calculateConversion(amount: number, fromValue: number, toValue: number): string {
    if (isNaN(amount) || amount <= 0 || isNaN(fromValue) || isNaN(toValue) || fromValue === 0) {
        return '';
    }
    const result = amount * (toValue / fromValue);
    return result.toFixed(2);
}

export default function CurrencyConverter({ searchParams }: Props) {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentAmount, setCurrentAmount] = useState(searchParams.amount || '100');
    
    useEffect(() => {
        fetchCurrencies()
            .then(setCurrencies)
            .catch(() => setError('Не удалось загрузить курсы валют'))
            .finally(() => setLoading(false));
    }, []);

    // Обновляем currentAmount если searchParams изменился
    useEffect(() => {
        setCurrentAmount(searchParams.amount || '100');
    }, [searchParams.amount]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center w-[976px] h-[217px] px-[90px] rounded-lg bg-white mt-8 items-center">
                <div>Загрузка курсов валют...</div>
            </div>
        );
    }

    if (error || currencies.length === 0) {
        return (
            <div className="mt-8 w-[976px] h-[217px] rounded-lg bg-red-100 border border-red-400 text-red-700 flex items-center justify-center p-4 text-center">
                Ошибка: Не удалось загрузить курсы валют. Пожалуйста, попробуйте позже.
            </div>
        );
    }
        
        const fromCode = searchParams.from || 'USD';
        const toCode = searchParams.to || 'KZT';
        
        const fromCurrency = currencies.find(c => c.code === fromCode) || currencies[0];
        const toCurrency = currencies.find(c => c.code === toCode) || currencies[1];
        
        const numAmount = parseFloat(currentAmount);
        const result = calculateConversion(numAmount, fromCurrency?.value || 1, toCurrency?.value || 1);

        return (
            <div className="flex flex-col justify-center w-[976px] h-[217px] px-[90px] rounded-lg bg-white mt-8">
                <form method="GET" className="flex items-center">
                    <div className="flex border-1 rounded-lg w-[400px] p-2 m-2">
                        <input
                            type="text"
                            name="amount"
                            value={currentAmount}
                            className="w-full px-4 text-[24px] font-medium outline-none"
                            onChange={(e) => {
                                setCurrentAmount(e.target.value);
                            }}
                        />
                        <select
                            name="from"
                            defaultValue={fromCode}
                            className="w-[150px] mr-2 border-none focus:border-none focus:outline-none focus:ring-0 focus:shadow-none text-[16px] font-medium"
                            onChange={(e) => {
                                const form = e.target.closest('form') as HTMLFormElement;
                                const formData = new FormData(form);
                                const newAmount = formData.get('amount');
                                const newFrom = e.target.value;
                                const newTo = formData.get('to');
                                window.location.href = `?from=${newFrom}&to=${newTo}&amount=${newAmount}`;
                            }}
                        >
                            {currencies.map(currency => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.code}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="flex border-1 rounded-lg w-[400px] p-2 m-2">
                        <input
                            type="text"
                            value={result}
                            disabled
                            className="w-full px-4 text-[24px] font-medium outline-none bg-gray-50"
                        />
                        <select
                            name="to"
                            defaultValue={toCode}
                            className="w-[150px] mr-2 border-none focus:border-none focus:outline-none focus:ring-0 focus:shadow-none text-[16px] font-medium"
                            onChange={(e) => {
                                const form = e.target.closest('form') as HTMLFormElement;
                                const formData = new FormData(form);
                                const newAmount = formData.get('amount');
                                const newFrom = formData.get('from');
                                const newTo = e.target.value;
                                window.location.href = `?from=${newFrom}&to=${newTo}&amount=${newAmount}`;
                            }}
                        >
                            {currencies.map(currency => (
                                <option key={currency.code} value={currency.code}>
                                    {currency.code}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
                
                <div className="p-[8px]">
                    <h1 className="font-medium text-2xl">
                        {currentAmount} {fromCurrency?.code || 'USD'} = <span className="text-blue-600">{result}</span> {toCurrency?.code || 'KZT'}
                    </h1>
                    <span className="font-medium text-sm">
                        Средний рыночный курс обмена на {new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }).slice(0, 5)}
                    </span>
                </div>
            </div>
        );
    }