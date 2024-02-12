"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeSharp, IoLogInSharp, IoLogOutSharp } from "react-icons/io5";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;
  const pathname = usePathname()

  return (
    <header className="border-b border-gray-200">
      <nav className="flex justify-between text-lg font-medium text-center">
        <span>
          <Link href="/" className={`text-lg ${pathname === '/' ? "text-blue-600 border-blue-600" : "border-transparent"} inline-flex items-center justify-center p-3 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 group`}>
            <IoHomeSharp className={`${pathname === '/' ? "text-blue-600" : "text-gray-400"} w-5 h-5 me-2 group-hover:text-gray-500`}/>
            Home
          </Link>
        </span>

        <span>
          {!user && (
            <Link href="/sign-in" className="text-lg inline-flex items-center justify-center p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group">
              <IoLogInSharp className="w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500"/>
              Login
            </Link>
          )}

          {user && (
            <>
              <Link href="/user-profile" className={`text-lg ${pathname === '/profile' ? "text-blue-600 border-blue-600" : "border-transparent"} inline-flex items-center justify-center p-3 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 group`}>
                <svg className={`${pathname === '/profile' ? "text-blue-600" : "text-gray-400"} w-5 h-5 me-2 group-hover:text-gray-500`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                {user.name}
              </Link>

              <button onClick={() => signOut()} className="cursor-pointer text-lg inline-flex items-center justify-center p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group">
                <IoLogOutSharp className="w-5 h-5 me-2 text-gray-400 group-hover:text-gray-500"/>
                Logout
              </button>          
            </>
          )}
        </span>
      </nav>
    </header>

  );
};

export default Header;
