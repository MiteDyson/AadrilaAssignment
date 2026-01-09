import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Group 47.svg'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [shouldRender, setShouldRender] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Initial animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    // Handle scroll to change background
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [mobileOpen])

    const handleMenuToggle = () => {
        if (mobileOpen) {
            setMobileOpen(false)
            setTimeout(() => {
                setShouldRender(false)
            }, 400)
        } else {
            setShouldRender(true)
            setTimeout(() => {
                setMobileOpen(true)
            }, 10)
        }
    }

    const handleLinkClick = () => {
        if (mobileOpen) {
            handleMenuToggle()
        }
    }

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#industries', label: 'Industries' },
        { href: '#products', label: 'Products' },
        { href: '#blog', label: 'Blog' },
        { href: '#contact', label: 'Contact Us' },
        { href: '#about', label: 'About Us' },
    ]

    return (
        <header 
            className={`
                fixed top-0 left-0 z-50 w-full 
                transition-all duration-500 ease-out
                ${scrolled 
                    ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
                    : 'bg-transparent py-4'
                }
                ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
            `}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div 
                        className={`
                            transition-all duration-700 ease-out
                            ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                        `}
                    >
                        <a href="#" className="flex items-center gap-2 group">
                            <img 
                                src={logo} 
                                alt='Aadrila Logo' 
                                className="h-10 lg:h-12 transition-transform duration-300 group-hover:scale-105" 
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-1 lg:space-x-2">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`
                                        relative px-4 lg:px-5 py-2 text-sm font-medium
                                        transition-all duration-300 ease-out rounded-lg
                                        text-gray-700 hover:text-blue-600 group
                                    `}
                                    style={{
                                        transitionDelay: `${(index + 1) * 100}ms`,
                                        opacity: isVisible ? 1 : 0,
                                        transform: isVisible ? 'translateY(0)' : 'translateY(-10px)'
                                    }}
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4 rounded-full" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Get a Demo Button - Desktop */}
                    <div 
                        className={`
                            hidden md:block transition-all duration-700 ease-out
                            ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}
                        `}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <a
                            href="#demo"
                            className="
                                inline-flex items-center px-6 py-2.5 
                                bg-[#3e6fb4] hover:bg-[#365a9e] 
                                text-white font-medium text-sm
                                rounded-full transition-all duration-300
                                hover:shadow-lg hover:-translate-y-0.5
                            "
                        >
                            Get a Demo
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={handleMenuToggle}
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                            className="
                                inline-flex items-center justify-center 
                                w-10 h-10 rounded-lg text-gray-800
                                transition-all duration-300 
                                hover:bg-gray-100 active:scale-95
                            "
                        >
                            <div className="relative w-6 h-6">
                                <Menu 
                                    size={24} 
                                    className={`
                                        absolute inset-0 transition-all duration-300
                                        ${mobileOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}
                                    `}
                                />
                                <X 
                                    size={24} 
                                    className={`
                                        absolute inset-0 transition-all duration-300
                                        ${mobileOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}
                                    `}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {shouldRender && (
                <div className="md:hidden fixed inset-0 z-40 top-0">
                    {/* Backdrop overlay */}
                    <div
                        className={`
                            absolute inset-0 bg-black/30 backdrop-blur-sm
                            transition-opacity duration-500 ease-out
                            ${mobileOpen ? 'opacity-100' : 'opacity-0'}
                        `}
                        onClick={handleMenuToggle}
                        aria-hidden="true"
                        style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
                    />

                    {/* Mobile Menu Panel */}
                    <div
                        className={`
                            absolute top-0 left-0 right-0 
                            bg-white shadow-2xl min-h-screen
                            transition-all duration-500 ease-out
                            ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
                        `}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile menu"
                        style={{ pointerEvents: mobileOpen ? 'auto' : 'none' }}
                    >
                        <div className="flex justify-end p-4 pt-6">
                            <button
                                onClick={handleMenuToggle}
                                className="p-3 rounded-full text-gray-600 hover:bg-gray-100 transition-all duration-300"
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center px-6 pt-8">
                            <div className="w-full max-w-md space-y-2">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className={`
                                            block w-full text-center py-5
                                            transition-all duration-500 ease-out
                                            ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
                                        `}
                                        style={{ transitionDelay: mobileOpen ? `${150 + index * 80}ms` : '0ms' }}
                                    >
                                        <span className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
                                            {link.label}
                                        </span>
                                    </a>
                                ))}

                                <div
                                    className={`
                                        flex justify-center pt-8 transition-all duration-500 ease-out
                                        ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
                                    `}
                                    style={{ transitionDelay: mobileOpen ? `${150 + navLinks.length * 80}ms` : '0ms' }}
                                >
                                    <a
                                        href="#demo"
                                        onClick={handleLinkClick}
                                        className="
                                            inline-flex items-center px-8 py-3
                                            bg-blue-600 hover:bg-blue-700
                                            text-white font-medium text-lg
                                            rounded-full transition-all duration-300
                                            hover:shadow-lg
                                        "
                                    >
                                        Get a Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar