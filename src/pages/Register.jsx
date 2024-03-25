import { useForm } from "react-hook-form";
import { App } from "../layouts/App";
import SpanLink from "../components/SpanLink/index.jsx";
import Form from "../components/Form/index.jsx";
import CustomDiv from "../components/CustomDiv/index.jsx";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState([]);

  const auth = getAuth();

  const handleFormSubmit = ({ email, senha }) => {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
      setMessage({message: "Conta criada com sucesso! Agora você pode aluritar =)", color: "green"});
    })
    .catch((error) => {
      const errorMessage = error.message;
      setMessage({message:`Erro ao criar conta: ${errorMessage}`, color: 'red'});
    });
  };

  return (
    <App className='bg-blue-950'>
        <CustomDiv>
            <p className="pb-5 text-gray-500">
                Crie uma nova conta e comece aluritar agora mesmo =)
            </p>
            {message.message !== null && <p className={`text-${message.color}-500`}>{message.message}</p>}
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
