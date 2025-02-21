import { Field, ErrorMessage } from "formik";
import { twMerge } from "tailwind-merge";
import Select from "react-select";

const Input = ({ label, name, type = "text", placeholder, className, classLabelName, options }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label htmlFor={name} className={twMerge("mb-1 text-gray-700 font-bold", classLabelName)}>
          {label}
        </label>
      )}

      {options ? (
        // Using react-select for dropdown
        <Field name={name}>
          {({ field, form }) => (
            <Select
              id={name}
              name={name}
              options={options}
              value={options.find(option => option.value === field.value)}
              onChange={(selectedOption) => form.setFieldValue(name, selectedOption.value)}
              className="w-full"
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: "8px",
                  padding: "2px",
                  borderColor: "#ccc",
                  boxShadow: "none",
                  "&:hover": { borderColor: "#2563eb" }, // Tailwind blue-500
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "white",
                }),
                option: (base, { isFocused }) => ({
                  ...base,
                  backgroundColor: isFocused ? "#2563eb" : "white",
                  color: isFocused ? "white" : "black",
                }),
              }}
            />
          )}
        </Field>
      ) : (
        // Otherwise, render a text input
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={twMerge(
            "border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
            className
          )}
        />
      )}

      {/* Error Message from Formik */}
      <ErrorMessage name={name} component="span" className="text-red-500 text-sm mt-1" />
    </div>
  );
};

export default Input;
