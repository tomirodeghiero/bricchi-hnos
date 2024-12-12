"use client";

import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof window === "undefined") {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-[90%] max-w-4xl bg-white rounded-lg p-6 shadow-lg overflow-y-auto transform transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"
          }`}
        style={{ maxHeight: "75vh" }}
        onClick={(e) => e.stopPropagation()}
        role="document"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close Modal"
        >
          <FaTimes size={24} />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;