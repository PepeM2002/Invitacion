/** @format */

import React from "react";

type Props = {
  name?: string;
};

const Ubicacion: React.FC<Props> = () => {
  return (
    <section className="flex justify-center items-center  ">
      <div className="bg-[#de88a969] shadow-lg rounded-2xl p-6 max-w-xl w-full text-center">
        <h2 className="text-2xl font-semibold text-[#ffffff] mb-4">
          Ubicación
        </h2>
        <span className="font-semibold text-[#ffffff]">
          AV. Almoloya de Juárez No. 105 , Pasando el Puente
        </span>
        <div className="rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3407.7960239338377!2d-99.82473792532964!3d19.293787045100338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDE3JzM3LjYiTiA5OcKwNDknMTkuOCJX!5e1!3m2!1ses!2smx!4v1763050306821!5m2!1ses!2smx"
            className="w-full h-64 border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
