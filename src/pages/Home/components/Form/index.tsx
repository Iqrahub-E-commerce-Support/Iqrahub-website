import Heading from "@/components/Heading";
import RenderFields from "@/components/RenderFields";
import { useForm } from "react-hook-form";
import { fields } from "./config/FormFields";
import { fields2 } from "./config/FromFilds2";
import { fields3 } from "./config/FormField3";
import Radio from "@/components/Radio";
import React from "react";
import GradientButton from "@/components/GradientButton";
import { MdArrowForward } from "react-icons/md";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    // defaultValues: formData.offers || {},
    mode: "all", // This will ensure validation happens on each input change
  });
  const [isChecked, setIsChecked] = React.useState(false);
  const values = getValues();
  console.log(values, "value");
  const onSubmit = (value: any) => {
    console.log(value);
  };
  return (
    <>
      <Heading
        className="text-center mb-3"
        normalText="What Are You"
        specialText="Looking For"
        optionalNormalText="?"
      />
      <p className="text-center mb-10">
        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
        phasellus <br /> mollis sit aliquam sit nullam.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-5">
          <div className="border rounded-[8px]  xs:p-5 md:p-4 lg:p-5">
            <RenderFields
              formFields={fields}
              control={control}
              errors={errors}
            />
          </div>
          <div className="grid gap-4">
            <div className="border rounded-[8px] xs:p-5 md:p-4 lg:p-5">
              <RenderFields
                formFields={fields2}
                control={control}
                errors={errors}
              />

              <div className="w-full h-[1px] my-7 bg-gradient-to-r from-[rgba(255,255,255,0)] via-white to-[rgba(255,0,0,0)]" />

              <RenderFields
                formFields={fields3}
                control={control}
                errors={errors}
              />
              {/* <button type="submit">
          submit
          </button> */}
            </div>
            <div className="xs:block sm:flex md:block lg:flex  justify-between border rounded-[8px] xs:p-5 md:p-4 lg:p-5 ">
              <div className="flex items-center">
                <Radio
                  checked={isChecked}
                  onChange={() => setIsChecked((prev) => !prev)}
                  // label="I agree with the processing of my personal data"
                />
                <p>I agree with the processing of my personal data</p>
              </div>
              <div className="xs:flex sm:block md:flex lg:block justify-end">
                <GradientButton className="mt-3">
                  Send Enquiry <MdArrowForward />
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
