/** @format */

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Ubicacion from "./ubicacion";
import Contador from "./contador";

type Props = {
  children?: React.ReactNode;
  papa?: string;
  mama?: string;
};

const Mensaje: React.FC<Props> = ({ children, papa, mama }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [entered, setEntered] = useState(false); // <-- control entrada
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // disparar la animación de entrada apenas monte el componente
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
  };

  const handleDecline = () => {
    alert("No asistirás 😢");
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

  // delays (en segundos) para stagger
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
      {/* 🌸 Detalles animados de bebé (entrada + animaciones contínuas) */}
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

      {/* 🔊 Botón de música */}
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Pausar música" : "Reproducir música"}
        className={`absolute top-4 right-4 flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg transition-all duration-300 border border-white/40 backdrop-blur-sm cursor-pointer group
        ${
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
            ¡Presíname!
          </span>
        )}
      </button>

      {/* 💌 Título */}
      <h1
        className={`text-3xl sm:text-4xl text-[#ffffff] font-bold mt-12 italic drop-shadow-sm transform-gpu ${
          entered ? "enter-raise" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.title}s` }}
      >
        {children} {papa} & {mama}
      </h1>

      {/* ✨ Texto de invitación */}
      <div className="mt-6 space-y-4">
        <p
          className={`text-lg sm:text-xl text-[#ffffff] leading-relaxed transform-gpu ${
            entered ? "enter-raise-soft" : "enter-hidden"
          }`}
          style={{ animationDelay: `${delays.text1}s` }}
        >
          {invitacion[0]}
        </p>

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
          <span className=" text-[#ffffff] font-bold mt-12 italic">
            Domingo, 30 de Noviembre de 2025
          </span>
        </p>
      </div>

      <div>
        <Contador></Contador>
      </div>
      {/* 📍 Ubicación */}
      <div
        className={`${entered ? "enter-fade-up" : "enter-hidden"} mt-6`}
        style={{ animationDelay: `${delays.ubicacion}s` }}
      >
        <Ubicacion />
      </div>

      {/* 💕 Mensaje final */}
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

      {/* 🎀 Botones */}
      <div
        className={`flex flex-col sm:flex-row justify-center gap-4 mt-10 transform-gpu ${
          entered ? "enter-buttons" : "enter-hidden"
        }`}
        style={{ animationDelay: `${delays.buttons}s` }}
      >
        <Button onClick={handleClick}>Confirmar Asistencia 🎀</Button>
        <Button onClick={handleDecline}>No asistiré 💌</Button>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        /* ---------- Entradas ---------- */
        .enter-hidden { opacity: 0; }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(18px) scale(0.995); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUpSoft {
          0% { opacity: 0; transform: translateY(10px) scale(0.998); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: translateY(6px) scale(0.86) rotate(-6deg); }
          60% { transform: translateY(-6px) scale(1.08) rotate(4deg); opacity: 1; }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes popInSlight {
          0% { opacity: 0; transform: translateY(6px) scale(0.92) rotate(-4deg); }
          60% { transform: translateY(-4px) scale(1.04) rotate(3deg); opacity: 1; }
          100% { transform: translateY(0) scale(1) rotate(0deg); }
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-28px) translateY(-50%) scale(0.98); }
          100% { opacity: 1; transform: translateX(0) translateY(-50%) scale(1); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes buttonsPop {
          0% { opacity: 0; transform: translateY(18px) scale(0.96); }
          60% { transform: translateY(-6px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); }
        }

        /* clases que aplican las animaciones (se usan con inline animationDelay) */
        .enter-raise {
          animation: fadeUp 550ms cubic-bezier(.2,.9,.2,1) both;
        }
        .enter-raise-soft {
          animation: fadeUpSoft 480ms cubic-bezier(.2,.9,.2,1) both;
        }
        .enter-pop {
          animation: popIn 640ms cubic-bezier(.2,.9,.25,1) both;
        }
        .enter-pop-slight {
          animation: popInSlight 620ms cubic-bezier(.2,.9,.25,1) both;
        }
        .enter-slide {
          animation: slideInLeft 720ms cubic-bezier(.2,.9,.25,1) both;
        }
        .enter-fade {
          animation: fadeIn 420ms ease both;
        }
        .enter-fade-up {
          animation: fadeUpSoft 520ms ease both;
        }
        .enter-buttons {
          animation: buttonsPop 720ms cubic-bezier(.2,.9,.2,1) both;
        }

        /* ---------- Animaciones contínuas ya existentes ---------- */
        @keyframes pressHint {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-press-hint { animation: pressHint 1.3s infinite ease-in-out; }
        .animate-bounce-slow { animation: bounceSlow 1.8s infinite ease-in-out; }
        .animate-spin-slow { animation: spinSlow 4s linear infinite; }

        /* 🍼 Detalles bebé (continúa con pequeñas animaciones) */
        @keyframes bounceBaby {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        .animate-bounce-baby { animation: bounceBaby 3s ease-in-out infinite; }

        @keyframes bottleBaby {
          0%, 100% { transform: rotate(0deg); opacity: 0.85; }
          50% { transform: rotate(-12deg); opacity: 1; }
        }
        .animate-bottle-baby { animation: bottleBaby 4s ease-in-out infinite; }

        @keyframes footBaby {
          0%, 100% { opacity: 0.78; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.16); }
        }
        .animate-foot-baby { animation: footBaby 3s ease-in-out infinite; }

        @keyframes heartBaby {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.28); opacity: 1; }
        }
        .animate-heart-baby { animation: heartBaby 2.8s ease-in-out infinite; }

        @keyframes rattleBaby {
          0%, 100% { transform: rotate(0deg); opacity: 0.6; }
          50% { transform: rotate(15deg); opacity: 1; }
        }
        .animate-rattle-baby { animation: rattleBaby 5s ease-in-out infinite; }

        /* Small GPU hint to make transitions smoother */
        .transform-gpu { will-change: transform, opacity; }
      `}</style>
    </div>
  );
};

export default Mensaje;
