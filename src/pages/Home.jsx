import { useState } from "react";
import Button from "../components/Button/index.jsx";
import Header from "../components/Header/index.jsx";
import Textarea from "../components/Textarea/index.jsx";
import { App } from "../layouts/App.jsx";
import { useForm } from "react-hook-form";
import Alurite from "../components/Aluritters/index.jsx";

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dataAtual = new Date().toLocaleString()

    const email = 'gustavo.lima@gmail.com'

    const [alurites, setAlurites] = useState([]);

    const handleFormSubmit = ({ aluritar }) => {
        const alurite = {aluritar: aluritar, email: email, dataAtual: dataAtual}
        setAlurites([...alurites, alurite])
    };

    console.log("Adicionando: ", alurites);

    const [valor, setValor] = useState('')
    
    const maxlenght = 255
    const qtdCaracteres = maxlenght - valor.length

    return (
        <App>
            <Header email={ email } />
            <div className="container mx-auto bg-slate-200 py-2">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <span>Alurite agora mesmo...</span>
                    <div className="grid h-22 max-h-22 min-h-22">
                        <Textarea register={register} errors={errors} placeholder="aluritar..." id="aluritar" name="aluritar" maxlenght={maxlenght} value={ valor } onAlter={ value => setValor(value) } />
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-green-500">Você ainda pode digitar {qtdCaracteres} caracteres</span>
                        <Button type="submit" classColor="bg-blue" text="aluritar" />
                    </div>
                </form>
            </div>
            <div className="space-y-2">
                {alurites.map((alurite, index) => (
                    <Alurite 
                        key={index} 
                        alurite={alurite.aluritar} 
                        email={alurite.email} 
                        dataHora={alurite.dataAtual} 
                    />
                ))}
            </div>
        </App>
    )
};

export default Home