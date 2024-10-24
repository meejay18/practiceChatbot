import { MdSearch } from "react-icons/md";
import pix from "../assets/EnvatoLogoLight-b794a434513b3b975d91.jpeg";

const Header = () => {
  return (
    <div>
      <div className="bg-neutral-950  w-full h-[80px] text-white flex justify-center items-center ">
        <div className="w-[95%] h-[100%]   flex items-center ">
          <div className="w-[15%] h-full  flex items-center">
            <img className="w-[150px] " src={pix} alt="#" />
          </div>
          <div className="w-[40%] h-[50px] border-white-600 bg-[#383838]  ml-4 border rounded-[40px] flex items-center  ">
            <div className="w-[15%] h-[60%] text-[16px] ml-3 flex items-center">
              All Items
            </div>
            <div className="bg-gray-400 p-[1px] ml-2 h-[50%] " />
            <div className="w-[30px] ml-[10px] justify-center text-[25px] h-[50%]  flex items-center">
              {" "}
              <MdSearch />
            </div>
            <div className="w-[300px] h-[50%] border-none text-[15px] ml-2  flex items-center">
              <input
                className="bg-[#383838] pr-[120px] p-[8px] text-white outline-none "
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
          <div className="w-[500px] ml-7 h-full  flex items-center gap-9 text-[16px] text-gray-300">
            <div className="cursor-pointer hover:text-white">License</div>
            <div className="cursor-pointer hover:text-white">Pricing</div>
            <div className="border rounded-[4px] text-[15px] font-semibold  py-2 px-4 bg-green-400 text-black hover:bg-green-700 cursor-pointer outline-none transition-all delay-70 border-none">
              Get unlimited downloads
            </div>
            <div className="cursor-pointer hover:text-white">Sign in</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
