import { Link } from "react-router-dom";
import { App } from "../layouts/App.jsx";
import { useForm } from "react-hook-form"
import classNames from 'classnames';
import { useState } from "react";

export default function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => console.log(data)
    
    const [isValid, setIsValid] = useState(false);
    
    function validaEmail(value){
        setIsValid(!value.includes('@'));
    }

    const handleEmailChange = (e) => {
        validaEmail(e.target.value);
    }

	const inputClass = classNames({
		btn: true,
		'border-2 border-rose-500': isValid,
		'focus:border-rose-500 focus:ring-red-500': isValid,
		'focus:border-sky-500 focus:ring-sky-500': !isValid,
	});

    return (
        <App>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-rows-6 grid-flow-col gap-4">
                    <h1 className="flex items-center justify-center text-xl text-sky-600">Aluritter</h1>

                    <input type="email" className={'mt-1 px-3 py-2 bg-white border shadow-sm placeholder-slate-400 focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1 rounded ' + inputClass} placeholder="email@exemplo.com" {...register("example", { required: true })} onChange={handleEmailChange} />

                    <input type="password" className="rounded" placeholder="Senha" {...register("exampleRequired", { required: true })} />

                    {errors.exampleRequired && <span className="flex items-center justify-center text-red-500">Preencha todos os campos</span>}

                    <button type="submit" className="rounded bg-sky-500/100">Entrar</button>

                    <p className="text-white flex items-center justify-center">Não possui uma conta? <Link className="text-sky-600" to="/register">Cadastre-se!</Link></p>
                </div>
            </form>
        </App>
    )
};