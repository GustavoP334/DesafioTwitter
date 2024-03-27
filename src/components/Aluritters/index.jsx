import React from "react";
import Like from "../Like";

const Alurite = (props) => {
    return (
        <div className="container mx-auto px-4 bg-white p-2 py-2">
            <div className="flex justify-end items-center">
                <Like likes={props.likes} whoLikes={props.whoLikes} userId={props.userId} aluritterId={props.aluritterId} />
            </div>
            <span className="text-2xl">{props.alurite}</span>
            <div className="flex justify-between items-center">
                <span className="text-sky-500">{props.email}</span>
                <span>{props.dataHora}</span>
            </div>
        </div>
    )
}

export default Alurite;