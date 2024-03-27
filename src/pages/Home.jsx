import { useEffect, useState } from "react";
import Button from "../components/Button/index.jsx";
import Header from "../components/Header/index.jsx";
import Textarea from "../components/Textarea/index.jsx";
import { App } from "../layouts/App.jsx";
import { useForm } from "react-hook-form";
import Alurite from "../components/Aluritters/index.jsx";
import { jwtDecode } from "jwt-decode";
import { getDatabase, ref, set, child, get, push } from "firebase/database";

const Home = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const user = jwtDecode(localStorage.getItem("access-token"));

    const email = user.email

    const dataAtual = new Date().toLocaleString()

    const [alurites, setAlurites] = useState([]);

    const handleFormSubmit = ({ aluritar }) => {
        writeUserData(aluritar, email, dataAtual, user.user_id, 0)

        setValor('')
    };

    useEffect(() => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();

                    const aluritesArray = Object.keys(data).map(key => ({
                        key: key,
                        value: data[key]
                    }));

                    const newAlurites = [];
                    
                    aluritesArray.forEach(element => {
                        const userId = element.key

                        const value = element.value

                        const aluritesByUser = Object.keys(value).map(key => ({
                            key: key,
                            value: value[key]
                        }));
                        
                        aluritesByUser.forEach(userAluritte =>{
                            const alurittervalue = userAluritte.value
                            const aluritterId = userAluritte.key

                            const likes = alurittervalue.likes && alurittervalue.likes.likes !== undefined ? alurittervalue.likes.likes : 0;
                            const whoLikes = alurittervalue.likes && alurittervalue.likes.whoLikes !== undefined ? alurittervalue.likes.whoLikes : 0;
                            
                            const alurite = {
                                aluritar: alurittervalue.alurite, 
                                email: alurittervalue.user_email, 
                                dataAtual: alurittervalue.sent_at, 
                                likes: likes,
                                whoLikes: whoLikes,
                                userId: userId,
                                aluritterId: aluritterId
                            }
                            newAlurites.push(alurite);
                        })
                    });
                    
                    setAlurites(newAlurites)

                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            }
        );
    }, [alurites]);

    function writeUserData(alurite, userEmail, sentAt, userId, likes) {
        const db = getDatabase();

        const newPostRef = push(ref(db, '/' + userId));

        set(newPostRef, {
            alurite: alurite,
            user_email: userEmail,
            sent_at : sentAt,
            likes : likes
        });
    }

    const [valor, setValor] = useState('')
    
    const maxlenght = 255
    const qtdCaracteres = maxlenght - valor.length

    return (
        <App>
            <Header email={ email } />
            <div className="container max-w-screen-lg mx-auto px-5 bg-slate-200 py-2">
                <div className="bg-slate-200 py-2">
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
                            likes={alurite.likes} 
                            whoLikes={alurite.whoLikes} 
                            userId={alurite.userId}
                            aluritterId={alurite.aluritterId}
                        />
                    ))}
                </div>
            </div>
        </App>
    )
};

export default Home