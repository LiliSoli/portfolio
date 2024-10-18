import Header from "@components/Header";
import Banner from "@components/Banner";
import Card from "@components/Card";
import cardsList from "@datas/projects.json";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Header/>
      <Banner />
      <section className="" id="portfolio">
        <div className="">
                {cardsList.map(card => (
                    <Link href={`/projects/${card.title}`} key={card.title}>
                        <Card 
                            title={card.title}
                            thumb={card.thumb}
                        />
                   </Link> 
                ))}
        </div>
      </section>
    </main> 
  );
}