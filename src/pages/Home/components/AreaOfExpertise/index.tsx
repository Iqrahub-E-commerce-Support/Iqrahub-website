import { useState, useEffect } from "react";
import img1 from "@/assets/images/expertise/img-1.png";
import img2 from "@/assets/images/expertise/img-2.png";
import img3 from "@/assets/images/expertise/img-3.png";
import img4 from "@/assets/images/expertise/img-4.png";
import img5 from "@/assets/images/expertise/img-5.png";
const AreaOfExpertise = () => {
  const cards = [
    { bgimage: img1, title: "Event & Tour Promotion" },
    { bgimage: img2, title: "Jewelry Promotion" },
    { bgimage: img3, title: "Real State Promotion" },
    { bgimage: img4, title: "Product Promotion" },
    { bgimage: img5, title: "Restaurant Promotion" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 500); // Match this with transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  // Dynamically calculate visible cards
  const visibleCards = [
    ...cards.slice(currentIndex, currentIndex + 5),
    ...cards.slice(0, Math.max(0, currentIndex + 5 - cards.length)),
  ];

  return (
    <div className="overflow-hidden relative mt-[-20px]">
      <div
        className={`flex gap-12 items-end justify-center mb-5 transition-transform duration-500 ease-in-out`}
      >
        {visibleCards.map((card, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${card.bgimage}) ` }}
            className={`relative group  border-2 rounded-[12px] transition-all duration-300 bg-cover bg-center 
              ${
                index === 2
                  ? "h-[400px] w-[300px] "
                  : "h-[250px] w-[250px] bg-opacity-100"
              }`}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>

            {/* Card Content */}
            <div className="flex flex-col justify-end h-full ml-2">
              <h1 className="font-semibold ">{card.title}</h1>
              <p className="mt-1 leading-5 mb-3 text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            {/* Remove border on hover */}
            <style>{`
  .group:hover {
    border: none;
  }
`}</style>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaOfExpertise;
