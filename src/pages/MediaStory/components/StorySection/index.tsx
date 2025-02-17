import CustomizableHeaderContainer from "@/components/CustomizableHeaderContainer";
import UserSearchIcon from "@/components/icons/UserSearchIcon";
import DesignIcon from "@/components/icons/DesignIcon";
import DeveloperIcon from "@/components/icons/DeveloperIcon";
import RocketIcon from "@/components/icons/RocketIcon/Index";
import story1 from "@/assets/images/story/Story1.jpg";
import story2 from "@/assets/images/story/story2.jpg";
import story3 from "@/assets/images/story/story3.jpg";
import story4 from "@/assets/images/story/story4.jpg";
import ProcessStepCard from "../ProcessStepCard";

import ImageCard from "../ImageCard";
const StorySection = () => {
  // Process steps data
  const processSteps = [
    {
      icon: <UserSearchIcon />,
      number: 1,
      title: "Discovery",
      description:
        "Everything starts with research and immersion. We take a deep dive into your situation, goals, audiences and content. From high level themes to technical specification, we want to know it all.",
    },
    {
      icon: <DesignIcon />,
      number: 2,
      title: "Design",
      description:
        "From here we start to explore possible directions and solutions for your website. We'll explore various visual creative directions as well as structural UX design, such as wireframes and user flows.",
    },
    {
      icon: <DeveloperIcon />,
      number: 3,
      title: "Definition",
      description:
        "Once we're all aligned on the website structure and the concept for the creative we get working on the specifics of the design in preparation for build. That means rolling out the functional elements of the UI, and any other content or assets required.",
    },
    {
      icon: <RocketIcon />,
      number: 4,
      title: "Documentation",
      description:
        "Where necessary, we will map out and document all of the elements of the website and design system so that you (or any other third parties) can take it on an continue working with it.",
    },
  ];

  // Images data
  const storyImages = [
    { src: story1, alt: "story1" },
    { src: story2, alt: "story2" },
    { src: story3, alt: "story3" },
    { src: story4, alt: "story4" },
  ];

  return (
    <>
      <CustomizableHeaderContainer
        heading1="RIGHT"
        heading2="YOUR STORY"
        subHeading="Our innovative approach takes your narrative to new heights, engaging audiences like never before."
        button="View Project"
      />

      <div className="mt-[75px]">
        <div className="grid grid-cols-1 lg:grid-rows-2 gap-6">
          {/* First row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 grid-rows-1 lg:grid-rows-2 gap-6">
              <ProcessStepCard {...processSteps[0]} />
              <ProcessStepCard {...processSteps[1]} />
            </div>

            {/* Middle image */}
            <ImageCard {...storyImages[0]} />

            {/* Third column */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 grid-rows-1 lg:grid-rows-2 gap-6">
              <ProcessStepCard {...processSteps[2]} />
              <ProcessStepCard {...processSteps[3]} />
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {storyImages.slice(1).map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StorySection;
