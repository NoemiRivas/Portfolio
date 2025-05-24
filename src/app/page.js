
import Habilities from "./components/Habilities";
import Nav from "./components/Nav";
import { IconsNetwork } from "@/utils/icons";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <>
      <div className="font-mono">
        <Nav />
        <div className="flex flex-col items-start gap-10 py-12">
          <h1 className="text-6xl font-bold ">Noemi Bonilla 👩🏻‍💻​</h1>
          <p className="text-2xl">
            Desarrolladora web full stack, con pasion por la librería de React y
            sus frameworks especialmente Next.js para webs mas complejas utilizo las tecnologias como
            Node.js, Express, MongoDB, entre otras. Poseo conocimientos solidos
            con el lenguaje de programación JavaScript.
          </p>
        </div>
        <div className="flex justify-between cursor-pointer py-10">
          <IconsNetwork  />
          <button className="bg-stone-700 text-white text-xl font-bold p-4 rounded-md hover:bg-stone-800 transition-colors duration-300">
            Descargar cv
          </button>
        </div>
        <div>
          <Projects />
        </div>
        <div className="py-12 ">
          <Habilities />
        </div>

        <div>
          <Contact />
        </div>
        
      </div>
    </>
  );
}
