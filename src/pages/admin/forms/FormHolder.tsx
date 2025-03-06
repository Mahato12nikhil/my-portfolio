import { JSX } from "react";
import { FormType } from "../Admin";
import JourneyForm from "./JourneyForm";
import ProfileForm from "./ProfileForm";
import ProjectForm from "./ProjectForm";
import UserForm from "./UserForm";

const formComponents: Record<FormType, JSX.Element> = {
    journey: <JourneyForm />,
    profile: <ProfileForm />,
    project: <ProjectForm />,
    user: <UserForm />
};

const FormHolder: React.FC<{ form: FormType }> = ({ form }) => {
    return <div className="w-[50%] h-[50vh] mt-6 shadow-card">{formComponents[form]}</div>;
};

export default FormHolder;
