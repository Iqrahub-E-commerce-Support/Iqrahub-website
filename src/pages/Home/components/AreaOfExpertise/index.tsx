import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "@/assets/images/expertise/img-1.png";
import img2 from "@/assets/images/expertise/img-2.png";
import img3 from "@/assets/images/expertise/img-3.png";
import img4 from "@/assets/images/expertise/img-4.png";
import img5 from "@/assets/images/expertise/img-5.png";

const AreaOfExpertise = () => {
  const cards = [
    { bgimage: img1, title: "Event & Tour Promotion" },
    { bgimage: img2, title: "Jewelry Promotion" },
    { bgimage: img3, title: "Real Estate Promotion" },
    { bgimage: img4, title: "Product Promotion" },
    { bgimage: img5, title: "Restaurant Promotion" },
  ];

  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndexes((prevIndexes) =>
        prevIndexes.map((index) => (index + 1) % cards.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  // Define positions moving from right to left
  const positions = ["pos4", "pos3", "pos2", "pos1", "pos0"];

  const cardVariants = {
    pos4: { x: "190%", scale: 0.7, zIndex: 1 },
    pos3: { x: "105%", scale: 0.7, zIndex: 2 },
    pos2: { x: "0%", scale: 1, zIndex: 3 }, // Center position
    pos1: { x: "-105%", scale: 0.7, zIndex: 4 },
    pos0: { x: "-200%", scale: 0.7, zIndex: 5 },
  };

  return (
    <div className="flex items-center flex-col justify-start bg-black lg:h-[60vh] relative overflow-hidden">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          style={{
            backgroundImage: `url(${card.bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute border rounded-[12px] w-[300px] h-[400px]"
          initial="pos1"
          animate={positions[positionIndexes[index]]}
          variants={cardVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>
          <div className="flex flex-col justify-end h-full ml-2 text-white p-4">
            <h1 className="font-semibold">{card.title}</h1>
            <p className="mt-1 leading-5 mb-3 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </motion.div>
      ))}
      <style>{`
  .group:hover {
    border: none;
  }
`}</style>
    </div>
  );
};

export default AreaOfExpertise;
