"use client";

import Link from "next/link";
import ActiveLink from "./ActiveLink";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMessenger = () => {
    const phoneNumber = "77017673731";
    const encodedMessage = encodeURIComponent(
      "Здравствуйте! Интересует ваша услуга"
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="mt-4 px-4 flex justify-center font-black sm:mt-5 md:mt-6 lg:px-0">
      <header className="w-full max-w-sm self-background border border-gray-200 shadow-sm rounded-lg flex items-center justify-between px-3 py-3 sm:max-w-md sm:px-4 md:max-w-2xl md:px-5 lg:w-[1056px] lg:h-[69px] lg:max-w-none lg:px-2.5 lg:py-0 2xl:w-[1056px]">
        <div className="flex items-center lg:ml-10">
          <Link href="/" className="text-lg font-bold text-gray-900">
            <Image
              src="/logo.png"
              alt="logo"
              width={64}
              height={64}
              loading="lazy"
            />
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <ActiveLink href={"/"}>Главная</ActiveLink>
            <ActiveLink href={"/investments"}>Инвестиции</ActiveLink>
          </nav>

          <button
            onClick={openMessenger}
            className="flex gap-2 mr-10 bg-[#60D66A] hover:bg-[#29B63F] border-2 border-[#fff] text-white px-4 py-1.5 rounded-md transition-colors duration-200 cursor-pointer 2xl:px-5 2xl:py-2"
          >
            <Image
              width={24}
              height={24}
              src="/icons/whatsapp.png"
              alt="whatsapp-icon"
              loading="lazy"
            />
            Связаться
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={openMessenger}
            className="flex items-center justify-center bg-[#60D66A] hover:bg-[#29B63F] border-2 border-[#fff] text-white p-2 rounded-md transition-colors duration-200 cursor-pointer sm:px-3 sm:py-2 md:gap-2 md:px-4"
          >
            <Image
              width={20}
              height={20}
              src="/icons/whatsapp.png"
              alt="whatsapp-icon"
              loading="lazy"
              className="sm:w-5 sm:h-5"
            />
            <span className="hidden md:inline text-sm">Связаться</span>
          </button>

          <button
            onClick={toggleMenu}
            className="flex flex-col gap-1 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
            aria-label="Открыть меню"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-200 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-200 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-20 left-4 right-4 bg-white border border-gray-200 shadow-lg rounded-lg z-50 lg:hidden sm:top-24 md:top-28"
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="font-semibold text-gray-900">Меню</span>
            <button
              onClick={closeMenu}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Закрыть меню"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col p-4 gap-1">
            <div
              className="py-3 px-2 border-b border-gray-100 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={closeMenu}
            >
              <ActiveLink href={"/"}>Главная</ActiveLink>
            </div>
            <div
              className="py-3 px-2 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={closeMenu}
            >
              <ActiveLink href={"/investments"}>Инвестиции</ActiveLink>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
