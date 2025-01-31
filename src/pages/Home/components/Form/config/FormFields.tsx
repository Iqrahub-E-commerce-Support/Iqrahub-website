import { IFormField } from "@/components/RenderFields/types/form.types";

export const fields: IFormField[] = [
	{
		name: "name",
		label: "Name",
		type: "text",
		size: { xs: 1, sm: 1, md: 2, lg: 2 },
		validation: {
			required: { value: true, message: "This field is required" },
		},
		placeholder:"Brian Clark"
	},
	{
		name: "email",
		label: "Email",
		type: "text",
		size: { xs: 1, sm: 1, md: 2, lg: 2 },
		validation: {
			required: { value: true, message: "This field is required" },
		},
		placeholder:"example@youremail.com"
	},
	{
		name: "company",
		label: "Company",
		type: "text",
		size: { xs: 1, sm: 1, md: 1, lg: 1 },
		validation: {
			required: { value: true, message: "This field is required" },
		},
		placeholder:"IQRAHUB Agency"
	},
	{
		name: "phone",
		label: "Phone",
		type: "text",
		size: { xs: 1, sm: 1, md: 2, lg: 2 },
		validation: {
			required: { value: true, message: "This field is required" },
		},
		placeholder:"(123) 456-7890"
	},
	{
		name: "budget",
		label: "What's your budget?",
		type: "text",
		size: { xs: 1, sm: 1, md: 2, lg: 2 },
		validation: {
			required: { value: true, message: "This field is required" },
		},
		placeholder:"AED 5k - AED 1000K"
	},
	{
		name: "message",
		label: "Message",
		type: "text",
		size: { xs: 1, sm: 1, md: 1, lg: 1 },
		validation: {
			required: { value: true, message: "This field is required" },
		},
		placeholder:"Type your Message here...",
		multiline:true
	},

];
