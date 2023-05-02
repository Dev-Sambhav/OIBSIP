import web from "../assets/web.png";
import ui from "../assets/ui.png";
import seo from "../assets/seo.png";
import arrow from "../assets/arrow.png";

const Service = () => {
  return (
    <div name="service" className="w-full min-h-screen px-3 lg:pl-20 py-16 pt-28">
      <h1 className="px-5 text-center mb-2 text-4xl font-[600] tracking-wide">
        Service
      </h1>
      <div className="max-w-[700px] text-[#777777] mb-8 px-2 text-center mx-auto">
        Is give may shall likeness made yielding spirit a itself togeth created
        after sea is in beast beginning signs open god you're gathering ithe
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 gap-8 lg:mt-10">
        <div className="item w-full text-center hover:shadow-xl duration-300 p-8 hover:bg-[#F8F8FF] rounded-lg">
          <img className="mx-auto" src={web} alt="web_logo" />
          <h2 className="font-[500] text-xl py-3 ">Web Developing</h2>
          <p className="text-[#777777] py-2">
            Creeping for female light years that lesser can't evening heaven
            isn't bearing tree
          </p>
        </div>
        <div className="item w-full text-center hover:shadow-xl duration-300 p-8 hover:bg-[#F8F8FF] rounded-lg">
          <img className="mx-auto" src={ui} alt="web_logo" />
          <h2 className="font-[500] text-xl py-3 ">UI/UX Design</h2>
          <p className="text-[#777777] py-2">
            Creeping for female light years that lesser can't evening heaven
            isn't bearing tree
          </p>
        </div>
        <div className="item w-full text-center hover:shadow-xl duration-300 p-8 hover:bg-[#F8F8FF] rounded-lg">
          <img className="mx-auto" src={arrow} alt="web_logo" />
          <h2 className="font-[500] text-xl py-3 ">Web Design</h2>
          <p className="text-[#777777] py-2">
            Creeping for female light years that lesser can't evening heaven
            isn't bearing tree
          </p>
        </div>
        <div className="item w-full text-center hover:shadow-xl duration-300 p-8 hover:bg-[#F8F8FF] rounded-lg">
          <img className="mx-auto" src={seo} alt="web_logo" />
          <h2 className="font-[500] text-xl py-3 ">SEO Optimize</h2>
          <p className="text-[#777777] py-2">
            Creeping for female light years that lesser can't evening heaven
            isn't bearing tree
          </p>
        </div>
      </div>
    </div>
  );
};
export default Service;
