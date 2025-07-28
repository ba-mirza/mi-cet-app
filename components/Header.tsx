"use client"

import Link from 'next/link'
import ActiveLink from './ActiveLink'
import Image from "next/image";

export default function Header() {

    const openMessenger = () => {
        const phoneNumber = "77017673731";
        const encodedMessage = encodeURIComponent("Здравствуйте! Интересует ваша услуга");

        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    }

    return (
        <div className="mt-6 flex justify-center font-black">
            <header className="w-[1056px] h-[69px] self-background border border-gray-200 shadow-sm rounded-lg flex items-center justify-between px-2.5">
                <div className="flex items-center ml-10">
                    <Link href="/" className="text-lg font-bold text-gray-900">
                        <Image src="/logo.png" alt="logo" width={64} height={64} loading="lazy" />
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                        <ActiveLink href={"/"}>
                            Главная
                        </ActiveLink>
                        <ActiveLink href={"/investments"}>
                            Инвестиции
                        </ActiveLink>
                    </nav>

                    <button
                        onClick={openMessenger}
                        className="flex gap-2 mr-10 bg-[#60D66A] hover:bg-[#29B63F] border-2 border-[#fff] text-white px-4 py-1.5 rounded-md transition-colors duration-200 cursor-pointer">
                        <Image width={24} height={24} src="/icons/whatsapp.png" alt="whatsapp-icon" loading="lazy" />
                        Связаться
                    </button>
                </div>
            </header>
        </div>
    )
}