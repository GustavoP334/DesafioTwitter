import React from "react";
import classNames from "classnames";

const Input = ({ register, errors, name, type, placeholder, maxLength, minLength }) => {
  const customValidation = (value) => {
    if(type === 'email'){
      // Verifica se o valor contém um '@'
      return value.includes('@');
    }

    return true;
  };

  return (
    <div className="mt-2.5">
      <input
        {...register(name, {
          required: true,
          maxLength: maxLength,
          minLength: minLength,
          validate: {
            customValidation: customValidation,
          },
        })}
        className={classNames(
          "w-full p-2 rounded text-gray-500 placeholder-slate-400",
          {
            'border-2 border-rose-500 focus:border-red-500 focus:ring-red-500': errors[name],
            'border-2 border-sky-500 focus:border-sky-500 focus:ring-sky-500': !errors[name]
          }
        )}
        placeholder={placeholder || ""}
        type={type || "text"}
      />
      {errors[name]?.type === "required" && (
        <span className="text-xs text-red-500 pl-1">{`${name} é obrigatório(a)`}</span>
      )}
      {errors[name]?.type === "minLength" && (
        <span className="text-xs text-red-500 pl-1">{`O(a) ${name} precisa ter pelo menos ${minLength} caracteres`}</span>
      )}
      {errors[name]?.type === "customValidation" && (
        <span className="text-xs text-red-500 pl-1">O campo deve conter um "@"</span>
      )}
    </div>
  );
};

export default Input;
