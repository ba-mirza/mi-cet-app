import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { title } from "process";

export default function Home() {
  const dealsText = [
    "Защита прав потребителей",
    "Семейное отношение",
    "Страхование",
    "Наследственные дела",
    "Жилищные споры",
    "Трудовое право",
    "Уголовные дела",
    "Транспорт",
    "Договорное право",
    "Корпоративное право",
    "Лицензирование",
    "Интеллектуальные и авторские права",
    "Недвижимость",
    "Банкротство",
    "Налоговые споры",
    "Административные дела",
  ];

  const legalServices = [
    {
      title: "Защита интересов",
      subtitles: ["Юридические консультации", "Исполнительное производство", "Представительство в суде", "Подготовка жалоб, претензий"]
    },
    {
      title: "Заключение договоров",
      subtitles: ["Подготовка договоров", "Экспертиза договоров", "Сопровождение сделок",],
    },
    {
      title: "Аутсорсинг",
      subtitles: ["Юридический аутсорсинг", "Юридическое обслуживание"],
    },
    {
      title: "Корпоративное право",
      subtitles: ["Регистрация ТОО/АО", "Перерегистрация/Ликвидация", "Разработка корпоративных документов", "Консультация органов управления"]
    },
    {
      title: "Сопровождение в тендерах",
      subtitles: ["Услуги тендерного специалиста", "Госзакупки", "Закупки нац. компаний и холдингов", "Закупки субъектов естественных монополий"]
    },
    {
      title: "Защита интересов",
      subtitles: ["Юридические консультации", "Исполнительное производство", "Представительство в суде", "Подготовка жалоб, претензий"]
    },
    {
      title: "Правовой аудит",
      subtitles: ["Кадровый аудит", "Договорной аудит", "Аудит закупочных процедур", "Аудит ВНД"],
    },
    {
      title: "Консалтинг в сфере строительства",
      subtitles: ["Договоры строительного подряда", "Споры, связанные с ними"]
    },
    {
      title: "Медиация",
      subtitles: ["Урегулирование споров профессиональным медиатором"]
    }
  ];

  return (
    <>
      {/* Background Image - позади Banner и Header */}
      <div
        className="absolute top-0 left-0 w-full opacity-35 -z-10"
        style={{
          backgroundImage: `url('/img/hero-section-bg.png')`,
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          borderBottom: "2px solid black",
        }}
      />

      {/* Hero Section Content */}
      <section className="relative z-10">
        <div className="">
          <h1 className="mt-20 uppercase text-2xl text-center font-black text-[#0670A1] text-[72px] leading-tight">
            Профессиональная защита
            <br />
            ваших прав — с гарантией
          </h1>
          
          <p className="mt-8 text-center font-bold text-2xl text-[#343434]">
            Надёжно. Быстро. Компетентно. С полным соблюдением конфиденциальности.
          </p>
          
          <p className="mt-6 text-center font-bold text-xl text-[#343434] opacity-80">
            Мы ценим ваше время и доверие — предоставляем юридическую помощь{" "}
            <br />
            на высоком уровне, строго соблюдая тайну обращения.
          </p>

          <div className="flex gap-3 justify-center mt-12 flex-wrap mx-auto px-4">
            {dealsText.map((deal, index) => (
              <p
                key={index}
                className="border border-[#0670A1] rounded-lg bg-[#EAEAEA] cursor-pointer hover:bg-white transition-colors p-3 text-center font-semibold text-lg text-[#343434]"
              >
                {deal}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="mt-20">
        <div className="px-4">
          <h2 className="section-text font-black">
            Качественное решение юридических вопросов
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-2 px-4">
            {
              legalServices.map((service, idx) => (
                <Card
                  header={<img className="w-32 h-auto" src="/img/3d-elem.png" alt="image" />}
                  className="w-[440px] m-2" key={idx}>
                  <h2 className="text-center text-[24px] font-semibold p-2">{service.title}</h2>
                  <ul className="">
                    {
                      service.subtitles.map((text, id) => (
                        <li className="mt-3 text-center text-lg" key={id}>✔️ {text}</li>
                      ))
                    }
                  </ul>
                </Card>
              ))
            }
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h1 className="section-text">О нас</h1>
      </section>

      <section className="mt-20">
        <h1 className="section-text">Обратившись в нашу юридическую <br /> фирму Вы получите</h1>
      </section>

      <section className="mt-20">
        <h1 className="section-text">Сертификат о деятельности</h1>
      </section>

      <section className="mt-20">
        <h1 className="section-text">Местоположение</h1>
      </section>
    </>
  );
}