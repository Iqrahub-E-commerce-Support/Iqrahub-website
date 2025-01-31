import { IFormField } from "@/components/RenderFields/types/form.types";

export const fields3: IFormField[] = [
  {
    name: "quality",
    label: "Highest Quality",
    type: "switch",
    size: { xs: 1, sm: 1, md: 2, lg: 2 },
    validation: {
      required: { value: true, message: "This field is required" },
    },
    placeholder: "Brian Clark",
  },
  {
    name: "deadline",
    label: "Tight Deadline",
    type: "switch",
    size: { xs: 1, sm: 1, md: 2, lg: 2 },
    validation: {
      required: { value: true, message: "This field is required" },
    },
    placeholder: "example@youremail.com",
  },
  {
    name: "cost",
    label: "Low Cost",
    type: "switch",
    size: { xs: 1, sm: 1, md: 2, lg: 2 },
    validation: {
      required: { value: true, message: "This field is required" },
    },
    placeholder: "IQRAHUB Agency",
  },
];
