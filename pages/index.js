import Genres from "../components/business/Genres/Genres";
import Hero from "../components/business/Hero/Hero";
import Bio from "../components/business/Bio/Bio";
import Contact from "../components/business/Contact/Contact";

export default function IndexPage() {
  return (
    <body className="bg-black">
      <Hero />
      <Bio />
      <Genres />
      <Contact />
    </body>
  )
}


