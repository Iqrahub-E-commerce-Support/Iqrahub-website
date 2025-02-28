const Challenges = () => {
  return (
    <>
      <div className="xs:px-6 sm:px-7 md:px-16  flex items-center w-screen gap-4 pt-16">
        <p className="xs:text-lg sm:text-xl font-semibold ">Challenges</p>
        <div className="h-[0.1px] xs:w-[25%] sm:w-[72%] bg-white" />
        <p className="text-yellow xs:text-lg sm:text-xl font-semibold ">
          With Iqrahub Story Media
        </p>
      </div>
      <div className="xs:px-6 sm:px-7 md:px-16 flex flex-col justify-center h-full items-center xs:-mt-[40px] lg:mt-0">
        <h2 className="font-black text-yellow xs:text-[48px] text-center sm:text-[56px] md:text-[60px]">
          CHALLENGES
        </h2>
        <h6 className="font-bold xs:text-[18px] sm:text-[22px] xs:mx-0 xl:mx-48 text-center">
          Our challenge was to visually and narratively demonstrate how SkySwift
          could offer a faster, more affordable, and sustainable delivery
          solution.{" "}
        </h6>
        <p className="text-center font-medium xs:text-[14px] sm:text-[18px] xs:mx-0  xl:mx-48 mt-5 xs:pb-4 lg:pb-0">
          We needed to address concerns about efficiency, cost reduction, and
          environmental impact while making the concept of drone delivery both
          relatable and aspirational. The goal was to create a campaign that
          highlighted the technical advantages of drones and their potential to
          solve real-world logistical problems.
        </p>
      </div>
    </>
  );
};

export default Challenges;
