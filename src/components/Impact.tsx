import { motion } from "framer-motion"

const Impact = () => {
  return (
    <div className="w-full p-[1rem] md:px-[6rem] pointer-events-none">
      <div className="text-white w-full text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-bold text-[50px] md:text-[6rem] leading-[101%] gradient-text">It's A Movement
        </motion.h1>
      </div>
      
      <div className="md:w-2/3 mx-auto mt-8 flex flex-col gap-8 items-center text-center">
        <p>$BUTTON was created to merge the world of cryptocurrency with a powerful message of body positivity and self-confidence. The founders saw an opportunity to leverage the fun, viral nature of meme culture to address a deeper societal issue: the need for greater acceptance and celebration of diverse body types.</p>
        <div>
          <img 
            src="/assets/butt1.png"
            className="w-[10rem]"
          />
        </div>
        <p>In this digital age where beauty standards are often narrowly defined and propagated, $BUTTON aims to challenge these norms by celebrating the beauty of diversity. The idea was born from the desire to create a cryptocurrency that wasn't just another financial tool but a movement that could foster self-love and empowerment.</p>
      </div>
    </div>
  );
};

export default Impact;
