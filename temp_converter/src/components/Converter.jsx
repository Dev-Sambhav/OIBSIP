import { useState } from "react";
const Converter = () => {
  const [degree, setDegree] = useState(0);
  const [result, setResult] = useState("");
  const [type, setType] = useState("Celsius");

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === "Fahrenheit") {
      let res = (degree - 32) * (5 / 9);
      res = res.toFixed(4);
      let text = res.toString() + " ºC";
      setResult(text);
    }
    if (type === "Celsius") {
      let res = degree * (9 / 5) + 32;
      res = res.toFixed(4);
      let text = res.toString() + " ºF";
      setResult(text);
    }
  };

  return (
    <div className="bg-gray-800 text-white p-7 md:p-10 rounded-lg">
      <h1 className="font-[600] text-center text-3xl pb-3">
        Temperature Converter
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="font-semibold box grid grid-cols-1 sm:grid-cols-2 gap-7 w-full p-18">
          <div className="item flex flex-col">
            <label className="p-2 text-gray-200">Degrees</label>
            <input
              onChange={(e) => setDegree(e.target.value)}
              value={degree}
              className="p-2 rounded-sm text-black"
              type="number"
            />
          </div>
          <div className="item flex flex-col">
            <label className="p-2 text-gray-200">Type</label>
            <select
              onChange={handleChange}
              className="p-2 rounded-sm text-black"
              defaultValue={"Celsius"}
            >
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
            </select>
          </div>
          <div className="item flex flex-col">
            <label className="p-2 text-gray-200">Result</label>
            <input
              value={result}
              readOnly
              className="p-2 rounded-sm text-black"
              type="text"
            />
          </div>
          <button className="text-3xl rounded-md font-bold bg-green-500 p-2 py-4 hover:bg-white hover:text-green-500 duration-300 tracking-wide">
            CONVERT
          </button>
        </div>
      </form>
    </div>
  );
};
export default Converter;
