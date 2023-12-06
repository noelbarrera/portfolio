import Link from "next/link";
import React from "react";
import LinkIcon from "../public/link-arrow.svg.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between text-white mt-11">
      <ul className="flex flex-row">
        <li className="mr-2">
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
      </ul>

      <ul className="flex flex-row">
        <li className="mr-2">
          <Link className=" flex flex-row" href="/">
            Github
            <svg
              className="fill-current text-white self-center"
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
            </svg>
          </Link>
        </li>
        <li>
          <Link className="flex flex-row" href="www.linkedin.com/in/noel-barrera" passHref={true}>
            Linkedin
            <svg
              className="fill-current text-white self-center"
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
