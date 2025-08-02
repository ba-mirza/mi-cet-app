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
      subtitles: [
        "Юридические консультации",
        "Исполнительное производство",
        "Представительство в суде",
        "Подготовка жалоб, претензий",
      ],
    },
    {
      title: "Заключение договоров",
      imgSource: "/img/2.jpg",
      subtitles: [
        "Подготовка договоров",
        "Экспертиза договоров",
        "Сопровождение сделок",
      ],
    },
    {
      title: "Аутсорсинг",
      imgSource: "/img/3.jpg",
      subtitles: ["Юридический аутсорсинг", "Юридическое обслуживание"],
    },
    {
      title: "Корпоративное право",
      imgSource: "/img/4.jpg",
      subtitles: [
        "Регистрация ТОО/АО",
        "Перерегистрация/Ликвидация",
        "Разработка корпоративных документов",
        "Консультация органов управления",
      ],
    },
    {
      title: "Сопровождение в тендерах",
      imgSource: "/img/5.jpg",
      subtitles: [
        "Услуги тендерного специалиста",
        "Госзакупки",
        "Закупки нац. компаний и холдингов",
        "Закупки субъектов естественных монополий",
      ],
    },
    {
      title: "Защита интересов",
      imgSource: "/img/6.jpg",
      subtitles: [
        "Юридические консультации",
        "Исполнительное производство",
        "Представительство в суде",
        "Подготовка жалоб, претензий",
      ],
    },
    {
      title: "Правовой аудит",
      imgSource: "/img/7.jpg",
      subtitles: [
        "Кадровый аудит",
        "Договорной аудит",
        "Аудит закупочных процедур",
        "Аудит ВНД",
      ],
    },
    {
      title: "Консалтинг в сфере строительства",
      imgSource: "/img/8.jpg",
      subtitles: ["Договоры строительного подряда", "Споры, связанные с ними"],
    },
    {
      title: "Медиация",
      imgSource: "/img/9.jpg",
      subtitles: ["Урегулирование споров профессиональным медиатором"],
    },
  ];

  const serviceCard = [
    {
      title: "Профессиональную консультацию юристов",
      imgSource: "/img/11.jpg",
    },
    {
      title: "Индивидуальный подход к каждому клиенту",
      imgSource: "/img/22.jpg",
    },
    {
      title: "Скидки и гибкая система оплаты для каждого клиента",
      imgSource: "/img/33.jpg",
    },
    {
      title: "Сохранность всей конфиденциальной информации о клиенте",
      imgSource: "/img/44.jpg",
    },
    {
      title:
        "Профессиональную юридическую помощь по защите ваших прав и интересов в суде и в государственных органах",
      imgSource: "/img/55.jpg",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Background Image - позади Banner и Header */}
      <div
        className="absolute top-0 left-0 w-full opacity-35 -z-10 bg-cover bg-center lg:bg-auto lg:bg-top"
        style={{
          backgroundImage: `url('/img/hero-section-bg.png')`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          borderBottom: "2px solid black",
          backgroundSize: "cover", // Мобильная и планшетная версия
        }}
      >
        {/* Для десктопа через inline стиль с медиа запросом */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            backgroundImage: `url('/img/hero-section-bg.png')`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
          }}
        />
      </div>

      {/* Hero Section Content */}
      <section className="relative z-10">
        <div className="px-4 lg:px-0">
          <h1 className="mt-8 uppercase text-xl text-center font-black text-[#0670A1] leading-tight sm:mt-12 sm:text-2xl md:mt-16 md:text-3xl lg:mt-20 lg:text-4xl xl:text-5xl 2xl:text-[72px]">
            Профессиональная защита
            <br />
            ваших прав — с гарантией
          </h1>

          <p className="mt-4 text-center font-bold text-lg text-[#343434] sm:mt-6 sm:text-xl md:mt-8 lg:text-xl xl:text-2xl">
            Надёжно. Быстро. Компетентно. С полным соблюдением
            конфиденциальности.
          </p>

          <p className="mt-4 text-center font-bold text-base text-[#343434] opacity-80 sm:mt-5 md:mt-6 md:text-lg lg:text-lg xl:text-xl">
            Мы ценим ваше время и доверие — предоставляем юридическую помощь{" "}
            <span className="hidden lg:inline">
              <br />
            </span>
            на высоком уровне, строго соблюдая тайну обращения.
          </p>

          <div className="flex gap-2 justify-center mt-8 flex-wrap mx-auto px-2 sm:gap-3 sm:mt-10 md:mt-12 sm:px-4 lg:px-4">
            {dealsText.map((deal, index) => (
              <p
                key={index}
                className="border border-[#0670A1] rounded-lg bg-[#fff] cursor-pointer hover:bg-blue-100 transition-colors p-2 text-center font-semibold text-sm text-[#343434] sm:p-3 sm:text-base md:text-lg"
              >
                {deal}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="mt-12 sm:mt-16 lg:mt-20 2xl:mt-24">
        <div className="px-4">
          <h2 className="section-text font-black">
            Качественное решение юридических вопросов
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:mt-8 sm:gap-6 lg:mt-10 lg:gap-2 lg:px-4">
            {legalServices.map((service, idx) => (
              <Card
                header={
                  <Image
                    className="w-20 h-auto sm:w-24 md:w-28 lg:w-32"
                    src={service.imgSource}
                    alt={`image-${service.title}`}
                    loading="lazy"
                  />
                }
                className="w-full max-w-sm mx-1 transition-all duration-300 hover:backdrop-blur-md hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:-translate-y-2 select-none sm:max-w-md md:max-w-lg lg:w-[440px] lg:max-w-none lg:m-2"
                key={idx}
              >
                <h2 className="text-center text-lg font-semibold p-2 sm:text-xl md:text-[22px] lg:text-[24px]">
                  {service.title}
                </h2>
                <ul>
                  {service.subtitles.map((text, id) => (
                    <li
                      className="mt-2 text-center text-sm sm:mt-3 sm:text-base lg:text-lg"
                      key={id}
                    >
                      ✔️ {text}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
<section className="mt-12 sm:mt-16 lg:mt-20 2xl:mt-24">
  <div className="flex items-center mix-blend-luminosity bg-[url('/img/about-bg.png')] bg-cover bg-center bg-no-repeat mt-3 border-t-1 border-b-1 border-[#343434] h-[300px] w-full bg-white px-4 sm:h-[400px] sm:px-6 md:h-[500px] md:px-8 lg:h-[600px] lg:bg-right lg:px-12 2xl:h-[700px]">
    <div className="flex flex-col gap-1 sm:gap-2">
      <h1 className="uppercase font-black text-2xl bg-gradient-to-r from-[#343434] to-[#0670A1] bg-clip-text text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
        О нас
      </h1>
      <p className="mt-2 font-medium text-xs leading-relaxed sm:mt-3 sm:text-base sm:w-3/4 md:mt-4 md:text-lg md:w-2/3 lg:w-1/2 lg:text-xl 2xl:text-2xl">
        Профессиональный опыт юристов по гражданским и административным
        делам, корпоративным спорам, решению споров с государственными
        органами, учреждениями и организациями всех форм собственности
        позволяет положительно решать острые вопросы и проблемы наших
        клиентов. <br className="hidden sm:inline" />{" "}
        <br className="hidden sm:inline" /> Опыт наших специалистов в
        области правового регулирования отношении возникающих в
        авиационном, железнодорожном, автомобильном и водном транспортах,
        недропользовании, строительстве и финансовом регулировании, в том
        числе фискального, позволяет нашим клиентам уверенно планировать
        свои действия и будущее.
      </p>
    </div>
  </div>
</section>

      {/* Services Grid Section */}
      <section className="mt-12 sm:mt-16 lg:mt-20 2xl:mt-24">
        <h1 className="section-text px-4 sm:px-0">
          Обратившись в нашу юридическую{" "}
          <span className="hidden sm:inline">
            <br />
          </span>{" "}
          фирму Вы получите
        </h1>
        <div className="mt-4 px-4 sm:mt-6 lg:px-8 xl:px-16 2xl:px-0">
          {/* Первый ряд - 3 карточки */}
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:mx-auto xl:max-w-fit xl:gap-4">
            {serviceCard.slice(0, 3).map((serv, index) => (
              <div
                style={{ backgroundImage: `url(${serv.imgSource})` }}
                className="w-full h-[200px] rounded-lg bg-cover bg-no-repeat relative overflow-hidden sm:h-[250px] md:h-[300px] lg:w-[350px] lg:h-[300px] xl:w-[380px] xl:h-[320px] 2xl:w-[428px] 2xl:h-[360px]"
                key={index}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0670A1] to-transparent hover:to-[#0670A1]/25 transition-all duration-500"></div>
                <h2 className="uppercase absolute bottom-0 left-0 right-0 text-center text-base font-semibold p-3 text-white z-10 sm:text-lg xl:text-[18px] 2xl:text-[20px]">
                  {serv.title}
                </h2>
              </div>
            ))}
          </div>

          {/* Второй ряд - 2 карточки */}
          <div className="flex flex-col gap-4 mt-4 sm:grid sm:grid-cols-1 lg:grid-cols-2 xl:mx-auto xl:max-w-fit xl:gap-4">
            {serviceCard.slice(3, 5).map((serv, index) => (
              <div
                style={{ backgroundImage: `url(${serv.imgSource})` }}
                className="w-full h-[200px] rounded-lg bg-cover bg-no-repeat relative overflow-hidden sm:h-[250px] md:h-[300px] lg:w-[530px] lg:h-[300px] xl:w-[580px] xl:h-[320px] 2xl:w-[650px] 2xl:h-[360px]"
                key={index}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0670A1] to-transparent hover:to-[#0670A1]/25 transition-all duration-500"></div>
                <h2 className="uppercase absolute bottom-0 left-0 right-0 text-center text-base font-semibold p-3 text-white z-10 sm:text-lg xl:text-[18px] 2xl:text-[20px]">
                  {serv.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="mt-12 mb-6 sm:mt-16 sm:mb-8 lg:mt-20 2xl:mt-24">
        <h1 className="section-text px-4 sm:px-0">Сертификат о деятельности</h1>
        <div className="mt-4 flex justify-center px-4 sm:mt-6 sm:px-0">
          <div className="flex border-1 rounded-lg bg-[#eaeaea] w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[396px] 2xl:w-[460px]">
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
    </div>
  );
}
