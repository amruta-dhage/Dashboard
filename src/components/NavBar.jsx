import { CiSettings } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import ProfileImg from "../assets/Profile.avif";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

function NavBar() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto ps-16 md:ps-20 pe-0 md:pe-8 shadow-md h-16 fixed top-0 left-0 right-0 bg-gray-800 z-40 rounded-t-lg rounded-l-lg">
        <div className="flex justify-between items-center ">
          <div className="flex space-x-2 md:mt-2 mt-4 ">
            <div className="flex items-center gap-2 bg-gray-700 p-1 rounded justify-center">
              <IoSearch className="text-white" />
              <input
                placeholder="Search"
                className="bg-gray-700 text-white outline-none "
              />
            </div>
          </div>
          <div className="md:mt-2">
            <ul className="hidden md:flex space-x-4">
              <li className="text-xl bg-gray-700 p-3 rounded-full hover:scale-105 duration-200 cursor-pointer">
                <CiMail size={24} />
              </li>
              <li className="text-xl bg-gray-700 p-3 rounded-full hover:scale-105 duration-200 cursor-pointer">
                <CiSettings size={24} />
              </li>
              <li className="text-xl bg-gray-700 p-3 rounded-full hover:scale-105 duration-200 cursor-pointer">
                <IoIosNotificationsOutline size={24} />
              </li>
              <li className="">
                <img
                  src={ProfileImg}
                  alt=""
                  className="rounded-full h-12 w-12"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
