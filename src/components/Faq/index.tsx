import Heading from "../Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { useState } from "react";

const faqData = [
  {
    category: "General",
    value: "general",
    questions: [
      {
        question: "Do you provide ongoing support?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "What is your web design process?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "Do you provide ongoing support?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "What is your web design process?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "How long does a web design project take?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        question: "What factors affect the cost of web design?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    category: "Billing",
    value: "billing",
    questions: [
      {
        question: "How is the billing?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
    ],
  },
  {
    category: "Support",
    value: "support",
    questions: [
      {
        question: "How can I contact support?",
        answer: "You can reach us via email or live chat.",
      },
    ],
  },
  {
    category: "Product",
    value: "product",
    questions: [
      {
        question: "Where can I update my profile?",
        answer: "You can update your profile in the account settings.",
      },
    ],
  },
];

const Faq = () => {
  const [activeTab, setActiveTab] = useState(faqData[0].value);

  return (
    <>
      <div className="flex flex-col items-center">
        <Heading normalText="Frequently Asked" specialText="Questions" />
        <p className="font-extralight text-center mb-7 md:w-[550px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div>
        <Tabs defaultValue={faqData[0].value} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-black">
            {faqData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`data-[state=active]:border-b-2 data-[state=active]:border-yellow 
                  data-[state=active]:bg-black text-white 
                  data-[state=active]:text-yellow `}
              >
                {tab.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqData.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className={`p-4 transition-opacity duration-500 ease-in-out ${
                activeTab === tab.value
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5 pointer-events-none"
              }`}
            >
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4">
                {tab.questions.map((q, index) => (
                  <Accordion type="single" collapsible key={index}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="border px-3 data-[state=open]:rounded-2xl transition-all duration-100 
                     xs:data-[state=closed]:rounded-3xl sm:data-[state=closed]:rounded-full  data-[state=open]:bg-gradient-to-tl 
                      from-yellow-opacity0.2 to-black"
                    >
                      <AccordionTrigger
                        className="group xs:text-[16px] sm:text-lg md:text-[14px] lg:text-lg font-semibold 
                        data-[state=open]:text-yellow transition-all duration-300"
                      >
                        {q.question}
                      </AccordionTrigger>
                      <AccordionContent>{q.answer}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Faq;
