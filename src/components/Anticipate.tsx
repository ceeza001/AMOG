import { Button } from "@/components/ui/moving-border";

const Anticipate = () => {
  return (
    <div className="p-[1rem] md:p-[4rem] w-full">
      <div className="text-white w-full text-center">
        <h1 className="font-bold text-[50px] md:text-[4rem]">$moggs On SOL
        </h1>
        <h2 className="font-semibold text-[25px] md:text-[4rem] gradient-text">A MEME AND MORE
        </h2>
      </div>
      
      <div className="mt-8 w-full flex md:flex-nowrap flex-wrap-reverse  gap-4 md:gap-10 justify-center items-start pointer-events-none">
        <div className="md:px-[4rem] w-full flex flex-col gap-2">
          <div
            className="w-full flex flex-col"
          >
            <Button
              borderRadius="15px"
              className="bg-dark-2 flex items-center justify-center w-full h-[8rem] p-4 border-primary-500/50">
              <h1 className="w-full">MEME</h1>
            </Button>
          </div>
          <div className="flex justify-between gap-2 w-full min-w-full">
            <Button
              borderRadius="15px"
              className="min-w-[10rem] w-full h-[8rem] bg-dark-2 flex items-center justify-center p-4 border-primary-500/50">
              <h1>MEME</h1>
            </Button>
            <Button
              borderRadius="15px"
              className="bg-dark-2 flex items-center justify-center min-w-[10rem] w-full p-4 border-primary-500/50">
              <h1>MEME</h1>
            </Button>
          </div>
        </div>
        
        <div className="w-full font-medium text-[15px]">
          <p>
            Yooo, what's good! Welcome to Moggs, the Solana meme project where we're all about embracing our inner glow-up. We're talkin' looksmaxing, self-love, and a whole lot of sass. Our memes are all about celebratin' what makes you uniquely fire, and roastin' the haters who say otherwise. So, if you're ready to join the Mogg movement and spread some confidence and humor, you're in the right place!
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default Anticipate;