import GeoLocation from "@/components/GeoLocation";
import { Card } from "primereact/card";
import { Image } from "primereact/image";

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
      imgSource: "/img/1.jpg",
      subtitles: ["Юридические консультации", "Исполнительное производство", "Представительство в суде", "Подготовка жалоб, претензий"]
    },
    {
      title: "Заключение договоров",
      imgSource: "/img/2.jpg",
      subtitles: ["Подготовка договоров", "Экспертиза договоров", "Сопровождение сделок",],
    },
    {
      title: "Аутсорсинг",
      imgSource: "/img/3.jpg",
      subtitles: ["Юридический аутсорсинг", "Юридическое обслуживание"],
    },
    {
      title: "Корпоративное право",
      imgSource: "/img/4.jpg",
      subtitles: ["Регистрация ТОО/АО", "Перерегистрация/Ликвидация", "Разработка корпоративных документов", "Консультация органов управления"]
    },
    {
      title: "Сопровождение в тендерах",
      imgSource: "/img/5.jpg",
      subtitles: ["Услуги тендерного специалиста", "Госзакупки", "Закупки нац. компаний и холдингов", "Закупки субъектов естественных монополий"]
    },
    {
      title: "Защита интересов",
      imgSource: "/img/6.jpg",
      subtitles: ["Юридические консультации", "Исполнительное производство", "Представительство в суде", "Подготовка жалоб, претензий"]
    },
    {
      title: "Правовой аудит",
      imgSource: "/img/7.jpg",
      subtitles: ["Кадровый аудит", "Договорной аудит", "Аудит закупочных процедур", "Аудит ВНД"],
    },
    {
      title: "Консалтинг в сфере строительства",
      imgSource: "/img/8.jpg",
      subtitles: ["Договоры строительного подряда", "Споры, связанные с ними"]
    },
    {
      title: "Медиация",
      imgSource: "/img/9.jpg",
      subtitles: ["Урегулирование споров профессиональным медиатором"]
    }
  ];

  const serviceCard = [
    "Профессиональную консультацию юристов",
    "Индивидуальный подход к каждому клиенту",
    "Скидки и гибкая система оплаты для каждого клиента",
    "Сохранность всей конфиденциальной информации о клиенте",
    "Профессиональную юридическую помощь по защите ваших прав и интересов в суде и в государственных органах",
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
            Надёжно. Быстро. Компетентно. С полным соблюдением
            конфиденциальности.
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
            {legalServices.map((service, idx) => (
              <Card
                header={
                  <Image
                    className="w-32 h-auto"
                    src={service.imgSource}
                    alt={`image-${service.title}`}
                    loading="lazy"
                  />
                }
                className="w-[440px] m-2 transition-all duration-300 hover:backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-2 select-none"
                key={idx}
              >
                <h2 className="text-center text-[24px] font-semibold p-2">
                  {service.title}
                </h2>
                <ul className="">
                  {service.subtitles.map((text, id) => (
                    <li className="mt-3 text-center text-lg" key={id}>
                      ✔️ {text}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center mix-blend-luminosity bg-[url('/img/about-bg.png')] bg-cover bg-right bg-no-repeat mt-5 border-t-1 border-b-1 border-[#343434] h-[600px] w-full bg-white px-12">
          <div className="flex flex-col gap-2">
            <h1 className="uppercase font-black text-6xl bg-gradient-to-r from-[#343434] to-[#0670A1] bg-clip-text text-transparent">
              О нас
            </h1>
            <p className="mt-4 w-1/2 font-medium text-xl">
              Профессиональный опыт юристов по гражданским и административным
              делам, корпоративным спорам, решению споров с государственными
              органами, учреждениями и организациями всех форм собственности
              позволяет положительно решать острые вопросы и проблемы наших
              клиентов. <br /> <br /> Опыт наших специалистов в области
              правового регулирования отношении возникающих в авиационном,
              железнодорожном, автомобильном и водном транспортах,
              недропользовании, строительстве и финансовом регулировании, в том
              числе фискального, позволяет нашим клиентам уверенно планировать
              свои действия и будущее.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h1 className="section-text">
          Обратившись в нашу юридическую <br /> фирму Вы получите
        </h1>
        {serviceCard.map((text: string, id: number) => (
          <Card key={id}>{text}</Card>
        ))}
      </section>

      <section className="mt-20">
        <h1 className="section-text">Сертификат о деятельности</h1>
        <div className="mt-8 flex justify-center">
          <div className="flex border-1 rounded-lg bg-[#eaeaea] w-[396px]">
            <Image
              closeOnEscape={true}
              preview
              imageClassName="rounded-lg"
              src="/img/certificate.jpg"
              alt="certificate"
            />
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h1 className="section-text">Местоположение</h1>
        <GeoLocation />
      </section>
    </>
  );
}