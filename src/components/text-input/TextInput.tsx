import React from "react";

const TextInput = ({
  label,
  name,
  type = "text",
  placeholder,
  as = "input",
  ...props
}: any) => {
  const InputOrTextarea = as === "input" ? "input" : "textarea";

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-green-900 font-medium">
        {label}
      </label>
      <InputOrTextarea
        type={type}
        id={name}
        name={name}
        className="border border-green-400 w-full py-4 px-6 rounded-lg focus:outline-none focus:border-red-500"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default TextInput;
