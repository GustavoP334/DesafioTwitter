import { useState } from "react";
import Button from "../components/Button/index.jsx";
import Header from "../components/Header/index.jsx";
import Textarea from "../components/Textarea/index.jsx";
import { App } from "../layouts/App.jsx";
import { useForm } from "react-hook-form";
import Alurite from "../components/Aluritters/index.jsx";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set, child, get, push } from "firebase/database";


const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const user = jwtDecode(localStorage.getItem("access-token"));

    const email = user.email

    const dataAtual = new Date().toLocaleString()

    const handleLogout = () => {
        localStorage.removeItem("access-token");
        navigate("/login");
    };

    const [alurites, setAlurites] = useState([]);

    const handleFormSubmit = ({ aluritar }) => {
        const alurite = {aluritar: aluritar, email: email, dataAtual: dataAtual}
        setAlurites([...alurites, alurite])

        writeUserData(aluritar, email, dataAtual, user.user_id)
    };

    const dbRef = ref(getDatabase());

    get(child(dbRef, `/`)).then((snapshot) => {
            if (snapshot.exists()) {
                // setAlurites(snapshot.val());
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        }
    );

    function writeUserData(alurite, userEmail, sentAt, userId) {
        const db = getDatabase();

        const newPostRef = push(ref(db, '/' + userId));

        set(newPostRef, {
            alurite: alurite,
            user_email: userEmail,
            sent_at : sentAt
        });
    }

    const [valor, setValor] = useState('')
    
    const maxlenght = 255
    const qtdCaracteres = maxlenght - valor.length

    return (
        <App>
            <Header email={ email } handleLogout={handleLogout} />
            <div className="container mx-auto bg-slate-200 py-2">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <span>Alurite agora mesmo...</span>
                    <div className="grid h-22 max-h-22 min-h-22">
                        <Textarea register={register} errors={errors} placeholder="aluritar..." id="aluritar" name="aluritar" maxlenght={maxlenght} value={ valor } onAlter={ value => setValor(value) } />
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-green-500">Você ainda pode digitar {qtdCaracteres} caracteres</span>
                        <Button type="submit" classColor="bg-blue-500" classColorHover="bg-blue-600" text="aluritar" />
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