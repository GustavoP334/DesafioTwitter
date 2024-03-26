import React from "react";
import Input from "../Input/index.jsx";
import Button from "../Button/index.jsx";

const Form = ({ handleSubmit, handleFormSubmit, buttonText, register, errors }) => {
  return (
    <form
      className="flex space-y-2 flex-col w-full lg:w-1/4 md:w-1/3 sm:w-1/2 px-10 sm:px-0"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Input
        register={register}
        errors={errors}
        name="email"
        type="email"
        placeholder="email@exemplo.com"
        minLength={5}
      />

      <Input
        register={register}
        errors={errors}
        name="senha"
        type="password"
        placeholder="Senha"
        minLength={8}
      />

      <Button type="submit" text={buttonText} classColor="bg-emerald-500" classColorHover="bg-emerald-600" />
    </form>
  );
};

export default Form;
