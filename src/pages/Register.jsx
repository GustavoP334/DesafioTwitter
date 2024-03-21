import { Link } from "react-router-dom";
import { App } from "../layouts/App.jsx";
import { useForm } from "react-hook-form"

export default function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => console.log(data)

    return (
        <App>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-rows-6 grid-flow-col gap-4">
                    <h1 className="flex items-center justify-center text-xl text-sky-600">Aluritter</h1>

                    <input type="email" className="rounded" placeholder="email@exemplo.com" {...register("example", { required: true })} />

                    <input type="password" className="rounded" placeholder="Senha" {...register("exampleRequired", { required: true })} />

                    {errors.exampleRequired && <span className="flex items-center justify-center text-red-500">Preencha todos os campos</span>}

                    <button type="submit" className="rounded bg-sky-500/100">Entrar</button>

                    <p className="text-white flex items-center justify-center">Já possui uma conta? <Link className="text-sky-600" to="/login">Acesse agora!</Link></p>
                </div>
            </form>
        </App>
    )
};