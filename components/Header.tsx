import Link from 'next/link'

export default function Header() {
    return (
        <div className="mt-6 flex justify-center font-black">
            <header className="w-[1056px] h-[69px] bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-between px-2.5">
                {/* Логотип */}
                <div className="flex items-center ml-10">
                    <Link href="/" className="text-lg font-bold text-gray-900">
                        Logo
                    </Link>
                </div>

                {/* Навигация и кнопка заявки */}
                <div className="flex items-center gap-6">
                    {/* Навигационные кнопки */}
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/investments"
                            className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                        >
                            Инвестиции
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                        >
                            О нас
                        </Link>
                    </nav>

                    {/* Кнопка заявки */}
                    <button className="mr-10 bg-blue-400 hover:bg-blue-500 text-white px-4 py-1.5 rounded-md transition-colors duration-200 cursor-pointer">
                        Оставить заявку
                    </button>
                </div>
            </header>
        </div>
    )
}