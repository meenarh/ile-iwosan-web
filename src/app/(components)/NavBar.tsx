import Link from "next/link";
import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div>
      <nav className="md:py-5 py-2 md:px-20 px-10 flex flex-1">
        <h3 className="text-2xl font-bold text-black">
          <span className="text-blue">Ilé</span>-Íwösàń
        </h3>

        <div className="flex flex-1 justify-end">
          <ul className="flex flex-1 justify-end gap-6">
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
                href="/about"
                className="text-sm font-medium text-grey active:text-black"
              >
                About Us
              </Link>
            </li>
            <li className="pt-1">
              <Link
                href="/explore"
                className="text-sm font-medium text-grey active:text-black"
              >
                Explore
              </Link>
            </li>
            <li className="pt-1">
              <Link
                href="/contact"
                className="text-sm font-medium text-grey active:text-black"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="bg-blue py-2 px-8 rounded-lg text-white m-auto">
                <Link href='/login'>Get Started</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
