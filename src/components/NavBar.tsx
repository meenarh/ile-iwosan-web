import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

type Props = {
  // isLoggedIn: boolean;
};

const NavBar = ({  }: Props) => {
  return (
    <div>
      <nav className="md:py-5 py-2 md:px-20 px-8 flex flex-1">
        <Logo />

        <div className="flex flex-1 justify-end">
          <ul className="flex flex-1 justify-end md:gap-6 gap-2">
            <li className="pt-1">
              <Link
                href="/"
                className="text-sm font-medium text-grey active:text-black"
              >
                Home
              </Link>
            </li>
            <li className="pt-1">
              <Link
                href="#about"
                className="text-sm font-medium text-grey active:text-black"
              >
                About Us
              </Link>
            </li>
            <li className="pt-1">
              <Link
                href="/more"
                className="text-sm font-medium text-grey active:text-black"
              >
                Explore
              </Link>
            </li>
            <li className="pt-1">
              <Link
                href="#"
                className="text-sm font-medium text-grey active:text-black"
              >
                Contact Us
              </Link>
            </li>
            {/* <li>
              {isLoggedIn ? (
                <Link href="/profile">
                  <a className="bg-blue py-2 px-8 rounded-lg text-white m-auto">
                    Profile
                  </a>
                </Link>
              ) : (
                <button className="bg-blue py-2 px-8 rounded-lg text-white m-auto">
                  <Link href="/login">Get Started</Link>
                </button>
              )}
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
