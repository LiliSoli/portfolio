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
        <section id="portfolio" className="p-16 bg-gradient-to-r from-green-400 to-teal-400">
          <h2 className="text-center text-3xl font-bold mb-16">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mx-4 md:mx-16 lg:mx-52">
            {cardsList
              .map((card) => (
              <Card
              key={card.title}
              card={card}
              />
            ))}
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-center text-3xl font-bold mb-16">Compétences</h2>
          <SkillCard />
        </section>
        <section className="bg-gradient-to-r from-green-400 to-teal-400 p-16">
          <Form/>
        </section>
      <Footer />
    </>
  );
}