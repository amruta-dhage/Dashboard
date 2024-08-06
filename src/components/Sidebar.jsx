import { TfiMenuAlt } from "react-icons/tfi";
import { AiFillHome } from "react-icons/ai";
import { BsFileBarGraph } from "react-icons/bs";
import { BsCalendar2Check } from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
function Sidebar() {
  return (
    <div className="max-w-16 container mx-auto  bg-gray-800  fixed h-full z-50 rounded-l-lg">
      <ul className="mt-5 space-y-6">
        <li className="text-white flex justify-center">
          <TfiMenuAlt size={24} color={"#428ced"} />
        </li>
        <li className="text-white flex justify-center border-2  border-gray-800 border-l-indigo-500 ">
          <AiFillHome size={24} color={"#428ced"} />
        </li>
        <li className="text-white flex justify-center  border-top-2px-blue ">
          <BsFileBarGraph size={24} />
        </li>
        <li className="text-white flex justify-center  border-top-2px-blue ">
          <BsCalendar2Check size={20} />
        </li>
        <li className="text-white flex justify-center  border-top-2px-blue ">
          <BiBookBookmark size={24} />
        </li>
        <li className="text-white flex justify-center  border-top-2px-blue ">
          <BsCalendar2Check size={20} />
        </li>
      </ul>
      <div className="text-white flex justify-center items-end my-64 md:my-96">
        <IoMdLogOut size={24} />
      </div>
    </div>
  );
}

export default Sidebar;
