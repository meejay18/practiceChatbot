import axios from "axios";
import { useEffect, useState } from "react";
import { FaRobot, FaSpinner } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import { MdArrowDownward, MdClose, MdPerson, MdRefresh } from "react-icons/md";
import img from "../assets/sound-effects-cover_346w-7434cf0c2f0a53095ca2.jpeg";
import img2 from "../assets/graphic-templates-cover_373w-8aa5a2510f51c0507517.jpeg";
import img3 from "../assets/music-cover_746w-0c7810a5ab3340e690a2.jpeg";
import { PiArrowFatLineDownFill } from "react-icons/pi";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { SlBadge } from "react-icons/sl";
import pix2 from "../assets/photos-cover_746w-0c536314f530377c5e97.jpeg";
import a from "../assets/black and yellow.jpg";
import b from "../assets/colorpic.jpg";
import c from "../assets/helipic.jpg";
import logo1 from "../assets/Adobe-removebg-preview.png";
import logo2 from "../assets/google-removebg-preview.png";
import logo3 from "../assets/microsoft.png";
import logo4 from "../assets/netflix-removebg-preview.png";
import logo5 from "../assets/nike-removebg-preview.png";

interface iChat {
  id: string;
  message: string;
  user: string;
  createdAt: Date;
}

const HomeScreen = () => {
  const imgdata = [
    {
      id: 1,
      title: "Stock Videos",
      numberOfusers: "6.8M+",
      img: <img src={pix2} alt="#" />,
    },
    {
      id: 2,
      title: "Video Templates",
      numberOfusers: "120,000+",
      img: <img src={img} alt="#" />,
    },
    {
      id: 3,
      title: "Stock Photos",
      numberOfusers: "11.2M+",
      img: <img src={img3} alt="#" />,
    },
    {
      id: 4,
      title: "Royalty-Free Music",
      numberOfusers: "210,000+",
      img: <img src={img2} alt="#" />,
    },
  ];

  const imgData2 = [
    {
      id: 1,
      title: "Sound Effects",
      numberOfusers: "210,000+",
      img: <img src={a} alt="#" />,
    },
    {
      id: 2,
      title: "Graphic Templates",
      numberOfusers: "210,000+",
      img: <img src={b} alt="#" />,
    },
    {
      id: 3,
      title: "Fonts",
      numberOfusers: "56,000+",
      img: <img src={c} alt="#" />,
    },
    {
      id: 4,
      title: "  Graphics",
      numberOfusers: "210,000+",
      img: <img src={img3} alt="#" />,
    },
  ];
  const [toggle, setToggle] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [text, setText] = useState<string>("");
  const [data, setData] = useState<Array<iChat | []>>(
    JSON.parse(localStorage.getItem("chat")!) || []
  );

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const chat: iChat = {
      id: Math.random().toString(36).substr(2, 9),
      message: text,
      user: "user",
      createdAt: new Date(),
    };

    localStorage.setItem("chat", JSON.stringify([...data, chat]));

    const options = {
      method: "POST",
      url: "https://infinite-gpt.p.rapidapi.com/infinite-gpt",
      headers: {
        "x-rapidapi-key": "8197a853d0msh4810c37149916d5p1ae27fjsnd9d64dc2921c",
        "x-rapidapi-host": "infinite-gpt.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      data: {
        query: text,
        sysMsg: text,
      },
    };

    setText("");
    try {
      const response = await axios.request(options);

      let botChat = {
        id: Math.random().toString(36).substr(2, 9),
        message: response?.data?.msg,
        user: "bot",
        createdAt: new Date(),
      };

      let result = JSON.parse(localStorage.getItem("chat")!);
      localStorage.setItem("chat", JSON.stringify([...result, botChat]));
      setData([...result, botChat]);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {}, [data]);

  return (
    <div className="flex justify-center items-center flex-col w-full max-h-[90rem] bg-[#FFF5ED] relative  ">
      <div className="min-h-[400px] flex gap-[30px] w-[95vw] bg-[#FFF5ED]  m-2 border rounded-md p-2 ">
        <div className="w-[800px] h-[300px] border rounded-md  mt-[25px]">
          <img className="w-[100%] h-[100%]" src={img3} alt="" />
        </div>
        <div className="w-[350px] h-[350px] border rounded-md bg-white flex items-center justify-center">
          <div className="w-[90%] h-[90%]  p-3">
            <div className="font-medium">From</div>
            <div className="text-[30px] font-semibold">$16.50/Month</div>
            <div className="text-gray-400">Cancel any time</div>
            <div className="mt-2 items-center mb-2  flex  gap-[10px]">
              {" "}
              <PiArrowFatLineDownFill />
              Unlimited downloads
            </div>
            <div className="flex items-center mb-2 gap-2">
              <span>
                <SlBadge />
              </span>
              20+ million premium assets
            </div>
            <div className="flex items-center mb-2 gap-2">
              {" "}
              <span>
                <HiMiniCheckBadge />
              </span>
              Lifetime commercial license
            </div>
            <div className="flex justify-center items-center mt-5">
              <button className="py-2 bg-green-400 font-medium outline-none border-none hover:bg-green-500  px-4 border rounded-[5px]">
                Get unlimited downloads
              </button>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 m-2 ">
          {toggle ? (
            <div className="rounded-full p-2 text-[35px] bg-stone-100 cursor-pointer">
              <div className=" mb-[2px] ml-[1px]">
                <FaRobot onClick={() => setToggle(!toggle)} />
              </div>
            </div>
          ) : (
            <div className=" sm:w-[450px] md:w-[450px] lg:w-[450px] bg-white  h-[500px] border rounded-md overflow-hidden flex flex-col">
              <div className="h-[60px] bg-neutral-950 w-full text-white flex justify-end items-center px-2 text-[30px] gap-4 ">
                <MdRefresh
                  className="cursor-pointer"
                  onClick={() => {
                    localStorage.removeItem("chat");
                    window.location.reload();
                  }}
                />

                <MdClose
                  className="cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>

              <div className="h-[495px] overflow-auto p-2 rounded-md">
                <div className="text-[12px]">
                  {JSON.parse(localStorage.getItem("chat")!)?.map(
                    (props: iChat) => (
                      <div key={props?.id}>
                        {props.user === "user" ? (
                          <div className="flex flex-col my-2 p-2 bg-green-50 rounded-md ">
                            <div className="flex justify-end items-center mb-2">
                              <MdPerson className="text-[30px] mr-[5px]" />
                              <span>You</span>
                            </div>
                            <div>
                              <div>{props?.message}</div>
                            </div>{" "}
                          </div>
                        ) : (
                          <div className="rounded-md font-[300] italic flex flex-col mb-2 p-2 bg-red-50">
                            <div className="flex items-center mb-2">
                              <FaRobot className="text-[30px] mr-[5px]" />
                              <span>Chatbot</span>
                            </div>
                            <div>
                              <div>{props?.message}</div>
                            </div>{" "}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex-1" />

              <form
                onSubmit={handleSubmit}
                className="m-2 border rounded-md h-[45px] flex items-center"
              >
                {loading ? (
                  <div className="pl-2 flex gap-2 items-center w-full">
                    {" "}
                    <FaSpinner className="animate-spin" /> Loading...{" "}
                    <div className="flex-1" />
                  </div>
                ) : (
                  <input
                    placeholder="type your search"
                    className="h-[96%] w-[90%] outline-none bg-transparent pl-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                )}
                <IoSendSharp className="text-[30px] text-slate-400" />
                <button
                  type="submit"
                  className="hidden w-[150px] text-[12px] text-white bg-blue-500 rounded-md cursor-pointer"
                  onClick={() => {}}
                />
              </form>
            </div>
          )}
        </div>
      </div>

      <div className="w-[90vw] h-[800px] flex flex-col  gap-4 justify-center ">
        <div className="flex gap-2 ">
          {imgdata.map((el) => (
            <div className="w-[281px] bg-white  flex justify-center items-center h-[370px]  border rounded-[20px]">
              <div className="w-[90%] h-[90%] ">
                <div className="text-[25px] font-medium">{el.title}</div>
                <div>{el.numberOfusers}</div>
                <div className="w-[100%] h-[200px] mt-3 object-contain border rounded-[20px]">
                  {el.img}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 ">
          {imgData2.map((el) => (
            <div className="w-[281px] bg-white  flex justify-center items-center h-[370px]  border rounded-[20px]">
              <div className="w-[90%] h-[90%] ">
                <div className="text-[25px] font-medium">{el.title}</div>
                <div>{el.numberOfusers}</div>
                <div className="w-[100%] h-[200px] mt-3 object-contain border rounded-[20px]">
                  {el.img}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90vw] h-[15rem] mt-[80px]">
        <div className="w-[full] h-[40%]  flex items-end justify-center">
          <h2 className="text-[33px] font-medium">Trusted by top brands</h2>
        </div>
        <div className="flex justify-center items-center p-4 ">
          <div className="w-[700px] h-[100px]  flex items-center gap-3">
            <div>
              <img src={logo1} alt="" />
            </div>
            <div>
              <img src={logo2} alt="" />
            </div>
            <div>
              <img src={logo3} alt="" />
            </div>
            <div>
              <img src={logo4} alt="" />
            </div>
            <div>
              <img src={logo5} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-[90vw] min-h-[30rem] bg-red-400 "></div> */}
    </div>
  );
};

export default HomeScreen;
