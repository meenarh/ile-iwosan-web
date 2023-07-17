import React from "react";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="max-w-full justify-center">
      <div className="md:py-8 py-4 md:px-10 px-5 flex md:flex-1 flex-col gap-8">
        <h3 className="text-2xl font-bold text-black">
          <span className="text-blue">Ilé</span>-Íwösàń
          <br />
          <p className="text-sm text-grey font-normal mt-2">A web-app that connects you to healtcare.</p>
        </h3>


        <div className="flex flex-1 justify-end gap-20">
          <div className="flex flex-col gap-4">
            <h5 className="text-sm font-medium text-gray">Resources</h5>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="text-sm font-medium text-black">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-black">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-black">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-sm font-medium text-gray">Company</h5>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/about" className="text-sm font-medium text-black">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-black">
                  Careers
                </Link>
              </li>
                <li>
                <Link href="/more" className="text-sm font-medium text-black">
                  Explore
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="text-sm font-medium text-gray">Legal</h5>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#" className="text-sm font-medium text-black">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-black">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
