import { forwardRef } from "react";

interface TextFieldProps {
  value?: unknown;
  label?: string;
  InputType?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
  disabled?: boolean | null;
  extras?: any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  autoFocus?: boolean;
  defaultValue?: string;
  onKeyDown?: any;
  onIconClick?: () => void;
  error?: any;
  onInput?: any;
  helperText?: string;
  hidden?: boolean;
  ref?: React.Ref<unknown>;
}

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const {
    value,
    placeholder,
    onChange,
    onBlur,
    rows = 3, // Changed default to 4 as 44 might be too large for most use cases
    multiline = false,
    extras,
    autoFocus,
    disabled = false,
    defaultValue,
    onKeyDown,
    onInput,
    helperText,
    hidden = false,
    InputType = "text"
  } = props;

  const baseClassName = "text-white bg-black border border-white p-4 w-full";
  const className = `${baseClassName} ${multiline ? 'rounded-lg' : 'rounded-full'}`;

  const commonProps = {
    className,
    defaultValue,
    hidden,
    value,
    placeholder,
    onChange,
    onKeyDown,
    onBlur,
    autoFocus,
    disabled,
    onInput,
    "aria-describedby": helperText ? "helper-text" : undefined,
    ...extras
  };

  return (
    <>
      {multiline ? (
        <textarea
          {...commonProps}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          rows={rows}
        />
      ) : (
        <input
          {...commonProps}
          ref={ref as React.Ref<HTMLInputElement>}
          type={InputType}
        />
      )}
      {helperText && (
        <p id="helper-text" className="mt-1 text-sm text-red">
          {helperText}
        </p>
      )}
    </>
  );
});

TextField.displayName = 'TextField';

export default TextField;