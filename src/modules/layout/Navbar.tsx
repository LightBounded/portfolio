import MenuIcon from "./MenuIcon";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-8 container max-w-screen-2xl mx-auto">
      <div className="text-2xl">Caleb Rivera</div>
      <ul className="gap-8 hidden md:flex">
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <button className="md:hidden">
        <MenuIcon />
      </button>
    </nav>
  );
};

export default Navbar;
