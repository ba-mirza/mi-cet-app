import { Metadata } from "next";
import Table from "@/components/Table";
import CurrencyConverter from "@/components/CurrentcyConverter";

import { Accordion, AccordionTab } from "primereact/accordion";
import SendForm from "@/components/SendForm";
import BackgroundImage from "@/components/BackgroundImage";

export const metadata: Metadata = {
  title: "Инвестиции",
  description: "Информация об инвестициях",
};

export default function InvestmentsPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-full overflow-x-hidden">
      <section className="mt-8 lg:mt-20 w-full max-w-full px-4 flex flex-col items-center">
        <h1 className="font-black text-lg lg:text-4xl text-center w-full max-w-full break-words overflow-wrap-anywhere">
          Конвертировать доллары США в тенге
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>по реальному обменному
          курсу
        </h1>
        <CurrencyConverter />
      </section>

      <BackgroundImage>
        <section className="mt-8 lg:mt-20 w-full">
          <h1 className="section-text px-4">Актуальные выпуски облигаций</h1>
          <Table />
        </section>
      </BackgroundImage>

      <section
        id="FAQ"
        className="mt-8 lg:mt-20 mb-6 lg:mb-12 w-full max-w-full px-4"
      >
        <h1 className="section-text">Частые вопросы</h1>
        <div className="w-full max-w-[780px] mx-auto">
          <Accordion
            className="mt-4 lg:mt-8 w-full custom-accordion"
            multiple
            activeIndex={0}
          >
            <AccordionTab
              headerClassName="text-lg sm:text-xl lg:text-[28px] font-semibold"
              header="Что такое облигации?"
            >
              <div className="accordion-content-wrapper">
                <p className="text-base sm:text-lg lg:text-xl">
                  Облигации или «бонды» от английского «bonds» – это долговые
                  ценные бумаги, которые торгуются на фондовой бирже. По своей
                  сути одна облигация похожа на расписку, которая подтверждает,
                  что кто-то взял у Вас деньги и обязан отдать их с процентами.
                  Когда Вы покупаете облигацию, Вы даёте деньги в долг
                  определённой компании или даже правительству целой страны.
                  Взамен «заёмщик» обязуется регулярно платить Вам проценты и
                  вернуть всю сумму вложений после заранее обозначенного срока.
                </p>
              </div>
            </AccordionTab>
            <AccordionTab
              headerClassName="text-lg sm:text-xl lg:text-[28px] font-semibold"
              header="Что лучше — акции или облигации?"
            >
              <div className="accordion-content-wrapper">
                <p className="text-base sm:text-lg lg:text-xl">
                  Не совсем правильно сравнивать облигации с акциями в стиле
                  «лучше-хуже». Эти инструменты могут дополнять друг друга в
                  одном инвестиционном портфеле. Доходность бондов в среднем
                  ниже, чем по акциям. Хотя при этом она может быть выше ставок
                  по банковским депозитам. Риск облигаций тоже традиционно ниже:
                  их цена меньше колеблется на бирже. Плюс при удержании бумаг
                  до конца их срока инвестор получит назад всю сумму вложений,
                  даже если рыночная цена облигаций к тому моменту упадёт.
                  Поэтому облигации считаются защитным инструментом. Их стоит
                  добавлять в инвестиционный портфель, чтобы повысить его
                  надёжность – особенно в неспокойные периоды на рынке.
                  Результат инвестиций в облигации более предсказуем, потому что
                  по ним ещё до покупки можно узнать многие факторы: срок
                  обращения, фиксированную ставку вознаграждения, доходность.
                </p>
              </div>
            </AccordionTab>
            <AccordionTab
              headerClassName="text-lg sm:text-xl lg:text-[28px] font-semibold"
              header="Что такое эмитент?"
            >
              <div className="accordion-content-wrapper">
                <p className="text-base sm:text-lg lg:text-xl">
                  Эмитент – это «должник», который выпустил облигации, чтобы
                  продать их и получить деньги для воплощения своих целей.
                  Эмитентами могут быть компании, городские власти и
                  правительства стран.
                </p>
              </div>
            </AccordionTab>
            <AccordionTab
              headerClassName="text-lg sm:text-xl lg:text-[28px] font-semibold"
              header="Что такое номинал?"
            >
              <div className="accordion-content-wrapper">
                <p className="text-base sm:text-lg lg:text-xl">
                  Номинал – это размер долга на одну облигацию. Если умножить
                  номинал на общее количество облигаций в выпуске, можно узнать,
                  сколько всего денег эмитент занимает в этот раз. Другими
                  словами номинал – это начальная стоимость, по которой эмитент
                  предлагает бонды инвесторам. На казахстанском рынке номинал
                  одной бумаги чаще всего равен 1000 тенге. На зарубежных
                  площадках – $1000, хотя бывают и облигации номиналом $100 000.
                  Когда облигации начинают торговаться на бирже, их цена может
                  колебаться выше или ниже номинала. Но в конце срока эмитент
                  возвращает инвестору деньги именно по номинальной стоимости
                  облигаций. Цена облигаций на бирже обычно отражается в
                  процентах от номинала. Когда в котировках Вы видите цифру
                  95.3, а номинал облигации – 1000 тенге, это значит, что сейчас
                  облигация стоит 95,3% от 1000 тенге. То есть 0,953*1000 = 953
                  тенге.
                </p>
              </div>
            </AccordionTab>
            <AccordionTab
              headerClassName="text-lg sm:text-xl lg:text-[28px] font-semibold"
              header="Что такое «погашение»?"
            >
              <div className="accordion-content-wrapper">
                <p className="text-base sm:text-lg lg:text-xl">
                  Это когда компания должна рассчитаться с держателем облигаций
                  и вернуть ему номинал по каждой бумаге. Дата погашения обычно
                  известна заранее. В этот день облигации исчезают с Вашего
                  счёта, и вместо них появляются деньги. Но Вы также можете не
                  дожидаться погашения и продать облигации на открытых торгах в
                  рабочее время биржи.
                </p>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
      </section>

      <section className="mt-3 lg:mt-5 w-full px-4">
        <SendForm />
      </section>
    </div>
  );
}
