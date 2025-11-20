/** @format */

import React, { useState } from "react";
import Target from "./target";

const Sobre: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [showTarget, setShowTarget] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => setShowTarget(true), 1200);
  };

  if (showTarget) {
    return <Target />;
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-pink-200 via-pink-300 to-rose-200 relative overflow-hidden">
      <span className="absolute w-32 h-32 rounded-full bg-white/30 animate-pulse-slow top-20 left-1/4"></span>
      <span className="absolute w-24 h-24 rounded-full bg-white/20 animate-pulse-slow top-1/3 right-1/4"></span>
      <span className="absolute w-40 h-40 rounded-full bg-white/10 animate-pulse-slow bottom-20 left-1/3"></span>

      <div
        className={`relative w-64 h-40 bg-gradient-to-br from-pink-400 to-rose-400 rounded-xl shadow-2xl cursor-pointer transform-gpu ${
          opened
            ? "animate-open-sobre"
            : "hover:scale-105 hover:rotate-1 transition-transform duration-500"
        }`}
        onClick={handleOpen}
      >
        <div
          className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-pink-500 to-rose-500 rounded-t-xl origin-bottom transform-gpu ${
            opened ? "rotate-x-[-180deg] animate-flip-lid" : ""
          }`}
        ></div>

        {!opened && (
          <p className="absolute inset-0 flex justify-center items-center text-white font-bold text-lg select-none pointer-events-none animate-bounce">
            📩 Toca para abrir
          </p>
        )}

        <span className="absolute top-2 left-4 w-4 h-2 bg-white/70 rounded-full animate-glimmer"></span>
        <span className="absolute top-6 right-6 w-3 h-1 bg-white/50 rounded-full animate-glimmer delay-200"></span>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce { animation: bounce 1s infinite ease-in-out; }

        @keyframes glimmer {
          0%, 100% { opacity: 0.2; transform: translateX(0); }
          50% { opacity: 1; transform: translateX(4px); }
        }
        .animate-glimmer { animation: glimmer 1.8s infinite ease-in-out; }
        .delay-200 { animation-delay: 0.2s; }

        @keyframes openSobre {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(2deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .animate-open-sobre { animation: openSobre 1.2s ease forwards; }

        @keyframes flipLid {
          0% { transform: rotateX(0deg); }
          100% { transform: rotateX(-180deg); }
        }
        .animate-flip-lid { animation: flipLid 1s ease forwards; }

        /* GPU hint */
        .transform-gpu { will-change: transform, opacity; }
      `}</style>
    </div>
  );
};

export default Sobre;
