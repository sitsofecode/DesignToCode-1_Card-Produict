import { useState } from "react";
import productImg from "./assets/image produit.svg";

import "./App.css";

function App() {
  const count = [0, 1, 2, 3, 4];
  const [selectedStar, setSelectedStar] = useState(2);
  const [fav, setFav] = useState(false);
  return (
    <div className=" bg-gradient-to-r from-blue-800 from-10% via-indigo-500 via-30% to-blue-950 to-90% h-screen flex items-center justify-center">
      <div className="bg-white p-7 rounded-lg flex items-stretch space-x-5  ">
        <div className="h-fit">
          <img src={productImg} className="h-fit" />
        </div>
        <div className="">
          <div className="flex justify-between items-center   ">
            <h1 className="bg-[#020712] text-lg rounded-full  p-2 px-4 text-white ">
              FitLife
            </h1>
            <p className="text-gray-400 font-light">XV-383923810</p>
          </div>
          <h1 className=" text-4xl mt-4 text-[#020712] font-bold  text-left w-96">
            Montre Connectée FitLife Pro 5+
          </h1>
          <div className="flex space-x-5  items-center mt-2">
            <span className="flex">
              {count.map((item, index) => (
                <Stars
                  key={index}
                  fill={selectedStar >= index ? "#EDCF5D" : "none"}
                  onClick={() => setSelectedStar(index)}
                />
              ))}
            </span>
            <span className="text-gray-400"> 43 notes </span>
          </div>
          <div className="mt-6">
            <p className="line-through  text-gray-400"> 183,99 € </p>
            <h1 className="text-4xl font-bold text-[#020712]">149,99 €</h1>
          </div>
          <div className="flex space-x-5 items-center mt-5">
            <button className="bg-[#477AEB] w-full p-4 px-5 rounded-lg text-white font-semibold">
              Ajouter au panier
            </button>
            <button
              className="bg-[#477AEB]/20  p-4  rounded-lg text-white font-semibold"
              onClick={() => {
                setFav((prev) => !prev);
              }}
            >
              <Heart fill={fav ? "#477AEB" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const Stars = ({ fill = "none", onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.23927 1.15462C6.26337 1.1082 6.3006 1.06912 6.34676 1.0418C6.39291 1.01448 6.44616 1 6.50049 1C6.55482 1 6.60807 1.01448 6.65423 1.0418C6.70039 1.06912 6.73762 1.1082 6.76172 1.15462L8.0321 3.60795C8.11579 3.76942 8.23933 3.90912 8.39212 4.01506C8.5449 4.121 8.72236 4.19001 8.90928 4.21617L11.7503 4.61256C11.8042 4.61999 11.8547 4.64164 11.8963 4.67506C11.9379 4.70847 11.9689 4.75232 11.9857 4.80163C12.0025 4.85095 12.0045 4.90377 11.9915 4.95412C11.9785 5.00447 11.951 5.05035 11.912 5.08655L9.85739 6.99405C9.72189 7.11994 9.62051 7.27534 9.56198 7.44688C9.50344 7.61841 9.48951 7.80093 9.52137 7.97874L10.0064 10.6738C10.0159 10.7251 10.0101 10.7779 9.98965 10.8262C9.96919 10.8745 9.93489 10.9163 9.89069 10.947C9.84648 10.9776 9.79413 10.9957 9.73963 10.9993C9.68512 11.0029 9.63064 10.9919 9.58242 10.9674L7.04274 9.69434C6.8754 9.61056 6.68923 9.56679 6.50022 9.56679C6.31121 9.56679 6.12503 9.61056 5.95769 9.69434L3.41857 10.9674C3.37036 10.9917 3.31595 11.0027 3.26153 10.999C3.20712 10.9953 3.15488 10.9771 3.11076 10.9465C3.06664 10.916 3.03241 10.8742 3.01197 10.8259C2.99152 10.7777 2.98568 10.725 2.99511 10.6738L3.47962 7.97926C3.51162 7.80137 3.49776 7.61873 3.43922 7.44709C3.38068 7.27545 3.27922 7.11997 3.1436 6.99405L1.08898 5.08707C1.04971 5.05091 1.02188 5.00496 1.00867 4.95446C0.995453 4.90395 0.99738 4.85093 1.01423 4.80142C1.03108 4.7519 1.06218 4.7079 1.10398 4.67442C1.14578 4.64094 1.19661 4.61932 1.25067 4.61203L4.09116 4.21617C4.27829 4.19021 4.45599 4.12129 4.60899 4.01534C4.76198 3.90939 4.88568 3.76958 4.96943 3.60795L6.23927 1.15462Z"
        stroke="#EDCF5D"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Heart = ({ fill = "none", onClick }) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z"
        stroke="#477AEB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default App;
