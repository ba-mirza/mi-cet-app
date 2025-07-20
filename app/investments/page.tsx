import {Metadata} from "next";
import Table from "@/components/Table";
import CurrencyConverter from "@/components/CurrentcyConverter";

import { Accordion, AccordionTab } from 'primereact/accordion';

export const metadata: Metadata = {
    title: 'Инвестиции',
    description: 'Информация об инвестициях',
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

export default function InvestmentsPage() {

    return (
        <div className="flex flex-col items-center">
            <section className="mt-20">
                <h1 className="font-black text-4xl text-center">
                    Конвертировать доллары США в тенге<br />
                    по реальному обменному курсу
                </h1>
                <CurrencyConverter />

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
                <Accordion className="mt-8" activeIndex={0}>
                    <AccordionTab headerClassName="text-[28px] font-semibold"
                                  className="w-[780px]"
                                  header="Что такое облигации?">

                    </AccordionTab>
                    <AccordionTab headerClassName="text-[28px] font-semibold" header="Что лучше — акции или облигации?">

                    </AccordionTab>
                    <AccordionTab headerClassName="text-[28px] font-semibold" header="Что такое эмитент?">

                    </AccordionTab>
                    <AccordionTab headerClassName="text-[28px] font-semibold" header="Что такое номинал?">

                    </AccordionTab>
                    <AccordionTab headerClassName="text-[28px] font-semibold" header="Что такое «погашение»?">

                    </AccordionTab>
                </Accordion>
            </section>

        </div>
    );
}