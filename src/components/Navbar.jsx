import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        logOut();
    };

    return (
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="text-3xl font-bold text-sky-600 hover:scale-110 transform">
                    CoolShop
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-sky-600 transition">Home</Link>
                    <Link to="/addProduct" className="hover:text-sky-600 transition">Add Product</Link>
                    {user?.email ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Avatar className="cursor-pointer">
                                    <AvatarFallback>{user.email[0].toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem disabled>{user.email}</DropdownMenuItem>
                                <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Button asChild className="hover:scale-110 transform">
                            <Link to="/login">Login</Link>
                        </Button>
                    )}
                </nav>

                {/* Mobile Hamburger */}
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-64 pt-10">
                        <nav className="space-y-4 text-lg font-medium text-gray-700">
                            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                            <Link to="/addProduct" onClick={() => setOpen(false)}>Add Product</Link>
                            {user?.email ? (
                                <>
                                    <div className="text-sm text-gray-500">{user.email}</div>
                                    <Button variant="outline" onClick={() => { handleLogOut(); setOpen(false); }}>
                                        Log out
                                    </Button>
                                </>
                            ) : (
                                <Button asChild variant="default" onClick={() => setOpen(false)}>
                                    <Link to="/login">Login</Link>
                                </Button>
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Navbar;