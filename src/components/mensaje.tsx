/** @format */

// Mensaje.tsx (versión con imágenes agregadas)

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Ubicacion from "./ubicacion";
import Contador from "./contador";
import bebe from "../assets/bebe1.png";
import bebe2 from "../assets/bb2.png";
import ultra from "../assets/descarga.jpg";

type Props = {
  children?: React.ReactNode;
  papa?: string;
  mama?: string;
};

const Mensaje: React.FC<Props> = ({ children, papa, mama }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const bebe1 = bebe;
  const bebe3 = bebe2;
  const ultrasonido = ultra;

  const urlpapa =
    "https://wa.me/527224447601?text=%C2%A1Hola%21+Quiero+confirmar+mi+asistencia+al+baby+shower+bajo+una+lluvia+de+amor+";

  const urlmama =
    "https://wa.me/527206733116?text=%C2%A1Hola%21+Quiero+confirmar+mi+asistencia+al+baby+shower+bajo+una+lluvia+de+amor+";

  useEffect(() => {
    const t = window.setTimeout(() => setEntered(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const audio = new Audio(
      "https://res.cloudinary.com/dbaa9fw4d/video/upload/v1763048663/En_Mi_Coraz%C3%B3n_Vivir%C3%A1s_Versi%C3%B3n_De_Phil_tfnw0y.mp3"
    );
    audio.loop = true;
    audio.volume = 0.4;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        console.log(
          "El navegador bloqueó el autoplay. La música se iniciará al hacer clic."
        );
        setIsPlaying(false);
      });

    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  const handleClick = () => {
    alert("Gracias por confirmar tu asistencia 🎉");
    window.location.href = urlpapa;
  };

  const handleClickMom = () => {
    alert("Gracias por confirmar tu asistencia 🎉");
    window.location.href = urlmama;
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const invitacion = [
    "Un dulce bebé está en camino, y queremos celebrar con mucho cariño.",
    "Acompáñanos a compartir este momento tan especial mientras esperamos la llegada de nuestro angelito 💕",
  ];

  const delays = {
    title: 0.18,
    text1: 0.36,
    text2: 0.52,
    fecha: 0.7,
    ubicacion: 0.88,
    finalMsg: 1.04,
    buttons: 1.2,
    iconsStart: 0.12,
  };

  return (
    <div className="w-full max-w-[620px] mx-auto p-6 sm:p-10 rounded-3xl shadow-xl text-center relative z-10 transition-all duration-500 bg-cover bg-center bg-no-repeat overflow-hidden">
      <div
        className={`flex justify-center gap-6 mt-4 ${
          entered ? "enter-raise" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.title - 0.1}s` }}
      >
        <img
          src={bebe1}
          alt="Bebé niña"
          className="w-32 sm:w-40 drop-shadow-lg rounded-xl animate-bounce-baby"
        />
      </div>

      <span
        className={`absolute top-6 left-6 text-4xl text-pink-300 transform-gpu pointer-events-none ${
          entered ? "enter-pop" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.iconsStart}s` }}
        aria-hidden
      >
        🧸
      </span>

      <span
        className={`absolute top-10 right-8 text-4xl text-blue-300 transform-gpu pointer-events-none ${
          entered ? "enter-pop-slight" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.iconsStart + 0.06}s` }}
        aria-hidden
      >
        🍼
      </span>

      <span
        className={`absolute bottom-8 left-10 text-3xl text-rose-400 transform-gpu pointer-events-none ${
          entered ? "enter-pop" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.iconsStart + 0.12}s` }}
        aria-hidden
      >
        👣
      </span>

      <span
        className={`absolute bottom-6 right-10 text-3xl text-pink-400 transform-gpu pointer-events-none ${
          entered ? "enter-pop-slight" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.iconsStart + 0.18}s` }}
        aria-hidden
      >
        💖
      </span>

      <span
        className={`absolute top-1/2 left-0 text-3xl text-yellow-300 transform-gpu -translate-y-1/2 pointer-events-none ${
          entered ? "enter-slide" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.iconsStart + 0.24}s` }}
        aria-hidden
      >
        🎠
      </span>

      <button
        onClick={toggleMusic}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
        className={`absolute top-4 right-4 flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg transition-all duration-300 border border-white/40 backdrop-blur-sm cursor-pointer group ${
          isPlaying
            ? "bg-gradient-to-br from-pink-400 to-rose-400 animate-pulse text-white shadow-pink-300"
            : "bg-gradient-to-br from-gray-100 to-pink-100 hover:from-pink-200 hover:to-rose-200 text-pink-500"
        } ${entered ? "enter-fade" : "enter-hidden"}`}
        style={{ animationDelay: `${delays.title - 0.08}s` }}
      >
        <span
          className={`text-3xl transition-transform duration-500 ${
            isPlaying
              ? "animate-spin-slow"
              : "animate-bounce-slow group-hover:scale-110"
          }`}
        >
          {isPlaying ? "⏸️" : "🎵"}
        </span>

        {!isPlaying && (
          <span className="text-[10px] sm:text-xs mt-1 text-pink-600 font-semibold animate-press-hint">
            ¡Dale Click!
          </span>
        )}
      </button>

      <h1
        className={`text-3xl sm:text-4xl text-[#ffffff] font-bold mt-8 italic drop-shadow-sm transform-gpu ${
          entered ? "enter-raise" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.title}s` }}
      >
        {children} {mama} & {papa}
      </h1>

      <div className="mt-6 space-y-4">
        <p
          className={`text-lg sm:text-xl text-[#ffffff] leading-relaxed transform-gpu ${
            entered ? "enter-raise-soft" : "enter-hidden"
          }`}
          style={{ animationDelay: `${delays.text1}s` }}
        >
          {invitacion[0]}
        </p>

        <img
          src={ultrasonido}
          alt="Ultrasonido"
          className="mx-auto rounded-lg shadow bg-transparent"
        />

        <p
          className={`text-lg sm:text-xl text-[#ffffff] leading-relaxed transform-gpu ${
            entered ? "enter-raise-soft" : "enter-hidden"
          }`}
          style={{ animationDelay: `${delays.text2}s` }}
        >
          {invitacion[1]}
        </p>

        <p
          className={`text-base sm:text-lg text-[#ffffff] font-bold mt-6 italic transform-gpu ${
            entered ? "enter-raise-soft" : "enter-hidden"
          }`}
          style={{ animationDelay: `${delays.fecha}s` }}
        >
          Fecha:{" "}
          <span className="text-[#ffffff] font-bold mt-12 italic">
            Domingo, 30 de Noviembre de 2025
            <br />
            Hora: 15:00 hrs (3:00 PM)
          </span>
        </p>
      </div>

      {/* CONTADOR */}
      <div className="mt-6">
        <Contador />
        <img
          src={bebe3}
          alt="Bebé niña 2"
          className="sm:w-40 drop-shadow-lg rounded-xl animate-bounce-baby mx-auto mt-4"
        />
      </div>

      {/* UBICACIÓN */}
      <div
        className={`${entered ? "enter-fade-up" : "enter-hidden"} mt-6`}
        style={{ animationDelay: `${delays.ubicacion}s` }}
      >
        <Ubicacion />
      </div>

      {/* MENSAJE FINAL */}
      <p
        className={`mt-6 px-6 py-4 rounded-2xl border border-pink-200 bg-gradient-to-br from-white/60 via-pink-50 to-rose-50 shadow-md text-center text-base sm:text-lg text-[#f800d7] leading-relaxed italic transform-gpu ${
          entered ? "enter-raise-soft" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.finalMsg}s` }}
      >
        Ven con tu mejor sonrisa, mucho amor y ganas de celebrar este
        <span className="mx-1 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
          hermoso milagro de vida
        </span>
        .
        <span className="ml-2 inline-block text-pink-500 animate-pulse">
          💖
        </span>
      </p>

      {/* BOTONES */}
      <div
        className={`flex flex-col sm:flex-row justify-center gap-4 mt-10 transform-gpu ${
          entered ? "enter-buttons" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.buttons}s` }}
      >
        <Button onClick={handleClick}>Confirmar Asistencia papá 🎀</Button>
        <Button onClick={handleClickMom}>Confirmar Asistencia mamá 💌</Button>
      </div>

      {/* ANIMACIONES EXTRA */}
      <style>{`
        .enter-hidden { opacity: 0; }
        @keyframes bounceBaby {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(4deg); }
        }
        .animate-bounce-baby { animation: bounceBaby 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Mensaje;
