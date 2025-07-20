// components/CurrencyConverter.tsx
"use client";

import { Dropdown } from 'primereact/dropdown';
import React, { useState, useEffect } from "react";
import axios from 'axios';

interface Currency {
    code: string;
    name: string;
    value: number;
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

export default function CurrencyConverter() {
    const IMG_URL = "https://purecatamphetamine.github.io/country-flag-icons/3x2/";
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [fromCurrency, setFromCurrency] = useState<Currency | undefined>(undefined);
    const [toCurrency, setToCurrency] = useState<Currency | undefined>(undefined);
    const [amount, setAmount] = useState<number>(100);
    const [result, setResult] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCurrencies();
    }, []);

    const convertCurrency = () => {

    }

    useEffect(() => {
        convertCurrency();
    }, [fromCurrency, toCurrency, amount]);

    const fetchCurrencies = async () => {
        try {
            const response = await axios.get('/api/currency');
            const data: CurrencyData = response.data;

            const currencyList = Object.entries(data.data).map(([code, currency]) => ({
                code: currency.code.slice(0, -1),
                name: currency.code,
                value: currency.value
            }));

            setCurrencies(currencyList);

            // Установить USD и KZT по умолчанию
            const usd = currencyList.find(c => c.code === 'USD');
            const kzt = currencyList.find(c => c.code === 'KZT');

            if (usd) setFromCurrency(usd);
            if (kzt) setToCurrency(kzt);

        } catch (error) {
            console.error('Failed to fetch currencies:', error);
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return <div className="w-[976px] h-[217px] rounded-lg bg-white border flex items-center justify-center">
            Loading currencies...
        </div>;
    }

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src={`${IMG_URL}${option.code}.svg`} className={`mr-2`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src={`${IMG_URL}${option.code}.svg`} className={`mr-2`} style={{ width: '18px' }} />
                    <div className="mr-2">{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    return (
        <div className="flex flex-col justify-center w-[976px] h-[217px] px-[90px] rounded-lg bg-white mt-8">
            <div className="flex items-center">
                <div className="flex border-1 rounded-lg w-[400px] p-2 m-2">
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-4 text-[24px] font-medium outline-none"
                    />
                    <Dropdown
                        value={fromCurrency}
                        onChange={(e) => setFromCurrency(e.value)}
                        options={currencies}
                        optionLabel="code"
                        className="w-[150px] mr-2 border-none focus:border-none focus:outline-none focus:ring-0 focus:shadow-none"
                        panelStyle={{ width: '300px' }}
                        style={{
                            border: 'none',
                            boxShadow: 'none'
                        }}
                        itemTemplate={countryOptionTemplate}
                        valueTemplate={selectedCountryTemplate}
                    />
                </div>
                <div className="flex border-1 rounded-lg w-[400px] p-2 m-2">
                    <input
                        type="text"
                        disabled
                        className="w-full px-4 text-[24px] font-medium outline-none"
                    />
                    <Dropdown
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.value)}
                        options={currencies}
                        optionLabel="code"
                        className="w-[150px] mr-2 border-none focus:border-none focus:outline-none focus:ring-0 focus:shadow-none"
                        panelStyle={{ width: '300px' }}
                        style={{
                            border: 'none',
                            boxShadow: 'none'
                        }}
                        itemTemplate={countryOptionTemplate}
                        valueTemplate={selectedCountryTemplate}
                    />
                </div>
            </div>
            <div className="p-[8px]">
                <h1 className="font-medium text-2xl">{amount} {fromCurrency?.code}  = {result} {toCurrency?.name}</h1>
                <span className="font-medium text-sm">Средний рыночный курс обмена на {new Date().toLocaleTimeString().slice(0, 4)}</span>
            </div>
        </div>
    );
}