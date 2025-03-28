"use client"

interface FormInputProps {
  id: string
  name: string
  label: string
  value: string
  placeholder: string
  type?: "text" | "email" | "tel"
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}

export default function FormInput({
  id,
  name,
  label,
  value,
  placeholder,
  type = "text",
  onChange,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        required={required}
      />
    </div>
  )
}
