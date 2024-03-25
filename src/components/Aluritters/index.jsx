import React from "react";

const Alurite = (props) => {
    return (
        <div className="container mx-auto px-4 bg-white p-2 py-2">
            <span className="text-2xl">{ props.alurite }</span>
            <div className="flex justify-between items-center">
                <span className="text-sky-500">{ props.email }</span>
                <span>{ props.dataHora }</span>
            </div>
        </div>
    )
}

export default Alurite;