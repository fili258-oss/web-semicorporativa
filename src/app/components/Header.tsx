"use client"
import Link from "next/link"
import { useState } from "react"
import { NAV_LINKS } from "@/app/constants"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }        

    return (
        <header className="bg-secondary-900 shadow-sm sticky top-0 z-50">
            <div className="flex h-16 md:h-20 lg:h-24 xl:h-28 items-center justify-between px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl mx-auto">
                
                {/* Logo */}
                <div className="text-white flex-shrink-0">
                    <p>Developers</p>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex space-x-6 lg:space-x-8 xl:space-x-12">
                        {NAV_LINKS.map((item) => (
                            <li key={item.key}>
                                <Link 
                                    href={item.href} 
                                    className="text-white hover:text-primary-700 font-medium text-sm lg:text-base xl:text-lg transition-colors duration-200 hover:scale-105 transform"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-1"
                    aria-label="Abrir menú de navegación"
                >
                    <span className={`block w-6 h-0.5 bg-primary-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-primary-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-primary-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <nav className="px-4 py-4">
                    <ul className="space-y-4">
                        {NAV_LINKS.map((item) => (
                            <li key={item.key}>
                                <Link 
                                    href={item.href}
                                    className="block text-gray-700 hover:text-gray-900 font-medium text-base py-2 px-3 rounded-md hover:bg-gray-50 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header