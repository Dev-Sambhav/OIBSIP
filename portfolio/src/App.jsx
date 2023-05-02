import { Navbar, Home, About, Experience, Service, Contact } from "./components"

const App = () => {
  return (
    <div className="bg-[#E5F0FA] font-Rubik">
      <Navbar/>
      <Home/>
      <About/>
      <Experience />
      <Service />
      <Contact/>
    </div>
  )
}
export default App