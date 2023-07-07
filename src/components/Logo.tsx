import React from "react";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <h3 className="text-2xl font-bold text-black">
      <Link href='/'>
      <span className="text-blue">Ilé</span>-Íwösàń
      </Link>
    </h3>
  );
};

export default Logo;
