"use client";

import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  return (
    <div className="py-12 " id='contacto'>
      <div className="flex justify-between gap-4 max-md:flex max-md:flex-col max-md:items-start">
        <div className="w-[50%] max-md:w-full">
          <h2 className="text-4xl font-bold text-center mb-12">Contacto 📧</h2>
          <p className="text-start text-stone-300 mb-12">
            Me puedes contactar a traves de mi correo electronico o a traves de
            mi redes sociales. Tambien puedes dejarme una sugerencia o una
            pregunta, utiliza este formulario para contactarme. Gracias por tu
            visita 😉
          </p>
        </div>
        <form
          
          className="w-[50%] max-md:w-full flex flex-col gap-4 bg-stone-900 p-8 rounded-lg"
          action="https://getform.io/f/apjpjora" method="POST"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="p-2 rounded-md bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-600"
              placeholder="Tu nombre"
              {...register("name", { required: "El nombre es requerido" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-2 rounded-md bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-600"
              placeholder="tu@email.com"
              {...register("email", {
                required: "El email es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold">
              Mensaje
            </label>
            <textarea
              id="message"
              className="p-2 rounded-md bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-600 min-h-[150px] max-h-[150px]"
              placeholder="Tu mensaje"
              {...register("message", { required: "El mensaje es requerido" })}
            />
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-stone-700 text-white font-bold p-4 rounded-md hover:bg-stone-800 transition-colors duration-300 mt-4"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
