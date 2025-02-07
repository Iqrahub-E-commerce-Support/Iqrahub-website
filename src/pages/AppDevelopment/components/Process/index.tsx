import CustomizableHeading from "@/components/CustomizableHeading";
import discover from "@/assets/images/AppDevelopment/discovery.png";
import wireframe from "@/assets/images/AppDevelopment/wireframe.png";
import uidesign from "@/assets/images/AppDevelopment/uidesign.png";
import development from "@/assets/images/AppDevelopment/development.png";

const processSteps = [
  {
    id: "01",
    title: "DISCOVERY",
    description:
      "To lay the groundwork, we study your business, analyze challenges, brainstorm design ideas, and map the user journey.",
    deliverables: ["Research", "Moodboard", "User flow"],
    image: discover,
  },
  {
    id: "02",
    title: "WIREFRAMES",
    description:
      "Then, it’s time to sketch the wireframes and translate your vision into a clear, user-focused structure.",
    deliverables: ["App structure", "Sketches", "Concept explanation"],
    image: wireframe,
  },
  {
    id: "03",
    title: "UI DESIGN",
    description:
      "From there, we refine UI, integrate branding, create a component library, and ensure a responsive mobile version.",
    deliverables: ["Design system", "Platform design"],
    image: uidesign,
  },
  {
    id: "04",
    title: "DEVELOPMENT",
    description:
      "After the design wraps up, we organize layers, ensure consistency, create hovers, and complete the UI kit.",
    deliverables: [
      "Final product design",
      "Source files",
      "Concept explanation",
    ],
    image: development,
  },
];

const Process = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <CustomizableHeading
          firstTxt="UI/UX DESIGNING"
          secondTxt="PROCESS"
          MainStyle="text-[56px] "
        />
        <p className="text-start">
          We create and refine visual identity systems that provide you with a
          unique positioning and personality
        </p>
      </div>
      {processSteps.map((step, index) => (
        <div
          key={step.id}
          className={`mt-14 flex gap-10 ${index % 2 === 0 ? "justify-center" : ""}`}
        >
          {index % 2 === 0 && <img src={step.image} alt={step.title} />}
          <div>
            <h5 className="text-[80px] font-black leading-[85px]">
              {step.id}
              <br />
              {step.title}
            </h5>
            <p className="w-[80%]">{step.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <p>Deliverables:</p>
              {step.deliverables.map((item) => (
                <div key={item} className="border rounded-full py-2 px-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
          {index % 2 !== 0 && <img src={step.image} alt={step.title} />}
        </div>
      ))}
    </>
  );
};

export default Process;
