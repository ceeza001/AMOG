import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import { Meteors } from "@/components/ui/meteors";

const Hero = () => {
  return (
    <div className="max-w-screen overflow-hidden absolute top-0 inset-0">
      <Meteors number={20} />
      <div className="p-[1rem] w-full flex justify-between items-center">
        <div className="rounded-lg h-[4rem] w-[4rem] border-4 bg-black border-[#FCD167]">
          <img 
            src="/assets/mogg.jpg"
            alt="mogg"
            className="w-full h-full"
          />
        </div>

        <h2 className="font-bold text-[1rem] text-[#FCD167]">Moggs</h2>
      </div>
      
      <motion.h1 className="mt-4 text-center text-white text-[3rem] playwrite">
        $moggs
      </motion.h1>
      
      <div className="p-[2rem] md:p-[4rem] w-full z-50 flex flex-col gap-10 md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="w-full max-w-[30rem] flex items-center justify-center rounded-lg border-4">
          <img 
            src="/assets/mogg.jpg" 
            alt="mogg" 
            className="w-full aspect-square"
          />
        </motion.div>
        
        <div className="w-full select-none gap-2 flex flex-col items-center">
          <h1 className="text-white font-extrabold text-[24px]">Now On Solana</h1>
          <p className="text-[#FCD167] my-4">CA:</p>

          <div className="flex items-center gap-8 justify-between w-full">
            <Link to="/" className="rounded-[25px] bg-white bg-[#FCD167] text-black font-bold p-[0.8rem]">
              Buy $moggs
            </Link>
            <Link to="/">
                <img 
                  src="/assets/icons/telegram.svg"
                  alt="telegram"
                  width={50}
                  height={50}
                />
              </Link>

              <Link to="/" className="relative">
                <span className="bg-white top-2 left-2 absolute z-[-1] h-[2rem] w-[2rem]" />
                <img 
                  src="/assets/icons/x.svg"
                  alt="X-twitter"
                  width={50}
                  height={50}
                />
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
