import { useForm } from "react-hook-form";
import { App } from "../layouts/App";
import SpanLink from "../components/SpanLink/index.jsx";
import Form from "../components/Form/index.jsx";
import CustomDiv from "../components/CustomDiv/index.jsx";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = ({ email, senha }) => {
    console.log("Criando uma nova conta...", email, senha);
  };

  return (
    <App className='bg-blue-950'>
        <CustomDiv>
            <p className="pb-5 text-gray-500">
                Crie uma nova conta e comece aluritar agora mesmo =)
            </p>
            <Form
                handleSubmit={handleSubmit}
                handleFormSubmit={handleFormSubmit}
                register={register}
                errors={errors}
                buttonText="Criar uma nova conta"
            />
            <SpanLink text="Já possui uma conta?" link="login" linkText="Acesse agora!" />
        </CustomDiv>
    </App>
  );
};
