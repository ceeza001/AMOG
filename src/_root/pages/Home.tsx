import { Hero, Roadmap, HowToBuy, Anticipate, Tokenomics } from "@/components/";

const Home = () => {

  return (
    <div className="">
      <div className="w-full h-[50rem] max-w-[100vw] relative">
        <Hero />
      </div>

      <div className="my-10 md:my-0">
        <Anticipate />
      </div>

      <div className="my-[4rem] p-[1rem] md:px-[4rem]">
        <Roadmap />
      </div>

      <div className="my-[4rem]">
        <HowToBuy />
      </div>

      

      <div className="my-[4rem] text-white">
        <Tokenomics />
      </div>
    </div>
  );
};

export default Home;