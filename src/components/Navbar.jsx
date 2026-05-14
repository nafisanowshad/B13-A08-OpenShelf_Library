"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { MdMenuBook } from "react-icons/md";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";


const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async() => {
    await authClient.signOut();
  }

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const activeStyle =
    "bg-[#37353E] text-[#D4D9D7] px-4 py-2 rounded-md transition-all";
  const inactiveStyle =
    "text-[#37353E] px-4 py-2 hover:opacity-70 transition-all";

  return (
    <div className="sticky top-0 z-50 w-full border-b border-black/5 bg-[#D4D9D7]/90 backdrop-blur-md  shadow-sm px-4">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-2 text-primary mb-2">
          <MdMenuBook size={32} />
          <span className="text-2xl text-[#37353E] font-bold tracking-wide">
            OpenShelf
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center text-[#695D5E] gap-8 text-sm font-medium">
          <li
            className={`${pathname === "/" ? "text-[#37353E] font-bold" : ""} hover:text-[#37353E] transition-colors`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`${pathname === "/all-books" ? "text-[#37353E] font-bold" : ""} hover:text-[#37353E] transition-colors`}
          >
            <Link href={"/all-books"}>All Books</Link>
          </li>
          <li
            className={`${pathname === "/profile" ? "text-[#37353E] font-bold" : ""} hover:text-[#37353E] transition-colors`}
          >
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        {/* Desktop Auth Links (Toggle Highlight) */}
        {!user && (
          <div className="hidden md:flex items-center gap-2 text-sm font-bold">
            <Link
              href={"/signup"}
              className={pathname === "/signup" ? activeStyle : inactiveStyle}
            >
              SignUp
            </Link>
            <Link
              href={"/signin"}
              className={pathname === "/signin" ? activeStyle : inactiveStyle}
            >
              SignIn
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#37353E]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden absolute top-full right-0 bg-[#D4D9D7] border-b border-black/5 p-5 shadow-xl">
          <ul className="flex flex-col gap-4 text-[#695D5E] font-medium">
            <li>
              <Link href={"/"} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"/all-books"} onClick={() => setIsOpen(false)}>
                All Books
              </Link>
            </li>
            <li>
              <Link href={"/profile"} onClick={() => setIsOpen(false)}>
                My Profile
              </Link>
            </li>
            <hr className="border-black/5" />
            {!user && (
              <div className="flex flex-col gap-2">
                <Link
                  href={"/signup"}
                  onClick={() => setIsOpen(false)}
                  className={
                    pathname === "/signup"
                      ? "bg-[#37353E] text-[#D4D9D7] p-2 rounded"
                      : "p-3"
                  }
                >
                  SignUp
                </Link>
                <Link
                  href={"/signin"}
                  onClick={() => setIsOpen(false)}
                  className={
                    pathname === "/signin"
                      ? "bg-[#37353E] text-[#D4D9D7] p-2 rounded"
                      : "p-3"
                  }
                >
                  SignIn
                </Link>
              </div>
            )}
          </ul>
          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image alt="John Doe" src={user?.image}
                referrerPolicy="no-referrer" />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
