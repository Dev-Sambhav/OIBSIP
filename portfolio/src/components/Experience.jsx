import html from "../assets/html.png";
import js from "../assets/javascript.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import firebase from "../assets/firebase.png";
import mongodb from "../assets/mongo.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
  return (
    <div name="experience" className="w-full min-h-screen px-3 lg:pl-20 py-16 pt-28">
        <h1 className="px-5 text-center mb-7 text-4xl font-[600] tracking-wide ">Experience</h1>
        <div className="exp-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 place-items-center pt-7">
          <div className="item w-full text-center hover:shadow-md duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={html} alt="" />
            <h2 className="font-[500] text-xl py-2 ">HTML</h2>
          </div>
          <div className="item w-full text-center hover:shadow-lg duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={css} alt="" />
            <h2 className="font-[500] text-xl py-2 ">CSS</h2>
          </div>
          <div className="item w-full text-center hover:shadow-lg duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={js} alt="" />
            <h2 className="font-[500] text-xl py-2 ">JavaScript</h2>
          </div>
          <div className="item w-full text-center hover:shadow-lg duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={react} alt="" />
            <h2 className="font-[500] text-xl py-2 ">React</h2>
          </div>
          <div className="item w-full text-center hover:shadow-lg duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={github} alt="" />
            <h2 className="font-[500] text-xl py-2 ">Github</h2>
          </div>
          <div className="item w-full text-center hover:shadow-lg duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={firebase} alt="" />
            <h2 className="font-[500] text-xl py-2 ">Firebase</h2>
          </div>
          <div className="item w-full text-center hover:shadow-lg duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={mongodb} alt="" />
            <h2 className="font-[500] text-xl py-2 ">MongoDB</h2>
          </div>
          <div className="item w-full text-center hover:shadow-lg duration-300 p-5 hover:bg-[#F8F8FF] rounded-lg">
            <img className="w-32 mx-auto" src={tailwind} alt="" />
            <h2 className="font-[500] text-xl py-2 ">Tailwind</h2>
          </div>
        </div>
      </div>
  );
};
export default Experience;
