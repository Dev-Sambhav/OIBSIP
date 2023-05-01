import about_logo from "../assets/about.png";
const About = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-around md:items-center px-3 lg:pl-20 pt-10">
      <div className="left max-w-[500px] px-5 hidden md:block">
        <img className="w-11/12" src={about_logo} alt="about_logo" />
      </div>
      <div className="right max-w-[500px] px-5">
        <h1 className="text-4xl font-[700] tracking-wide py-1">LET'S</h1>
        <h1 className="text-4xl font-[700] tracking-wide py-1">INTRODUCE ABOUT</h1>
        <h1 className="text-4xl font-[700] tracking-wide py-1">MYSELF</h1>
        <p className="my-5 text-[#777777]">
          Whose given. Were gathered. There first subdue greater. Bearing you
          Whales heaven midst their. Beast creepeth. Fish days.
        </p>
        <p className="my-5 text-[#777777]">
          Is give may shall likeness made yielding spirit a itself together
          created after sea is in beast beginning signs open god you're
          gathering whose gathered cattle let. Creature whales fruit unto meat
          the life beginning all in under give two.
        </p>
        <button className="btn-primary">Download CV</button>
      </div>
    </div>
  );
};
export default About;
