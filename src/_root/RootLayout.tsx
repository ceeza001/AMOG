import { useEffect, useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import moggBg from "@/assets/mogg_bg.mp3";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/modal";

const RootLayout = () => {
  const audioRef = useRef(new Audio(moggBg));
  audioRef.current.volume = 0.05;
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
    <div className="w-full">
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
            <Link to="/">Twitter</Link>
            <Link to="/">Telegram</Link>
          </div>
        </div>

        <hr className="border my-2 mt-4" />
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h2 className="text-[#FCD167]">CA:</h2>
          <p>©AMOG 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;