import { motion } from "framer-motion"
import { BackgroundBeams } from "@/components/ui/background-beams";
 
const Roadmap = () => {
  return (
    <div className="relative rounded-lg bg-dark-2 p-4 w-full pointer-events-none">
      <div className="text-white w-full text-center mx-auto md:w-2/5">
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ delay: 0, duration: 1.2, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-bold text-[50px]">
          Roadmap
        </motion.h1>
      </div>

      <div className=" border-t border-white/40">
        <div className="py-4 space-y-2">
          <h1 className="gradient-text">Phase 1</h1>
          
          <div className="my-4 flex flex-col">
            <div className="mb-2 flex items-start gap-2">
              <img 
                src="/assets/icons/checked-box.svg"
                alt="checked"
                className="w-6 h-6"
              />
              <p className="line-through">Socials X verified</p>
            </div>
            <div className="mb-2">
              <img 
                src="/assets/x-verified.jpeg"
                className="w-full"
              />
            </div>
          </div>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6"
            />
            <p className="line-through">DEX Screener Pre-Paid</p>
          </div>

          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>DEX Ads (Upon Raydium Migration)</p>
          </div>

          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>Finder Trending (@100k MC)</p>
          </div>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>Burn 2% Of the Total Supply</p>
          </div>
        </div>

        <hr className="border my-4" />
        
        <div className="py-4 space-y-2">
          <h1 className="gradient-text">Phase 2</h1>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>NFT Art Released</p>
          </div>

          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>AMOG Leaderboard Released</p>
          </div>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>KOL Partnerships (3 pre-approved)</p>
          </div>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>Burn 3% Of the Total Supply</p>
          </div>
        </div>

        <hr className="border my-4" />
        
        <div className="py-4 space-y-2">
          <h1 className="gradient-text">Phase 3</h1>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>NFT presale announcement</p>
          </div>

          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>Burn 5% Of the Total Supply</p>
          </div>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>Pre-sample Of Merch</p>
          </div>
          
          <div className="flex items-start gap-2">
            <img 
              src="/assets/icons/checked-box.svg"
              alt="checked"
              className="w-6 h-6 invert-white"
            />
            <p>More to come. Are you $AMOG?</p>
          </div>
        </div>
        
      </div>
      
      <BackgroundBeams />
    </div>
  );
};

export default Roadmap;
