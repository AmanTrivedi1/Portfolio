import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import img1 from "../img/project/pr1.png"
import img2 from "../img/project/pr2.png"
import img3 from "../img/project/pr3.png"
import img4 from "../img/project/pr4.png"
import img5 from "../img/project/pr5.png"
import img6 from "../img/project/pr6.png"
import img7 from "../img/project/pr7.png"
import img8 from "../img/project/pr8.png"
import img9 from "../img/project/pr9.png"
import img10 from "../img/project/pr10.png"
import img11 from "../img/project/pr11.png"
import img12 from "../img/project/pr12.png"

const Example = () => {
  return (
      <div className="max-w-6xl m-auto">
           <HorizontalScrollCarousel />
      </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <a href={card.livelink}>
                <Card card={card} key={card.id} />;
            </a>
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden  "
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain ",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0  h-[350px] w-[350px] z-0 transition-transform  duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute  bottom-14 left-0 grid place-content-center">
        <p className=" bg-grey px-6 rounded-sm py-2 sm:text-base text-sm font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    id: 1,
    url: img1,
    title: "Scribble",
    livelink:"https://github.com/AmanTrivedi1/Scribble",
   
  },
  {
    id: 2,
    url: img2,
    title: "Foody",
    livelink:"https://github.com/AmanTrivedi1/Order-Food-Online",
   
  },
  {
    id: 3,
    url: img3,
    title: "C2C",
    livelink:"https://github.com/mud1tx/Consumer",
   
  },

  {
    id: 4,
    url: img4,
    title: "Nike Store",
    livelink:"https://github.com/AmanTrivedi1/Nikestore-client",
   
  },
  {
    id: 5,
    url: img5,
    title: "Movix",
    livelink:"https://github.com/AmanTrivedi1/Movie-Webapp",
   
  },
  {
    id: 6,
    url: img6,
    title: "Twitter",
    livelink:"https://github.com/AmanTrivedi1/Tweet",
   
  },
  {
    id: 7,
    url: img7,
    title: "TakeNotes",
    livelink:"https://github.com/AmanTrivedi1/TakeNotes",
   
  },
  {
    id: 8,
    url: img8,
    title: "Netflix",
    livelink:"https://github.com/mud1tx/netflix",
   
  },
  {
    id: 9,
    url: img9,
    title: "LMS",
    livelink:"https://github.com/AmanTrivedi1/LearningManagement",
   
  },
  {
    id: 10,
    url: img10,
    title: "Blog App",
    livelink:"https://github.com/AmanTrivedi1/blogapp",
   
  },
  {
    id: 11,
    url: img11,
    title: "Task Manager",
    livelink:"https://github.com/AmanTrivedi1/TaskManager",
   
  },
  {
    id: 12,
    url: img12,
    title: "Create Readme",
    livelink:"https://github.com/AmanTrivedi1/CreateReadme",
   
  },
 
];