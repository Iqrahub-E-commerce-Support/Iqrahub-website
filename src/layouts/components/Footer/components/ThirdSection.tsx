import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

const ThirdSection = () => {
  return (
    <div className="flex flex-col  gap-6">
      <h1>Contact Us</h1>
      <div className="flex gap-4">
        <EmailIcon />
        <div>
          <h5>Email:</h5>
          <a href="mailto:contact@Iqrahub.com" target="_blank">
            contact@Iqrahub.com
          </a>
        </div>
      </div>
      <div className="flex gap-4 -ml-1">
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
