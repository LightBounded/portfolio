import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MenuIcon from "./MenuIcon";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollY - scrollY > 0 ? setShowNav(false) : setShowNav(true);
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav
        className={`fixed z-10 flex w-full items-center overflow-hidden px-8 transition-all ease-in-out
        ${
          showNav && scrollY != 0
            ? "h-16 shadow-md backdrop-blur"
            : `${
                scrollY == 0
                  ? "h-24 shadow-none backdrop-blur-0"
                  : "h-0 shadow-none backdrop-blur"
              }`
        }`}
      >
        <div className="flex-1 text-2xl font-bold">Caleb Rivera</div>
        <ul className="hidden items-center md:flex">
          <li className="px-4">
            <a href="#about">About</a>
          </li>
          <li className="px-4">
            <a href="#projects">Projects</a>
          </li>
          <li className="mr-4 px-4">
            <a href="#contact">Contact</a>
          </li>
          <li className="px-2">
            <Link href="https://github.com/LightBounded">
              <a target="_blank">
                <FaGithub className="text-xl" />
              </a>
            </Link>
          </li>
          <li className="px-2">
            <Link href="https://www.linkedin.com/in/caleb-rivera-405658234/">
              <a target="_blank">
                <FaLinkedin className="text-xl" />
              </a>
            </Link>
          </li>
        </ul>
        <button className="md:hidden" onClick={() => setShowMobileNav(true)}>
          <MenuIcon />
        </button>
      </nav>
      <MobileSidebar
        show={showMobileNav}
        close={() => setShowMobileNav(false)}
      />
    </>
  );
};

export default Navbar;
