import {HiArrowNarrowRight} from "react-icons/hi"

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-cyan-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Sambhav Sharma</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nam repellendus error nostrum magnam qui nisi eum temporibus tempore quia eaque fugit inventore et quam eligendi modi, illum nobis sed?</p>
        <div>
          <button className="flex rounded-md group items-center border-2 text-white px-6 py-3 my-2 hover:bg-pink-600 duration-300 hover:border-pink-600">View Work <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight className="ml-3"/></span> </button>
        </div>
      </div>
    </div>
  )
}
export default Home