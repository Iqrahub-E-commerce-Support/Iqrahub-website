import { IFormField } from "./types/form.types";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Radio from "../Radio";
import Switch from "../Switch";
import TextField from "../TextField";
import regexList from "@/constants/regexList";

interface RenderFieldProps {
  formFields: IFormField[];
  control: Control<any, any>;
  errors?: FieldErrors<any>;
  values?: any;
}

const RenderFields = ({ formFields, control, errors }: RenderFieldProps) => {
  const renderFields = (fields: IFormField[], control: Control<any, any>) => {
    const rows: any = [];
    let currentRow: IFormField[] = [];

    fields.forEach((field, index) => {
      // Check if the current field should take a full row (size.md === 1)
      if (field.size.md === 1) {
        // If we have any fields in the current row, add them first
        if (currentRow.length > 0) {
          rows.push(renderRow(currentRow, rows.length));
          currentRow = [];
        }
        // Add the full-width field as its own row
        rows.push(renderRow([field], rows.length));
      } else {
        // Add field to current row
        currentRow.push(field);

        // If we have 2 fields or this is the last field, create a row
        if (currentRow.length === 2 || index === fields.length - 1) {
          rows.push(renderRow(currentRow, rows.length));
          currentRow = [];
        }
      }
    });

    return rows;
  };

  const renderRow = (fieldsInRow: IFormField[], rowIndex: number) => {
    return (
      <div
        key={rowIndex}
        className={`grid xs:grid-cols-${fieldsInRow[0].size.xs} sm:grid-cols-${fieldsInRow[0].size.sm} md:grid-cols-${fieldsInRow[0].size.md} lg:grid-cols-${fieldsInRow[0].size.lg} gap-5`}
      >
        {fieldsInRow.map((field) => (
          <div key={field.name} className="w-full">
            {renderField(field, control)}
          </div>
        ))}
      </div>
    );
  };

  const renderField = (field: IFormField, control: Control<any, any>) => {
    const getError = (name: string) => {
      const fieldParts = name.split(/[\[\]\.]+/).filter(Boolean); // Split by "." and "[]" and filter out empty strings
      let error: any = errors;
      for (let i = 0; i < fieldParts.length; i++) {
        error = error?.[fieldParts[i]];

        if (!error) break;
      }

      return error?.message ? String(error.message) : "";
    };
    const getValidationRules = (field: IFormField) => {
      let rules: any = {};
      const defaultMinLength = {
        value: 1,
        message: "Minimum length is 1 characters",
      };
      const defaultMaxLength = {
        value: 250,
        message: "Maximum length is 250 characters",
      };

      if (field.validation) {
        if (field.validation.required) {
          rules.required = field.validation.required;
        }

        rules.minLength = field.validation.minLength || defaultMinLength;
        rules.maxLength = field.validation.maxLength || defaultMaxLength;

        // Check if a specific pattern is provided, otherwise use regexList
        rules.pattern =
          field.validation.pattern ||
          (regexList[field.type] && regexList[field.type]);

        // Remove pattern validation for confirm_password
      } else {
        // Apply default validations if no validation object is provided
        rules.minLength = defaultMinLength;
        rules.maxLength = defaultMaxLength;

        // Use regexList for the default pattern based on field type
        if (regexList[field.type]) {
          rules.pattern = regexList[field.type];
        }
      }

      return rules;
    };
    const validationRules = getValidationRules(field);
    switch (field.type) {
      case "text":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={validationRules}
            render={({ field: controllerField }) => (
              <div className="mb-5">
                <p className="ml-2 mb-2 xs:text-[14px] lg:text-[16px]">
                  {field?.label}
                </p>
                <TextField
                  {...controllerField}
                  placeholder={field?.placeholder}
                  multiline={field?.multiline}
                />
                <p className="mt-2 ml-2 xs:text-[14px] lg:text-[16px] text-red">
                  {getError(field.name)}
                </p>
              </div>
            )}
          />
        );
      case "radio":
        return (
          <div className="mb-3">
            <Controller
              name={field.name}
              control={control}
              rules={validationRules}
              render={({ field: controllerField }) => (
                <Radio
                  checked={controllerField.value || false} // Pass the value from react-hook-form
                  onChange={(checked) => controllerField.onChange(checked)} // Update the value in react-hook-form
                  label={field.label}
                />
              )}
            />
          </div>
        );
      case "switch":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={validationRules}
            render={({ field: controllerField }) => (
              <Switch
                checked={controllerField.value || false} // Pass the value from react-hook-form
                onChange={(checked) => controllerField.onChange(checked)} // Update the value in react-hook-form
                label={field.label}
              />
            )}
          />
        );
      default:
        return null;
    }
  };

  return <div className="grid gap-2">{renderFields(formFields, control)}</div>;
};

export default RenderFields;
