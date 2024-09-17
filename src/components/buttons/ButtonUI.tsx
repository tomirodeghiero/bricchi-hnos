import React from 'react';

const ButtonUI = ({ text }: any) => {
  return (
    <div className="relative group">
      <button
        className="relative inline-block p-px font-medium leading-6 text-white bg-[#BF0426] cursor-pointer rounded-xl shadow-zinc-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 group-hover:border-black border border-transparent"
      >
        <span
          className="absolute inset-0 rounded-xl bg-gradient-to-r p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <span className="relative z-10 block px-6 py-3 rounded-xl">
          <div className="relative z-10 flex items-center space-x-2">
            <span className="transition-all duration-500 group-hover:translate-x-1">{text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </span>
      </button>
    </div>
  );
}

export default ButtonUI;
