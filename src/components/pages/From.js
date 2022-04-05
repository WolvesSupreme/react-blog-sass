import { useForm } from "react-hook-form";
import React from "react";

export default function From() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
      <label form="name">
        <h5 className="contact-text">Name</h5>
      </label>
      <input
        {...register("name", { required: true })}
        placeholder="Escribe tu nombre"
      />
      {errors.lastName && "Last name is required"}

      <label form="lastname">
        <h5 className="contact-text">Last Name</h5>
      </label>
      <input
        {...register("lastName", { required: true })}
        placeholder="Escribe tu apellido"
      />
      {errors.lastName && "Last name is required"}

      <label form="phone">
        <h5 className="contact-text">Phone</h5>
      </label>

      <input
        {...register("phone", { required: true })}
        placeholder="Escribe tu teléfono"
      />
      {errors.lastName && "Last name is required"}

      <input type="submit" />
    </form>
  );
}
