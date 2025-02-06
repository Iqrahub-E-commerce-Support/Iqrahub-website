const sections = [
  {
    title: "About us",
    items: ["Mission", "Our team", "Awards", "Testimonials", "Privacy policy"],
  },
  {
    title: "Services",
    items: [
      "Web design",
      "Web development",
      "Mobile design",
      "UI/UX design",
      "Branding design",
    ],
  },
  {
    title: "Portfolio",
    items: [
      "Corporate websites",
      "E-commerce",
      "Mobile apps",
      "Landing pages",
      "UI/UX projects",
    ],
  },
];

const SecondSection = () => {
  return (
    <div className="flex flex-wrap justify-between gap-[72px]">
      {sections.map((section, index) => (
        <div key={index}>
          <h5 className="font-semibold">{section.title}</h5>
          <ul className="mt-6">
            {section.items.map((item, idx) => (
              <li key={idx} className="font-thin mb-3 opacity-80">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SecondSection;
