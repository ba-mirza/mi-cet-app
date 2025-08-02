export default function Table() {
    return (
        <div className="w-full flex justify-center px-4 lg:px-[100px] font-bold mt-8">
            <div className="w-full max-w-[1683px] backdrop-blur-md bg-white/70 rounded-xl border border-[#343434] overflow-hidden">
                {/* Мобильная версия - карточки */}
                <div className="block lg:hidden">
                    <div className="bg-gradient-to-r from-[#343434] to-[#0670A1] text-white p-4 text-center font-bold">
                        Актуальные выпуски облигаций
                    </div>
                    
                    {/* Карточки для каждой облигации */}
                    {[
                        { ticker: "FFSPC3.0527.AIX.KZ", currency: "Доллар США", rate: "10,0% годовых в течение всего периода обращения (ежеквартальная выплата)", yield: "до 9,5% годовых", guarantee: "100% гарантия исполнения обязательств от FRHC на основную сумму долга и купоны", volume: "200 000 000 долларов США", nominal: "100 долларов США", term: "2 года" },
                        { ticker: "FFSPC4.0527.AIX.KZ", currency: "Евро", rate: "8,0% годовых в течение всего периода обращения (ежеквартальная выплата)", yield: "до 9,5% годовых", guarantee: "100% гарантия исполнения обязательств от FRHC на основную сумму долга и купоны", volume: "87 935 900 евро", nominal: "100 евро", term: "2 года" },
                        { ticker: "FFSPC5.0527.AIX.KZ", currency: "Китайский юань", rate: "9,0% годовых в течение всего периода обращения (ежеквартальная выплата)", yield: "до 8,5% годовых", guarantee: "100% гарантия исполнения обязательств от FRHC на основную сумму долга и купоны", volume: "219 070 900 китайских юаней", nominal: "100 китайских юаней", term: "2 года" }
                    ].map((bond, i) => (
                        <div key={i} className="border-b border-gray-200 last:border-b-0">
                            <div className="bg-gradient-to-r from-[#343434] to-[#0670A1] text-white p-3 text-sm font-semibold">
                                {bond.ticker}
                            </div>
                            <div className="p-4 space-y-3 text-xs">
                                <div>
                                    <div className="font-semibold text-gray-700 mb-1">Валюта выпуска:</div>
                                    <div>{bond.currency}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-700 mb-1">Ставка вознаграждения:</div>
                                    <div>{bond.rate}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-700 mb-1">Доходность к погашению:</div>
                                    <div>{bond.yield}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-700 mb-1">Гарантия:</div>
                                    <div>{bond.guarantee}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-700 mb-1">Объем выпуска:</div>
                                    <div>{bond.volume}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-700 mb-1">Номинальная стоимость:</div>
                                    <div>{bond.nominal}</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-700 mb-1">Срок обращения:</div>
                                    <div>{bond.term}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Десктопная версия - таблица */}
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-sm text-center table-fixed border-separate border-spacing-0">
                        <thead>
                        <tr className="text-white bg-gradient-to-r from-[#343434] to-[#0670A1] h-[104px]">
                            <th className="px-4">Тикер на AIX</th>
                            <th className="px-4">FFSPC3.0527.AIX.KZ</th>
                            <th className="px-4">FFSPC4.0527.AIX.KZ</th>
                            <th className="px-4">FFSPC5.0527.AIX.KZ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[
                            ["Валюта выпуска", "Доллар США", "Евро", "Китайский юань"],
                            [
                                "Ставка вознаграждения",
                                "10,0% годовых в течение всего периода\nобращения (ежеквартальная выплата)",
                                "8,0% годовых в течение всего периода\nобращения (ежеквартальная выплата)",
                                "9,0% годовых в течение всего периода\nобращения (ежеквартальная выплата)"
                            ],
                            ["Доходность к погашению", "до 9,5% годовых", "до 9,5% годовых", "до 8,5% годовых"],
                            ["Гарантия", "100% гарантия исполнения обязательств от\n" +
                            "FRHC на основную сумму долга и купоны", "100% гарантия исполнения обязательств от\n" +
                            "FRHC на основную сумму долга и купоны", "100% гарантия исполнения обязательств от\n" +
                            "FRHC на основную сумму долга и купоны"],
                            ["Объем выпуска", "200 000 000 долларов США", "87 935 900 евро", "219 070 900 китайских юаней"],
                            ["Номинальная стоимость одной облигации", "100 долларов США", "100 евро", "100 китайских юаней"],
                            ["Срок обращения", "2 года", "2 года", "2 года"],
                        ].map((row, i) => (
                            <tr key={i} className="h-[104px]">
                                {row.map((cell, j) => (
                                    <td
                                        key={j}
                                        className="px-4 align-middle whitespace-pre-line"
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}