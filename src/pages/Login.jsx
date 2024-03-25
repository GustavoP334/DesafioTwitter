import { useForm } from "react-hook-form";
import { App } from "../layouts/App";
import SpanLink from "../components/SpanLink/index.jsx";
import Form from "../components/Form/index.jsx";
import CustomDiv from "../components/CustomDiv/index.jsx";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = ({ email, senha }) => {

  };

  return (
    <App className="bg-blue-950">
        <CustomDiv>
            <Form
                handleSubmit={handleSubmit}
                handleFormSubmit={handleFormSubmit}
                register={register}
                errors={errors}
                buttonText="Acesse a plataforma"
            />
            <SpanLink text="Não possui uma conta?" link="register" linkText="Crie uma agora!" />
        </CustomDiv>
    </App>
  );
};
