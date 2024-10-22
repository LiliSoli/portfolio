import Header from "@components/Header";
import Banner from "@components/Banner";
import Card from "@components/Card";
import SkillCard from "@components/SkillCard";
import Form from "@components/Form";
import Footer from "@components/Footer"
import cardsList from "@data/projects.json";

export default function Home() {

  return (
    <>
      <Header />
        <Banner />
        <section id="portfolio" className="pt-32">
          <h2>Portfolio</h2>
          <div className="">
            {cardsList
              .map((card) => (
              <Card
              key={card.title}
              card={card}
              />
            ))}
          </div>
        </section>
        <section>
          <h2>Skills</h2>
          <SkillCard />
        </section>
        <section>
          <h3>Restons en contact!</h3>
          <Form/>
        </section>
      <Footer />
    </>
  );
}