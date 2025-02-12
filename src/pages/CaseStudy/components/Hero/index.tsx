// const Hero = () => {
//   const content = [
//     "Brand story",
//     "A Conceptual Tribute to the Future of Drone Delivery",
//     "Product Video",
//   ];
//   return (
//     <>
//       <h5 className="text-[120px] mt-[90px] font-black text-center leading-[115px]">
//         <span
//           style={{
//             background: "linear-gradient(to bottom, #FEBE03, #FF3F02)", // Vertical gradient
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             display: "inline-block",
//           }}
//           className="bg-gradient-to-r from-red to-yellow bg-clip-text"
//         >
//           VIONEX
//         </span>{" "}
//         <br />
//         SKYSWIFT
//       </h5>

//       <div className="flex flex-col items-center mb-16">
//         <div className=" flex gap-5 mb-3">
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className="glassy-bg flex xs:justify-start justify-between items-center xs:gap-4 gap-12   border rounded-full xs:px-2 md:px-5 xs:py-2 md:py-2 xs:mx-8 sm:mx-0 "
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//         <p className="text-center mx-[100px]">
//           <span className="font-bold">Vionex </span>
//           is a pioneering research and development company specializing in
//           aerospace technologies. Known for pushing the boundaries of innovation
//           in air transport, <span className="font-bold">Vionex </span> has now
//           conceptualized SkySwift, a drone delivery system designed to
//           revolutionize last-mile logistics across industries.
//         </p>
//       </div>
//     </>
//   );
// };

// export default Hero;

const Hero = () => {
  const content = [
    "Brand story",
    "A Conceptual Tribute to the Future of Drone Delivery",
    "Product Video",
  ];

  return (
    <>
      <h5 className="text-5xl sm:text-[90px] lg:text-[120px] mt-8 sm:mt-20 md:mt-16 lg:mt-20 font-black text-center leading-tight md:leading-tight lg:leading-[105px]">
        <span
          style={{
            background: "linear-gradient(to bottom, #FEBE03, #FF3F02)", // Vertical gradient
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
          className="bg-gradient-to-r from-red to-yellow bg-clip-text"
        >
          VIONEX
        </span>{" "}
        <br />
        SKYSWIFT
      </h5>

      <div className="flex flex-col items-center  mb-8 md:mb-16">
        <div className="flex flex-col sm:flex-row  xs:items-center sm:items-start gap-3 md:gap-5 mb-3 px-4 md:px-0">
          {content.map((item, index) => (
            <div
              key={index}
              className="w-fit border glassy-bg flex justify-center items-center 
                         px-4 py-2 md:px-5 md:py-2 rounded-full text-sm md:text-base
                         whitespace-nowrap overflow-hidden text-ellipsis"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="text-center xs:px-6 md:px-24 lg:px-32  text-sm md:text-base">
          <span className="font-bold">Vionex </span>
          is a pioneering research and development company specializing in
          aerospace technologies. Known for pushing the boundaries of innovation
          in air transport, <span className="font-bold">Vionex </span> has now
          conceptualized SkySwift, a drone delivery system designed to
          revolutionize last-mile logistics across industries.
        </p>
      </div>
    </>
  );
};

export default Hero;
