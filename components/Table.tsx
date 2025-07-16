export default function Table() {
    return (
        <div className="w-full flex justify-center px-[100px] font-bold">
            <div className="w-full max-w-[1683px] backdrop-blur-md bg-white/70 rounded-xl border border-[#343434] overflow-hidden">
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
    )
}