import { Button } from "@/components/ui/moving-border";

const Anticipate = () => {
  return (
    <div className="p-[1rem] md:p-[4rem] w-full">
      <div className="text-white w-full text-center">
        <h1 className="font-bold text-[50px] md:text-[4rem]">AMOG Coin
        </h1>
        <h2 className="font-semibold text-[25px] md:text-[4rem] gradient-text">Embrace Dominance and Excellence
        </h2>
      </div>
      
      <div className="mt-8 w-full flex md:flex-nowrap flex-wrap-reverse  gap-4 md:gap-10 justify-center items-start pointer-events-none">
        <div className="md:px-[4rem] w-full flex flex-col gap-2">
          <div
            className="w-full flex flex-col"
          >
            <Button
              borderRadius="15px"
              className="bg-dark-2 flex items-center justify-center w-full overflow-hidden border-2 border-primary-500/50">
              <img 
                src="/assets/meme1.jpg"
                alt="meme"
                className="w-full h-full"
              />
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
            Inspired by the concept of the AMOG (Alpha Male of the Group) and the social media trend of “mogging,” $AMOG Coin on Solana represents the pinnacle of dominance and superiority.
          </p>

          <br />
          
          <p>
            $AMOG signifies the ultimate leader, outshining others in lookmaxxing, auramaxxing, and mewing. 
          </p>

          <br />

          <p>
            Mogging extends this dominance to all aspects of life, particularly physical appearance, where one’s enhanced look makes them stand out and makes lesser individuals get mogged.
          </p>
        </div>
        
      </div>
      
      <div className="mt-8 w-full flex md:flex-nowrap flex-wrap  gap-4 md:gap-10 justify-center items-start pointer-events-none">
        <div className="w-full font-medium text-[15px]">
          <p>
            By investing in $AMOG Coin, you align with a community that values excellence, ambition, and the drive to mew the best. This coin is more than just a digital asset; it’s a symbol of your commitment to achieving superior status in both the digital and real worlds. 
          </p>

          <br />
          
          <p>
            Join us in the pursuit of greatness. Embrace your aura’s potential. Become $AMOG.
          </p>
        </div>
        <div className="md:px-[4rem] w-full flex flex-col gap-2">
          <div
            className="w-full flex flex-col"
          >
            <Button
              borderRadius="15px"
              className="bg-dark-2 flex items-center justify-center w-full overflow-hidden border-2 border-primary-500/50">
              <img 
                src="/assets/meme1.jpg"
                alt="meme"
                className="w-full h-full"
              />
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Anticipate;