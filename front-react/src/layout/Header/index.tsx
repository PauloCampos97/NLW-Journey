"use client"
import { Logos } from "@/components/config/Logos";
import { ScrollStick } from "./scripts/scroll-sticky";
import { useEffect, useRef } from "react";

export default function Header() {
    const ref = useRef(null);

    useEffect(() => {
        addEventListener("scroll", ScrollStick);
    }, []);

    return (

        <header className="fixed top-0 flex justify-around items-center w-full h-25 bg-gray-800 text-white shadow-lg transition duration-1000 z-30">
            <div id="logo">
                <a href="/">
                    <img className="w-24 md:w-32 lg:w-96" src={Logos.images.logo.neon} alt="Logo" />
                </a>
            </div>
            <nav className="navbar">
                <ul className="hidden lg:flex items-center gap-4 ml-8">
                    <li className="menu-item">
                        <a className="font-semibold text-lg" href="/">Início</a>
                    </li>
                    <li className="menu-item">
                        <a className="font-semibold text-lg" href="/quem-somos">Quem Somos</a>
                    </li>

                    <li className="menu-item">
                        <a className="font-semibold text-lg" href="/contato">Contato</a>
                    </li>
                </ul>
            </nav>

            <script src="components\Header\script\scroll-sticky.tsx"></script>
        </header>

    );
}
