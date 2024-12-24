import Accordion from "../UI/Accordion";
import { accordionData } from "../assets/contentAccordion";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__text">
          <div className="info__text-head">
            Фильмы представлены в отличном качестве, их можно скачать торрентом
            бесплатно
          </div>
          <div className="info__text-light">
            <p>
              Наш сайт Tordfilm предлагает широкий выбор новинок фильмов и
              сериалов для скачивания через торрент. Забудьте о необходимости
              тратить время и деньги на билеты в кинотеатр - скачивайте новинки
              кино прямо сейчас и смотрите их у себя дома! Скачивание новинок
              фильмов и сериалов через торрент на нашем сервисе - это быстро,
              удобно и бесплатно.
            </p>
            <br></br>
            <p>
              Мы предоставляем доступ к самым свежим и актуальным фильмам и
              сериалам, которые можно скачать в высоком качестве. Наслаждайтесь
              просмотром новых и захватывающих произведений киноискусства в
              любое время! Не упустите возможность быть в курсе самых свежих
              новинок киноиндустрии! Скачивайте новинки фильмов и сериалов через
              торрент на нашем сервисе и наслаждайтесь просмотром без
              ограничений и прерываний!
            </p>
          </div>
        </div>
        <div className="info-accordion">
          <div className="info-accordion-title">Часто задаваемые вопросы</div>
          {accordionData.map(({ title, content }) => (
            <Accordion key={title} title={title} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
