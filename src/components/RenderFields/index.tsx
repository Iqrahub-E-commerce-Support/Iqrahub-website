import { IFormField } from "./types/form.types";
import { Control, Controller, FieldErrors } from "react-hook-form";
import Radio from "../Radio";
import Switch from "../Switch";
import TextField from "../TextField";

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
    const fieldError = errors?.[field.name];

    switch (field.type) {
      case "text":
        return (
          <Controller
            name={field.name}
            control={control}
            rules={field.validation}
            render={({ field: controllerField }) => (
              <div className="mb-5">
                <p className="ml-2 mb-2">{field?.label}</p>
                <TextField
                  {...controllerField}
                  placeholder={field?.placeholder}
                  multiline={field?.multiline}
                />
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
                rules={field.validation}
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
            rules={field.validation}
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
