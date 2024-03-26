import { useForm } from "react-hook-form";
import { App } from "../layouts/App";
import SpanLink from "../components/SpanLink/index.jsx";
import Form from "../components/Form/index.jsx";
import CustomDiv from "../components/CustomDiv/index.jsx";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState([]);

  const navigate = useNavigate();

  const handleFormSubmit = ({ email, senha }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
    .then((credential) => {
      localStorage.setItem("access-token", credential.user.accessToken);

      navigate('/')
    })
    .catch((error) => {
      const errorMessage = error.message;
      setMessage({message:`Erro ao logar na conta: ${errorMessage}`, color: 'red'});
    });
  };

  return (
    <App className="bg-blue-950">
        <CustomDiv>
          {message.message !== null && <p className={`text-${message.color}-500`}>{message.message}</p>}
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
