import Link from "next/link"
import Image from "next/image"
import DateCountDown from "@/components/dateCountDown"

import HackathonLogin from "@/views/hackathon/Login"
// import heroBg from "../../public/hackathon/Hero.png"

const overview = [
  {
    id: 1,
    title:"Open Governance",
    content: "Applications in open governance involving smart contracts in the African Electoral process; voter registration, casting, and collation of votes, diaspora voting, using zk technology to anonymize casted votes, etc"
  },
  {
    id: 2,
    title:"Financial Inclusion and Education",
    content: "Applications in open governance involving smart contracts in the African Electoral process; voter registration, casting, and collation of votes, diaspora voting, using zk technology to anonymize casted votes, etc"
  },
  {
    id: 3,
    title:"E-Identity and Verification",
    content: "Applications in e-identity and verification; with use cases in digital stamps for e-commerce platforms, cross-border trade & exports, traceability to stem gun running, and supply chain tracking for petroleum products."
  },
  {
    id: 4,
    title:"Entertainment and Media",
    content: "Applications in entertainment and media; artist management, music, and content distribution, copyrights, IP, etc"
  },
  {
    id: 5,
    title:"Digital",
    content: "Applications in digital collectibles; preservation of African artifacts and promotion of digital tourism, etc."
  }
]

const Hackathon = () => {

  type headingProps = {
    title: string
    src: string
    alt: string
  }

  const Heading:React.FC<headingProps> = ({title, src, alt}) => (
    <div className="flex my-7 space-x-4">
      <Image src={src} height={25} width={60} alt={alt} />
      <h1 className="text-[40px] font-semibold">{title}</h1>
    </div>
  )

  const container = "md:p-4 lg:p-10 xl:p-20 lg:max-w-screen-lg xl:max-w-screen-xl";

  const textSize = "text-[18px] md:text-[19px] lg:text-[24px] xl:text-[26px] py-3";

  return (
    <main className="flex flex-col w-screen">
      <section className="flex justify-center w-full py-10 md:pb-0 bg-[#0096FFCC] bg-[url('/hackathon/hero.png')] bg-cover bg-center">
       <div className={`flex flex-col justify-between space-y-[3rem] md:space-y-[3rem] w-full items-center p-2 text-[#fff] ${container}`}>
        <div></div>
        <div className="flex flex-col space-y-[3rem] justify-center items-center h-full w-full">
          <div className="text-center space-y-4 md:space-y-6">
            <h1  className="text-[40px] md:text-[50px] lg:text-[70px] xl:text-[80px]">Web 3.0 <span>Lagos</span> Hackathon </h1>
            <p className="text-[17px] lg:text-[26px] xl:text-[28px]">
              Innovate, Collaborate, and Transform: Build Cutting-Edge Blockchain Solutions with Global Impact and Win Incredible Prizes!
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5 md:flex-row md:space-y-0 md:space-x-[3rem] ">
            <Link href="/hackathon/registration">
              <button className="border-[1px] bg-[#fff] text-black border-black shadow-[-5px_-5px_0px_0px_rgba(0,0,0)] px-6 py-3">Register Today</button>
            </Link>
            <Link href="#learnmore">
              <button className="border-[1px] bg-[#fff] text-black border-black shadow-[-5px_-5px_0px_0px_rgba(0,0,0)] px-6 py-3">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-black w-full space-y-7 border-[1px] bg-[#fff] border-[#1E1E1E] shadow-[-5px_5px_0px_0px_rgba(0,0,0)] p-6">
          <p>Registration Ends In:</p>
          <DateCountDown />
        </div>
       </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full">
        <div className={`${container} p-4`}>
        <article>
          <Heading src="/hackathon/Group16.png" alt="" title="Overview" />
          <p id="learnmore" className={`${textSize}`}>The Web3 Lagos 3.0 Hackathon is a 3-day in-person event designed to bring together the brightest minds in blockchain technology. Participants will collaborate in teams to build impactful projects that address real-world challenges.</p>
          <p className={`${textSize}`}>The hackathon aims to build projects with real-world impact. Teams of 3 to 5 members will tackle problems in various categories.</p>
        </article>

        <article>
          <Heading src="/hackathon/Group9.png" alt="" title="Categories" />
          <p className={`${textSize}`}>The hackathon aims to build projects with real-world impact. Teams of 3 to 5 members will tackle problems in various categories.</p>
        </article>

        <section className="flex flex-wrap justify-strat">
          {overview.map((card) => (
            <article key={card.id} className="space-y-7 p-7 mb-7 md:m-5 md:ml-0 md:h-[400px] md:w-[320px] lg:h-[350px] lg:w-[350px] text-[#fff] bg-[#0096FF] border-[1px] rounded-lg border-[#fff] shadow-[5px_5px_0px_0px_#1ACF2C]">
              <h3 className="text-[22px] font-medium h-[60px] flex items-center">{card.title}</h3>
              <p className="text-[17px]">{card.content}</p>
            </article>
          ) )}
        </section>
        </div>
      </section>

      <section className="bg-[#0096FF]">
        <div>
          <header className="text-[#fff]">
            <Heading src="/hackathon/Vector.png" alt="" title="Event Schedule" />
          </header>
        </div>
      </section>
        {/* <HackathonLogin /> */}
    </main>
  )
}

export default Hackathon