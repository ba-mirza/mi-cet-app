import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="self-background font-medium border-t border-t-[#34343450] py-6 px-4 md:px-8 mt-auto shadow-lg">
      <div className="container mx-auto">
        {/* Contact Information and Pages */}
        <div className="flex flex-col md:flex-row justify-between mb-6 p-4 lg:p-10">
          {/* Contact Information - Left Side */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 md:mb-0">
            <Image
              width={120}
              height={120}
              className="lg:w-[154px] lg:h-[148px] mb-4 sm:mb-0"
              src="/logo.png"
              alt="logo"
              loading="lazy"
            />
            <div className="sm:ml-6">
              <h1 className="uppercase text-lg lg:text-xl mb-2 font-bold">
                Контакты
              </h1>
              <div className="mb-1">
                <p className="text-sm lg:text-md break-words">
                  Адрес: г. Астана, ул. Мангилик 34, 106 офис
                </p>
              </div>
              <div className="mb-1">
                <p className="text-sm lg:text-md break-all">
                  Электронная почта: maratbelike@gmail.com
                </p>
              </div>
              <div className="mb-1">
                <p className="text-sm lg:text-md">
                  Номер телефона: +7 (701) 767-37-31
                </p>
              </div>
            </div>
          </div>

          {/* Pages - Right Side */}
          <div className="flex-shrink-0">
            <h1 className="uppercase text-lg lg:text-xl mb-2 font-bold">
              Меню
            </h1>
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="text-sm lg:text-md text-blue-400 hover:text-blue-300"
              >
                Главная
              </Link>
              <Link
                href="/investments"
                className="text-sm lg:text-md text-blue-400 hover:text-blue-300"
              >
                Инвестиции
              </Link>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-600 mb-4" />

        {/* Original Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs lg:text-sm mb-2 md:mb-0">
            &copy; {currentYear} Mi-CET App. All rights reserved.
          </p>

          <p className="text-xs lg:text-sm">
            Developed by{" "}
            <span className="font-semibold text-blue-400">
              today.development
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
