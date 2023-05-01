import { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const links = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "About",
  },
  {
    id: 3,
    link: "Skills",
  },
  {
    id: 4,
    link: "Work",
  },
  {
    id: 5,
    link: "Contact",
  }
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between  items-center w-full h-20 bg-[#0a192f] fixed text-white px-5">
    {/* title */}
      <h1 className="logo pl-2 font-signature text-3xl font-Title text-cyan-600">Sam</h1>
      {/* nav-items */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li key={id} className="px-4 capitalize cursor-pointer font-medium text-white hover:scale-110">
            {link}
          </li>
        ))}
      </ul>
      {/* hamburger */}
      <div className="cursor-pointer pr-2 z-10 text-white md:hidden" onClick={()=>setToggle(!toggle)}>
          {!toggle ? <FaBars size={25}/> : <FaTimes size={25}/>}
      </div>
      {/* mobile-nav-items */}
      {toggle && (
        <ul className="md:hidden w-full h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-gradient-to-b from-[#0a192f]  to-gray-800 text-white">
        {links.map(({ id, link }) => (
          <li key={id} className="py-6 capitalize cursor-pointer text-4xl text-white hover:scale-110 duration-200">
            {link}
          </li>
        ))}
      </ul>
      )}
      {/* social icons */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a href="/" className="flex mx-4 justify-between items-center w-full text-gray-300 font-bold">LinkedIn <FaLinkedin size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a href="/" className="flex mx-4 justify-between items-center w-full text-gray-300 font-bold">Github <FaGithub size={30}/></a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a href="/" className="flex mx-4 justify-between items-center w-full text-gray-300 font-bold">Facebook <FaFacebook size={30}/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
