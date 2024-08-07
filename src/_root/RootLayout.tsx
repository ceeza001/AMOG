import { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";
import moggBg from "@/assets/mogg.mp3";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/modal";

export const AudioPlaying = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const RootLayout = () => {
  const audioRef = useRef(new Audio(moggBg));
  audioRef.current.volume = 0.08;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const closeModal = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  return (
    <div className="w-full relative">
      <Modal>
        <ModalBody>
          <ModalContent>
            <div className="w-full mb-2">
              <img
                src="/assets/icons/audio.svg"
                alt="sound"
                className="w-1/2 mx-auto h-full invert-white"
              />
            </div>
            <h4 className="text-[12px] md:text-2xl font-bold text-left">
              This website uses sound effects to ensure users get an immersive experience.
            </h4>
          </ModalContent>
          <ModalFooter>
            <ModalTrigger isPlayingMusic={isPlayingMusic} closeModal={closeModal}>
              GOT IT
            </ModalTrigger>
          </ModalFooter>
        </ModalBody>
      </Modal>

      <Outlet />

      <div className="fixed bottom-10 right-2 h-[4rem] px-4 w-[10rem] border border-dark-4 rounded-lg black-glassmorphism">
        <div className="flex items-center w-full h-full gap-4">
          <button
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-[1.6rem] h-[1.6rem]"
          >
            <img
              src={`/assets/icons/${!isPlayingMusic ? 'play' : 'pause'}.svg`}
              alt="play"
              className="invert-white w-full h-full ease-in-out duration-300"
            />
          </button>

          <div className={`flex ${isPlayingMusic && 'gap-2'} items-center ease-in-out duration-300`}>
            {AudioPlaying.map((stroke, i) => (
              <motion.span
                key={stroke.id}
                animate={{
                  height: isPlayingMusic ? [10, 20, 10] : 2,
                }}
                transition={{
                  delay: isPlayingMusic ? i * 0.3 : 0,
                  duration: isPlayingMusic ? 1.1 : 0,
                  repeat: isPlayingMusic ? Infinity : 0,
                  repeatType: "loop",
                }}
                className={`${isPlayingMusic ? 'w-[3px] bg-primary-500 duration-100' : 'w-[12px] bg-white duration-300'}  ease-in-out  text-white `}
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-[4rem] p-[1rem] md:p-[2rem] bg-black">
        <h2 className="font-bold text-[40px] text-white">$AMOG</h2>

        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-10 items-start justify-between">
          <div className="w-full">
            <h3 className="mb-4 font-bold text-white text-[20px]">Risk Warning and Disclaimer</h3>
            <p>
              Investment in memecoins such as AMOG Token carries inherent risks and should be approached with caution; always conduct thorough research and seek professional advice, as the value can be highly volatile and subject to sudden fluctuations, with past performance not indicative of future results.
            </p>
          </div>

          <div className="flex flex-col w-full">
            <h3 className="mb-4 font-bold text-white text-[20px]">Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/">Dex Screener</Link>
            <Link to="/">Dex Tools</Link>
          </div>

          <div className="flex flex-col w-full">
            <h3 className="mb-4 font-bold text-white text-[20px]">Social Links</h3>
            <Link to="https://x.com/AlphaMOGGS">Twitter</Link>
            <Link to="https://t.me/AMOGofficial">Telegram</Link>
          </div>
        </div>

        <hr className="border my-2 mt-4" />
        <div className="break-words flex flex-col justify-center items-center text-center w-full">
          <h2 className="mb-4 break-words max-w-[20rem] md:max-w-full text-[#FCD167]">CA: FQxRQsCnBFSwgGqKKyJVFkFV3qyQsKUp5am6c3Ntpump</h2>
          <p>©AMOG 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;