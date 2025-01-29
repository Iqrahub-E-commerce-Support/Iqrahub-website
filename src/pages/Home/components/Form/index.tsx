import Heading from "@/components/Heading";
import RenderFields from "@/components/RenderFields";
import { fields } from "./FormFields";
import { useForm } from "react-hook-form";
import { fields2 } from "./FromFilds2";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    // defaultValues: formData.offers || {},
    mode: "all", // This will ensure validation happens on each input change
  });
  const values = getValues()
  console.log(values,"value")
  const onSubmit = (value)=>{
    console.log(value)
  }
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
        <div className="border rounded-[8px] p-5">
          <RenderFields formFields={fields} control={control} errors={errors} />
        </div>
        <div className="border rounded-[8px] p-5">
        <RenderFields formFields={fields2} control={control} errors={errors} />
          <button type="submit">
          submit
          </button>
        </div>
      </div>
      </form>
    </>
  );
};

export default Form;
