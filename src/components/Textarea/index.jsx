import React from "react";

const Textarea = ({register, errors, name, required, value, id, placeholder, onAlter, maxLength}) => {
    const keypress = (event) => {
        const alphanumericValue = event.target.value;

        onAlter(alphanumericValue);
    }

  return (
    <>
      <textarea {...register(name, {
          required: required || true,
          maxLength: maxLength,
          minLength: 1
        })} onChange={ keypress } value={ value } id={ id } placeholder={ placeholder } />
      {errors[name]?.type === "required" && (
        <span className="text-xs text-red-500 pl-1">{`${name} é obrigatório(a)`}</span>
      )}
      {errors[name]?.type === "minLength" && (
        <span className="text-xs text-red-500 pl-1">{`O(a) ${name} precisa ter pelo menos ${1} caracteres`}</span>
      )}
    </>
  );
};

export default Textarea;