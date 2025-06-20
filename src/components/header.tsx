import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HouseIcon, FolderIcon, ContactIcon, BookIcon, CodeIcon, MenuIcon, XIcon } from 'lucide-react';

import type { HeaderProps } from '../types/headerprops';

const navItems = [
    { name: 'Home', path: '/', icon: <HouseIcon size={24} /> },
    { name: 'About', path: '/about', icon: <FolderIcon size={24} /> },
    { name: 'Contact', path: '/contact', icon: <ContactIcon size={24} /> },
    { name: 'Resume', path: '/resume', icon: <BookIcon size={24} /> },
    { name: 'Projects', path: '/projects', icon: <CodeIcon size={24} /> }
];

export const Header = (props: HeaderProps) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 h-15 text-white p-4 flex justify-between items-center relative">
            <h3 className="text-md font-medium text-blue-600">{props.name}</h3>
            
            {/* Navegação desktop */}
            <nav className="hidden sm:flex h-14 text-2xl gap-3 space-x-4">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center space-x-2 ${location.pathname === item.path ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
                    >
                        
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* Botão menu mobile */}
            <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>

            {/* Navegação mobile */}
            {isOpen && (
                <div className="absolute top-13 left-0 w-full bg-gray-800 p-4 rounded shadow-lg sm:hidden z-50">
                    <nav className="flex flex-col justify-center items-center gap-3 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center space-x-2 ${location.pathname === item.path ? 'text-blue-400' : 'text-white hover:text-blue-400'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}