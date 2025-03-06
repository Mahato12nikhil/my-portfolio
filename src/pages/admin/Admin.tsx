import { JSX, useState } from "react";
import FormHolder from "./forms/FormHolder";

export type FormType = "user" | "project" | "profile" | "journey";

const Admin = (): JSX.Element => {
  const [form, setForm] = useState<FormType>("profile");
  const forms: FormType[] = ["user", "project", "profile", "journey"];

  return (
    <div className="p-6">
      <h2 className="w-full text-center font-sans text-2xl">Welcome to the admin portal</h2>

      <div className="flex justify-center my-4">
        <select
          className="border rounded-md p-2"
          value={form}
          onChange={(e) => setForm(e.target.value as FormType)}
        >
          {forms.map((formType) => (
            <option key={formType} value={formType}>
              {formType.charAt(0).toUpperCase() + formType.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full flex justify-center p-6! mt-5!">
        <FormHolder form={form} />
      </div>
    </div>
  );
};

export default Admin;
