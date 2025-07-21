import Link from 'next/link'
import ActiveLink from './ActiveLink'

export default function Header() {

    return (
        <div className="mt-6 flex justify-center font-black">
            <header className="w-[1056px] h-[69px] self-background border border-gray-200 shadow-sm rounded-lg flex items-center justify-between px-2.5">
                <div className="flex items-center ml-10">
                    <Link href="/" className="text-lg font-bold text-gray-900">
                        Logo
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

                    <button className="mr-10 self-background-button text-white px-4 py-1.5 rounded-md transition-colors duration-200 cursor-pointer">
                        Оставить заявку
                    </button>
                </div>
            </header>
        </div>
    )
}