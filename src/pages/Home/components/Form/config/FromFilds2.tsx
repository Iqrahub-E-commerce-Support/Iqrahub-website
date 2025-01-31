import { IFormField } from "@/components/RenderFields/types/form.types";

export const fields2: IFormField[] = [
    {
        name: "brand",
        label: "Branding",
        type: "radio",
        size: { xs: 1, sm: 1, md: 2, lg: 2 },
        validation: {
            required: { value: true, message: "This field is required" },
        },
        placeholder:"Brian Clark"
    },
    {
        name: "website",
        label: "Website Design",
        type: "radio",
        size: { xs: 1, sm: 1, md: 2, lg: 2 },
        validation: {
            required: { value: true, message: "This field is required" },
        },
        placeholder:"example@youremail.com"
    },
    {
        name: "support",
        label: "Design Support",
        type: "radio",
        size: { xs: 1, sm: 1, md: 2, lg: 2 },
        validation: {
            required: { value: true, message: "This field is required" },
        },
        placeholder:"IQRAHUB Agency"
    },
    {
        name: "websiteDevelopment",
        label: "Website Development",
        type: "radio",
        size: { xs: 1, sm: 1, md: 2, lg: 2 },
        validation: {
            required: { value: true, message: "This field is required" },
        },
        placeholder:"(123) 456-7890"
    },
    {
        name: "video",
        label: "Video Shooting",
        type: "radio",
        size: { xs: 1, sm: 1, md: 2, lg: 2 },
        validation: {
            required: { value: true, message: "This field is required" },
        },
        placeholder:"AED 5k - AED 1000K"
    },
    {
        name: "extra",
        label: "Something else...",
        type: "radio",
        size: { xs: 1, sm: 1, md: 2, lg: 2 },
        validation: {
            required: { value: true, message: "This field is required" },
        },
        placeholder:"Type your Message here...",
        multiline:true
    },

];
