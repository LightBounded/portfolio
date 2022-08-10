import { useCallback, useEffect, useState } from "react";
import { GitHub, Linkedin, Menu } from "react-feather";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    window.scrollY - scrollY > 0 ? setShow(false) : setShow(true);
    setScrollY(window.scrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`fixed flex w-full items-center justify-between px-8 backdrop-blur transition-all ease-in-out
        ${
          show && scrollY != 0
            ? "h-16 shadow-md"
            : `${scrollY == 0 ? "h-24 shadow-none" : "h-0 shadow-none"}`
        } overflow-hidden`}
    >
      <div className="text-2xl">Caleb Rivera</div>
      <ul className="hidden items-center gap-8 md:flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>Contact</li>
        <li>
          <GitHub height={20} />
        </li>
        <li>
          <Linkedin height={20} />
        </li>
      </ul>
      <button className="md:hidden">
        <Menu />
      </button>
    </nav>
  );
};

export default Navbar;
