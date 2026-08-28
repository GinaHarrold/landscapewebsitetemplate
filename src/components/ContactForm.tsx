import type { JSX } from "react";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select" | "date";
  placeholder?: string;
  required?: boolean;
  options?: string[];
}

interface ContactFormProps {
  title: string;
  description: string;
  fields: FormField[];
  submitText: string;
  className?: string;
}

export default function ContactForm({
  title,
  description,
  fields,
  submitText,
  className = "",
}: ContactFormProps): JSX.Element {
  return (
    <div className={`card-elevated p-8 sm:p-10 ${className}`}>
      <h2 className="text-2xl font-bold text-dark mb-3">{title}</h2>
      <p className="text-dark-muted mb-8">{description}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          // In production, this would submit to an API endpoint
          const data: Record<string, string> = {};
          fields.forEach((f) => {
            data[f.name] = (formData.get(f.name) as string) || "";
          });
          console.log("Form submitted:", data);
          alert(
            "Thank you for reaching out! We'll get back to you within 24 hours."
          );
          (e.target as HTMLFormElement).reset();
        }}
        className="space-y-5"
      >
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
              />
            ) : field.type === "select" && field.options ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
              >
                <option value="">Select a service</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
              />
            )}
          </div>
        ))}
        <button type="submit" className="btn-accent w-full text-lg py-4">
          {submitText}
        </button>
      </form>
    </div>
  );
}