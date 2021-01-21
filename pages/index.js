import Genres from "../components/business/Genres/Genres";
import Hero from "../components/business/Hero/Hero";
import Bio from "../components/business/Bio/Bio";
import Contact from "../components/business/Contact/Contact";
import Meta from "../partials/seo-meta";

export default function IndexPage() {
  return (
    <>
    <Meta
        title="Home | Jake Kile, Developer, Artist, Musician"
        desc="The home of Jake Kile, developer extraordinaire"
        canonical="https://www.jakekile.com/"
      />
    <body className="bg-black">

      <Hero />
      <Bio />
      <Genres />
      <Contact />
    </body>
    </>
  )
}


