"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeProps {
  animationCompleted: boolean;
  setAnimationCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Welcome: React.FC<WelcomeProps> = ({
  animationCompleted,
  setAnimationCompleted,
}) => {
  const [welcomeMessage, setWelcomeMessage] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  // const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  const languages: string[] = [
    "Hello",
    "Bonjour",
    "Ciao",
    "Hallo",
    "你好 ",
    "こんにちは ",
    "مرحبا",
    "Hola",
    "नमस्ते ",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < languages.length) {
        setWelcomeMessage(languages[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setAnimationCompleted(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div>
      <AnimatePresence>
        {!animationCompleted && (
          <motion.div
            key="shutter"
            className="shutter absolute top-0 left-0 w-full h-full flex justify-center items-center bg-primaryBlack z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-center text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              &#8226; {welcomeMessage}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Welcome;
