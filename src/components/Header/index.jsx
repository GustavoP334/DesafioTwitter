import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Header = (props) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        const auth = getAuth();

        signOut(auth).then(() => {
            localStorage.removeItem("access-token");
            navigate("/login");
        }).catch((error) => {
            console.log(error);
        });
    };

  return (
    <div className="flex justify-between items-center p-2 bg-blue-950 mb-4">
        <div>
            <h1 className="font-sans text-3xl text-sky-500 pb-1">aluritter</h1>
        </div>
        <div className="flex items-center">
            <div>
                <span className="font-sans text-sky-100 mr-1">{props.email}</span>
            </div>
            <div>
                <Button type="submit" text="sair" classColor="bg-red-500" classColorHover="bg-red-600" onClick={handleLogout} />
            </div>
        </div>
    </div>
  );
};

export default Header;
