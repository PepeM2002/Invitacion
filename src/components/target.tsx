/** @format */

import Mensaje from "./mensaje";
import { hearts, stars } from "./shapes";

const Target = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#de88a9] via-[#de88a9a8] to-pink-200 relative overflow-hidden">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute text-pink-300 animate-float opacity-70 pointer-events-none"
          style={{
            left: h.left,
            top: h.top,
            fontSize: h.fontSize,
            animationDuration: h.animationDuration,
            animationDelay: h.animationDelay,
            transform: "translate(-50%, -50%)",
          }}
        >
          ♥
        </span>
      ))}

      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute text-white animate-twinkle pointer-events-none"
          style={{
            left: s.left,
            top: s.top,
            fontSize: s.fontSize,
            animationDuration: s.animationDuration,
            animationDelay: s.animationDelay,
            transform: "translate(-50%, -50%)",
          }}
        >
          ✦
        </span>
      ))}
      <Mensaje mama="Karen" papa="Angel !">
        ¡Estás invitado(a) al Baby Shower de
      </Mensaje>

      <div className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent animate-glow pointer-events-none"></div>

      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) translateY(-30px) rotate(10deg); opacity: 1; }
          100% { transform: translate(-50%, -50%) translateY(0) rotate(-10deg); opacity: 0.8; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.4); }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-glow {
          animation: glow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Target;
