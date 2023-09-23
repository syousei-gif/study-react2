import Image from 'next/image'
import {Links} from './components/links.jsx'
import {Headline} from './components/headline.jsx'
import {UseEfect} from './components/useefect.jsx'
import { Header } from './components/header'
import {CountUp} from './components/countUp.jsx'
import {String} from './components/string.jsx'
import {Add} from './components/add.jsx'





export default function Home() {

  return (
    <>
    <Header />
      <UseEfect />
  
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Headline 
      title="index page"
      path="app/page.js"
      onClick={"Hello index page"}
      >


</Headline>



     <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      
      <h1 className="text-6xl font-bold text-center">index page</h1>
    <CountUp />
    <String />
    <Add />

      <Links />


      
    </main>
    </>
  );
}
