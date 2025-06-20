import type { FooterProps } from "../types/footerprops";

export const Footer = (props: FooterProps) => {
    return (
        <footer className="bg-gray-800 text-white h-14 text-center flex justify-between p-4 ">
            <p>&copy; {props.date.getFullYear()} {props.name}. All rights reserved.</p>
        </footer>
    );
} 