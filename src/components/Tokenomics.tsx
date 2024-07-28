import { tokenomics } from "@/constants"
import { motion } from "framer-motion"

const Tokenomics = () => {
  return (
    <div className="w-full p-[1rem] md:px-[4rem] pointer-events-none">
      <div className="w-full md:w-2/5">
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0}}
          transition={{ delay: 0, duration: 1.2, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-bold text-[50px]">
          Tokenomics
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0, duration: 1.2, ease: "easeInOut"}}
          viewport={{ once: true }}
          className="font-bold text-[25px] gradient-text2">
          Supply & Distribution
        </motion.h2>
        
      </div>
      <div className="mt-8 flex gap-4 flex-wrap md:flex-nowrap justify-between items-center">
        {tokenomics.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -100, y: -100 }}
            whileInView={{ opacity: 1, x: 0, y: 0}}
            transition={{ delay: i * 0.3, duration: 1.5, ease: "easeInOut"}}
            viewport={{ once: true }}
            className="text-center w-full bg-dark-2 border border-[#1F1F22] rounded-lg p-4">
            <h2 className="text-[20px] font-bold gradient-text">{item.title}</h2>
            <p>{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
