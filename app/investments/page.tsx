import {Metadata} from "next";
import Table from "@/components/Table";

export const metadata: Metadata = {
    title: 'Инвестиции',
    description: 'Информация об инвестициях',
}

export default function InvestmentsPage() {
    return (
        <div className="flex flex-col items-center">
            <section className="mt-20">
                <h1 className="font-black text-4xl text-center">
                    Конвертировать доллары США в тенге<br />
                    по реальному обменному курсу
                </h1>
                <div className="w-[976px] h-[217px] rounded-lg border mt-8">
                </div>

                {/*Graph table*/}
                <div className="mt-15">
                    {
                        Array.from({length: 6}, (_, i) => {
                            return (
                                <button key={i} className="border-1 border-[var(--foreground)] rounded-lg px-3 py-1 m-2">filter {i}</button>
                            )
                        })
                    }
                </div>
            </section>

            <section className="mt-20">
                <h1 className="uppercase font-black text-4xl text-center">Актуальные выпуски облигаций</h1>
                <Table />
            </section>

            <section className="mt-20">
                <h1 className="uppercase font-black text-4xl text-center">Частые вопросы</h1>
            </section>

        </div>
    );
}