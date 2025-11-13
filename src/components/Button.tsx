/** @format */

import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#ff769b] hover:bg-[#f74070] text-white font-bold py-2 px-4 border-b-4 border-[#f35c85] hover:border-[#f35c85] rounded cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
