import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="self-background font-medium border-t border-t-[#34343450] py-6 px-4 md:px-8 mt-auto shadow-lg">
            <div className="container mx-auto">
                {/* Contact Information and Pages */}
                <div className="flex flex-col md:flex-row justify-between mb-6 p-10">
                    {/* Contact Information - Left Side */}
                    <div className="flex items-center mb-4 md:mb-0">
                    <Image width={156} height={156} src="/logo.png" alt="logo" loading="lazy" />
                        <div className="ml-6">
                            <h1 className="uppercase text-xl mb-2 font-bold">Контакты</h1>
                            <div className="mb-1">
                                <p className="text-md">Адрес: г. Астана, ул. Мангилик 34, 106 офис</p>
                            </div>
                            <div className="mb-1">
                                <p className="text-md">Электронная почта: maratbelike@gmail.com</p>
                            </div>
                            <div className="mb-1">
                                <p className="text-md">Номер телефона: +7 (701) 767-37-31</p>
                            </div>
                        </div>
                    </div>

                    {/* Pages - Right Side */}
                    <div>
                        <h1 className="uppercase text-xl mb-2 font-bold">Меню</h1>
                        <div className="flex flex-col space-y-1">
                            <Link href="/" className="text-md text-blue-400 hover:text-blue-300">Главная</Link>
                            <Link href="/investments" className="text-md text-blue-400 hover:text-blue-300">Инвестиции</Link>
                        </div>
                    </div>
                </div>

                {/* Horizontal Line */}
                <hr className="border-gray-600 mb-4" />

                {/* Original Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <p className="text-sm mb-2 md:mb-0">
                        &copy; {currentYear} Mi-CET App. All rights reserved.
                    </p>

                    <p className="text-sm">
                        Developed by <span className="font-semibold text-blue-400">today.development</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;