"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";

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

const fetchCurrencies = async (): Promise<Currency[]> => {
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
            countryCode: currency.code.slice(0, 2),
            key: key,
        }));
    } catch (error) {
        console.error('Failed to fetch currencies:', error);
        throw new Error('Не удалось загрузить курсы валют');
    }
};

const calculateConversion = (amount: number, fromValue: number, toValue: number): string => {
    if (isNaN(amount) || amount <= 0 || isNaN(fromValue) || isNaN(toValue) || fromValue === 0) {
        return '0.00';
    }
    const result = amount * (toValue / fromValue);
    return result.toFixed(2);
};

export default function CurrencyConverter() {
    // Основные состояния
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Состояния конвертера
    const [fromCode, setFromCode] = useState('USD');
    const [toCode, setToCode] = useState('KZT');
    const [amount, setAmount] = useState('100');

    // Загрузка валют при инициализации
    useEffect(() => {
        let isMounted = true;

        const loadCurrencies = async () => {
            try {
                const data = await fetchCurrencies();
                if (isMounted) {
                    setCurrencies(data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(`Не удалось загрузить курсы валют\nError: ${err}`);
                    setLoading(false);
                }
            }
        };

        loadCurrencies();

        return () => {
            isMounted = false;
        };
    }, []);

    // Мемоизированные валюты для предотвращения лишних вычислений
    const { fromCurrency, toCurrency } = useMemo(() => {
        const from = currencies.find(c => c.code === fromCode) || currencies[0];
        const to = currencies.find(c => c.code === toCode) || currencies[1];
        return { fromCurrency: from, toCurrency: to };
    }, [currencies, fromCode, toCode]);

    // Мемоизированный результат конвертации
    const convertedAmount = useMemo(() => {
        if (!fromCurrency || !toCurrency) return '0.00';
        const numAmount = parseFloat(amount);
        return calculateConversion(numAmount, fromCurrency.value, toCurrency.value);
    }, [amount, fromCurrency, toCurrency]);

    // Обработчики событий с useCallback для предотвращения ререндеров
    const handleAmountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Разрешаем только числа и точку
        if (/^\d*\.?\d*$/.test(value)) {
            setAmount(value);
        }
    }, []);

    const handleFromCurrencyChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setFromCode(e.target.value);
    }, []);

    const handleToCurrencyChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setToCode(e.target.value);
    }, []);

    // Функция для обмена валют местами
    const swapCurrencies = useCallback(() => {
        setFromCode(toCode);
        setToCode(fromCode);
    }, [fromCode, toCode]);

    if (loading) {
        return (
            <div className="flex flex-col justify-center w-[976px] h-[217px] px-[90px] rounded-lg bg-white mt-8 items-center">
                <div className="text-lg">Загрузка курсов валют...</div>
            </div>
        );
    }

    if (error || currencies.length === 0) {
        return (
            <div className="mt-8 w-[976px] h-[217px] rounded-lg bg-red-100 border border-red-400 text-red-700 flex items-center justify-center p-4 text-center">
                <div>
                    <div className="text-lg font-semibold mb-2">Ошибка загрузки</div>
                    <div>Не удалось загрузить курсы валют. Пожалуйста, попробуйте позже.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex border border-[#34343450] flex-col justify-center w-[976px] h-[217px] px-[90px] rounded-lg bg-white mt-8">
            <div className="flex items-center justify-center">
                {/* Поле ввода суммы и валюта FROM */}
                <div className="flex border border-gray-300 rounded-lg w-[400px] p-2 m-2 focus-within:border-blue-500">
                    <input
                        type="text"
                        value={amount}
                        placeholder="0"
                        className="w-full px-4 text-[24px] font-medium outline-none"
                        onChange={handleAmountChange}
                    />
                    <select
                        value={fromCode}
                        className="mr-2 border-none focus:border-none focus:outline-none focus:ring-0 focus:shadow-none text-[16px] font-medium bg-transparent"
                        onChange={handleFromCurrencyChange}
                    >
                        {currencies.map(currency => (
                            <option key={currency.code} value={currency.code}>
                                {currency.code}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Кнопка обмена валют */}
                <button
                    onClick={swapCurrencies}
                    className="mx-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    title="Поменять валюты местами"
                >
                    ⇄
                </button>

                {/* Поле результата и валюта TO */}
                <div className="flex border border-gray-300 rounded-lg w-[400px] p-2 m-2">
                    <input
                        type="text"
                        value={convertedAmount}
                        disabled
                        className="w-full px-4 text-[24px] font-medium outline-none bg-gray-50 text-gray-700"
                    />
                    <select
                        value={toCode}
                        className="mr-2 border-none focus:border-none focus:outline-none focus:ring-0 focus:shadow-none text-[16px] font-medium bg-transparent"
                        onChange={handleToCurrencyChange}
                    >
                        {currencies.map(currency => (
                            <option key={currency.code} value={currency.code}>
                                {currency.code}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="p-[8px] text-center mt-2">
                <h1 className="font-medium text-4xl mb-1">
                    {amount || '0'} {fromCode} = <span className="text-blue-600">{convertedAmount}</span> {toCode}
                </h1>
                <span className="font-medium text-sm text-gray-600">
                    Средний рыночный курс обмена на {new Date().toLocaleTimeString('ru-RU', {
                    hour: '2-digit',
                    minute: '2-digit'
                })}
                </span>
            </div>
        </div>
    );
}