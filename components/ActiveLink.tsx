"use client"

import {usePathname} from "next/navigation";
import {ReactNode} from "react";
import Link from "next/link";

export default function ActiveLink({href, children}: {href: string; children: ReactNode}) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link className={isActive ? 'isActive' : 'hover:text-[#0670A1]'} href={href}>
            {children}
        </Link>
    )
}