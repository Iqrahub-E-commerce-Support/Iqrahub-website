import Heading from "@/components/Heading";
import RenderFields from "@/components/RenderFields";
import { Controller, useForm } from "react-hook-form";
import { fields } from "./config/FormFields";
import { fields2 } from "./config/FromFilds2";
import Radio from "@/components/Radio";
import React from "react";
import GradientButton from "@/components/GradientButton";
import { MdArrowForward } from "react-icons/md";
import Switch from "@/components/Switch";
import { supabase } from "@/pages/AlmuqtadirCaseStudy/lib/supabase";

const Form = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      quality: true,
      deadline: true,
      cost: false,
    },
  });
  const [isChecked, setIsChecked] = React.useState(false);
  const [isANotgreed, setIsNotAgreed] = React.useState(false);

  // Handle switch changes with relationships
  const handleSwitchChange = (
    name: "quality" | "deadline" | "cost",
    newValue: boolean,
  ) => {
    setValue(name, newValue);

    if (newValue) {
      // When turning ON a switch, handle relationships
      switch (name) {
        case "quality":
          setValue("cost", false);
          break;
        case "deadline":
          // When deadline is ON, ensure at least one of quality or cost is OFF
          // if (qualityValue && costValue && deadlineValue) {
          setValue("cost", false);
          // }
          break;
        case "cost":
          setValue("quality", false);
          setValue("deadline", true); // Always turn on deadline when cost is ON
          break;
      }
    } else {
      // When turning OFF a switch, handle relationships
      switch (name) {
        case "quality":
          setValue("cost", true);
          setValue("deadline", true); // Ensure deadline is ON when switching to cost
          break;
        case "deadline":
          setValue("quality", true);
          setValue("cost", true); // Turn off cost when deadline is OFF
          break;
        case "cost":
          setValue("quality", true);
          setValue("deadline", true);
          break;
      }
    }
  };

  const onSubmit = async (value: any) => {
    if (!isChecked) {
      setIsNotAgreed(true);
      return;
    } else {
      setIsNotAgreed(false);
    }

    try {
      console.log("Submitting form data:", value); // Debug log

      const { data, error } = await supabase
        .from("form")
        .insert([
          {
            submitted_at: new Date().toISOString(),
            name: value.name || "",
            email: value.email || "",
            company: value.company || "",
            phone: value.phone || "",
            brand: Boolean(value.brand),
            website_design: Boolean(value.website),
            design_support: Boolean(value.support),
            website_development: Boolean(value.websiteDevelopment),
            video_shooting: Boolean(value.video),
            quality: Boolean(value.quality),
            deadline: Boolean(value.deadline),
            cost: Boolean(value.cost),
            // agreement: Boolean(isChecked),
          },
        ])
        .select();
      console.log(data, "whtat");
      if (error) {
        console.error("Supabase error:", error);
        alert(`Error submitting form: ${error.message}`);
        return;
      }

      // console.log("Submission successful:", data);
      // alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      // alert("Failed to submit form. Please try again.");
    }
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

              {/* <RenderFields
                formFields={fields3}
                control={control}
                errors={errors}
              /> */}

              <div className="grid sm:grid-cols-2">
                <Controller
                  name="quality"
                  control={control}
                  render={({ field: { value } }) => (
                    <Switch
                      checked={value}
                      onChange={(checked) =>
                        handleSwitchChange("quality", checked)
                      }
                      label="Highest Quality"
                    />
                  )}
                />
                <Controller
                  name="deadline"
                  control={control}
                  render={({ field: { value } }) => (
                    <Switch
                      checked={value}
                      onChange={(checked) =>
                        handleSwitchChange("deadline", checked)
                      }
                      label="Tight Deadline"
                    />
                  )}
                />
                <Controller
                  name="cost"
                  control={control}
                  render={({ field: { value } }) => (
                    <Switch
                      checked={value}
                      onChange={(checked) =>
                        handleSwitchChange("cost", checked)
                      }
                      label="Low Cost"
                    />
                  )}
                />
              </div>
            </div>
            <div className="xs:block sm:flex md:block xl:flex  justify-between items-center border rounded-[8px] xs:p-5 md:p-4 lg:p-5 ">
              <div>
                <div className="flex items-center">
                  <Radio
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                  />
                  <p>I agree with the processing of my personal data</p>
                </div>
                {isANotgreed && (
                  <p className="mt-2 ml-2 text-red">
                    Please confirm your consent by checking the box
                  </p>
                )}
              </div>

              <div className="xs:flex sm:block md:flex lg:block sm:justify-end ">
                <GradientButton
                  type="submit"
                  className="xs:mt-6 sm:mt-0 lg:mt-6 xl:mt-0"
                >
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
