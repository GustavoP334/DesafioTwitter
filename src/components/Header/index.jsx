import React from "react";
import Button from "../Button";

const Header = (props) => {
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
                <Button type="submit" text="sair" classColor="bg-red" />
            </div>
        </div>
    </div>
  );
};

export default Header;
