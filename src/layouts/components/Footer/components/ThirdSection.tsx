import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

const ThirdSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1>Contact Us</h1>
      <div className="flex gap-4">
        <EmailIcon />
        <div>
          <h5 className="font-extralight font-">Email:</h5>
          <h5>contact@Iqrahub.com</h5>
        </div>
      </div>
      <div className="flex gap-4">
        <PhoneIcon />
        <div>
          <h5>Phone:</h5>
          <h5>(+971) 123 - 45678</h5>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
