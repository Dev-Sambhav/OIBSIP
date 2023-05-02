import hero_img from "../assets/hero_logo.png"

const resume = "https://samportfol.netlify.app/sam.pdf"

const Home = () => {
  const handleDownloadResume = (url)=>{
    fetch(url)
    .then(response=>response.blob())
    .then(blob=>{
      const blobUrl = window.URL.createObjectURL(new Blob([blob]))
      const fileName = url.split('/').pop();
      const aTag = document.createElement("a");
      aTag.href = blobUrl;
      aTag.setAttribute("download",fileName);
      document.body.appendChild(aTag);
      aTag.click();
      aTag.remove();
    })
  }
  return (
    <div name="home" className="w-full h-screen flex flex-col md:flex-row justify-around md:items-center px-3 lg:pl-20">
      <div className="left-div mt-10 max-w-[500px] px-2">
        <h1 className="py-3 text-3xl font-[500] text-cyan-600">Hello,</h1>
        <h1 className="py-3 text-4xl sm:text-5xl font-[500]">I'm Sambhav Sharma</h1>
        <h2 className="py-3 text-3xl font-[500] text-green-600 md:mb-5">Full Stack Developer</h2>
        <button className="btn-primary">Hire Me</button>
        <button className="btn-primary mx-5" onClick={()=>handleDownloadResume(resume)}>Get CV</button>
      </div>
      <div className="right-div hidden md:block mt-10 max-w-[500px]">
        <img className="w-96" src={hero_img} alt="logo" />
      </div>
    </div>
  );
};
export default Home;
