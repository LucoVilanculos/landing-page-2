import type { ReactNode } from "react";


import { Header } from "./header";
import { Footer } from "./footer";

type LayoutProps = {
    children: ReactNode;    
};

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header name="DevLuco" />
            <main className="flex-1  bg-gradient-to-br from-blue-600 via-cyan-800 to-sky-800 text-white">
                <div className="p-4 ">
                    {children}
                </div>
            </main>
            <Footer date={new Date()} name="LucoDev" />
        </div>
    );
};
