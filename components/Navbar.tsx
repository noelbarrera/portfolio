import Link from "next/link";
import React from "react";
import LinkIcon from "../public/link-arrow.svg.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between text-white mt-12">
      <ul className="flex flex-row">
        <li className="mr-3 hover:underline">
          <Link href="/">About</Link>
        </li>
        <li className="hover:underline">
          <Link href="/">Projects</Link>
        </li>
      </ul>

      <ul className="flex flex-row">
        <li className="mr-3 hover:underline">
          <Link className=" flex flex-row" href="https://github.com/noelbarrera">
            Github
          </Link>
        </li>
        <li className="hover:underline">
          <Link className="flex flex-row" href="https://www.linkedin.com/in/noel-barrera/">
            Linkedin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
