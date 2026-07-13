import { Link } from "@inertiajs/react";
import { Menu, Moon, Sun } from "lucide-react";
import Logo from "./Logo";

type Props = {
    dark?: boolean;
    onDarkToggle?: () => void;
    onMobileMenu?: () => void;
};

export default function Navbar({
    dark = false,
    onDarkToggle = () => {},
    onMobileMenu = () => {},
}: Props) {
    return (
        <nav className="sticky top-0 z-30 bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                <Logo className="w-36" />

                <div className="hidden md:flex items-center gap-8">

                    <Link href="/" className="font-medium hover:text-green-600">
                        Home
                    </Link>

                    <Link href="/about" className="font-medium hover:text-green-600">
                        Tentang
                    </Link>

                    <Link href="/login">
                        <button className="px-4 py-2 border rounded-lg">
                            Login
                        </button>
                    </Link>

                    <Link href="/register">
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                            Register
                        </button>
                    </Link>

                    <button onClick={onDarkToggle}>
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                </div>

                <button
                    className="md:hidden"
                    onClick={onMobileMenu}
                >
                    <Menu />
                </button>

            </div>
        </nav>
    );
}