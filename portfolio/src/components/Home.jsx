import hero_img from "../assets/hero_logo.png"

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row justify-around md:items-center px-3 lg:pl-20">
      <div className="left-div mt-10 max-w-[500px] px-5">
        <h1 className="py-3 text-3xl font-[500] text-cyan-600">Hello,</h1>
        <h1 className="py-3 text-4xl sm:text-5xl font-[500]">I'm Sambhav Sharma</h1>
        <h2 className="py-3 text-3xl font-[500] text-green-600 md:mb-5">Full Stack Developer</h2>
        <button className="btn-primary">Hire Me</button>
        <button className="btn-primary mx-5">Get CV</button>
      </div>
      <div className="right-div hidden md:block mt-10 max-w-[500px]">
        <img className="w-96" src={hero_img} alt="logo" />
      </div>
    </div>
  );
};
export default Home;
