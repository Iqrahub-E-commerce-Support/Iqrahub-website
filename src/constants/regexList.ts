const regexList: { [key: string]: any } = {
  email: {
    value: /^[a-zA-Z0-9._%+-]+(?!.*\.{2})@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Invalid email. Please enter a valid email address.",
  },
  number: {
    value: /^[0-9]*$/,
    message: "Please enter a valid number",
  },
  tel: {
    value: /^\+?[0-9]*$/,
    message: "Please enter a valid number",
  },
  phoneInput: {
    value: /^\+?[0-9]{10,15}$/,
    message: "Please enter a valid number",
  },
  password: {
    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/,
    message:
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit. Special characters @$!%*?& are allowed.",
  },
  noSpace: {
    value: /^[^\s]+$/,
    message: "No spaces allowed",
  },
  decimal: {
    value: /^\d{1,10}(\.\d{1,2})?$/,
    message:
      "Invalid format. Enter a number with up to 10 digits and up to 2 decimal places.",
  },
};

export default regexList;
``;
