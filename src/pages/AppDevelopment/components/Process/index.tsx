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
    <div className="overflow-hidden">
      <div className="flex flex-col gap-2 items-center">
        <CustomizableHeading
          firstTxt="UI/UX DESIGNING"
          secondTxt="PROCESS"
          MainStyle="xs:text-[40px] sm:text-[48px] md:text-[56px] font-black xs:leading-[50px] "
        />
        <p className="md:text-center mb-12">
          We create and refine visual identity systems that provide you with a
          unique positioning and personality
        </p>
      </div>

      <div className="space-y-20">
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex flex-col gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-auto rounded-lg"
              />
            </div>

            <div className="w-full md:w-1/2 space-y-4">
              <div className="space-y-2">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  {step.id}
                  <br />
                  {step.title}
                </h2>
                <p className="text-lg">{step.description}</p>
              </div>

              <div className="space-y-4">
                <p className="font-medium">Deliverables:</p>
                <div className="flex flex-wrap gap-2">
                  {step.deliverables.map((item) => (
                    <span
                      key={item}
                      className="border rounded-full py-2 px-4 text-sm md:text-base"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
