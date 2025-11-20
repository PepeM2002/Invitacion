/** @format */
import React, { useState, useEffect } from "react";

const Contador: React.FC = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(
      new Date("2025-11-30T15:00:00").toLocaleString("en-US", {
        timeZone: "America/Mexico_City",
      })
    );

    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" })
    );

    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-pink-400 text-4xl font-bold animate-pulse px-4 text-center">
        ¡Es el gran día! 🎉
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center mt-10 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-500 mb-8 sm:mb-10 text-center animate-bounce">
        ¡Cuenta regresiva para el Baby Shower! 💖
      </h1>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-4">
        {[
          { value: timeLeft.days, label: "Días", delay: "delay-0" },
          { value: timeLeft.hours, label: "Horas", delay: "delay-150" },
          { value: timeLeft.minutes, label: "Minutos", delay: "delay-300" },
          { value: timeLeft.seconds, label: "Segundos", delay: "delay-450" },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center bg-pink-100/70 p-4 sm:p-6 rounded-3xl shadow-lg animate-pulse-soft ${item.delay}`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-pink-400">
              {item.value.toString().padStart(2, "0")}
            </span>
            <span className="text-sm sm:text-lg md:text-xl text-pink-500 font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* SOLO Google Calendar */}
      <div className="mt-10 flex flex-col gap-4">
        <a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Baby+Shower&details=¡Acompáñanos+en+el+Baby+Shower!&dates=20251130T210000Z/20251201T000000Z"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-xl transition transform hover:scale-105 active:scale-95"
        >
          {/* Icono Google Calendar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v13c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15H5V10h14v9zm0-11H5V6h14v2z" />
          </svg>
          Agregar a Google Calendar
        </a>
      </div>

      <style>{`
        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-pulse-soft { animation: pulseSoft 1.2s ease-in-out infinite; }
        .delay-0 { animation-delay: 0s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-450 { animation-delay: 0.45s; }
      `}</style>
    </div>
  );
};

export default Contador;
