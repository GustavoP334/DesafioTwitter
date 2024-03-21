import { Link } from "react-router-dom";
import { App } from "../layouts/App.jsx";
import { useForm } from "react-hook-form"
import { useState } from "react";
import Input from "../components/Input/index.jsx";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    
    const onSubmit = (data) => console.log(data)
    
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (e) => {
        if(e.target.value !== null && e.target.value !== undefined){
            setIsValid(!e.target.value.includes('@'));
        }
    }

    return (
        <App>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-rows-6 grid-flow-col gap-4">
                    <h1 className="flex items-center justify-center text-xl text-sky-600">Aluritter</h1>

                    <Input type="email" onChange={handleEmailChange} isValid={isValid} placeholder="email@exemplo.com" {...register("example", { required: true })} />

                    <Input type="password" placeholder="Senha" {...register("exampleRequired", { required: true })} />

                    {errors.exampleRequired && <span className="flex items-center justify-center text-red-500">Preencha todos os campos</span>}

                    <button type="submit" className="rounded bg-sky-500/100">Entrar</button>

                    <p className="text-white flex items-center justify-center">Não possui uma conta? <Link className="text-sky-600" to="/register">Cadastre-se!</Link></p>
                </div>
            </form>
        </App>
    )
};
