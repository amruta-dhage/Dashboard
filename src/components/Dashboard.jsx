import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { FaBucket } from "react-icons/fa6";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { RiSimCardFill } from "react-icons/ri";
import { RiLockStarFill } from "react-icons/ri";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ApexCharts from "react-apexcharts";
import { MdNavigateNext } from "react-icons/md";
import { PiListStarLight } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { LuMenuSquare } from "react-icons/lu";
import { IoDocumentTextOutline } from "react-icons/io5";
import ProfileImg from "../assets/Profile.avif";
import { FaStar } from "react-icons/fa6";

function Dashboard() {
  const options = {
    series: [
      {
        name: "",
        data: [2, 3, 4, 10, 4, 6, 3, 2, 1, 8, 5, 2],
      },
    ],
    chart: {
      height: "100%", // Make chart height responsive
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#FFFFFF"],
      },
    },
    xaxis: {
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      //   title: {
      //     text: "Month",
      //     style: {
      //       fontSize: "14px",
      //       color: "#666",
      //     },
      //   },
      labels: {
        style: {
          fontSize: "12px",
          colors: "#FFFFFF",
        },
      },
      position: "bottom",
      axisBorder: {
        show: true,
        colors: "#FFFFFF",
      },
      axisTicks: {
        show: true,
        colors: "#FFFFFF",
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      //   title: {
      //     text: "Inflation Rate (%)",
      //     style: {
      //       fontSize: "14px",
      //       color: "#666",
      //     },
      //   },
      categories: ["0", "5k", "10k", "15k", "20k", "25k"],
      labels: {
        style: {
          fontSize: "12px",
          colors: "#FFFFFF",
        },
      },
      axisBorder: {
        show: true,
        colors: "#FFFFFF",
      },
      axisTicks: {
        show: true,
        colors: "#FFFFFF",
      },
    },
    // title: {
    //   text: "Monthly Inflation",
    //   floating: true,
    //   offsetY: 330,
    //   align: "center",
    //   style: {
    //     color: "#444",
    //   },
    // },
  };

  const data = [
    {
      name: "John Doe",
      orderNo: 121,
      Amount: 78.55,
      status: "Delivered",
      profile: ProfileImg,
    },
    {
      name: "Deve Deo",
      orderNo: 131,
      Amount: 785.54,
      status: "Delivered",
      profile: ProfileImg,
    },
    {
      name: "Cody Fisher",
      orderNo: 142,
      Amount: 855.42,
      status: "Cancelled",
      profile: ProfileImg,
    },
    {
      name: "Wade Warane",
      orderNo: 148,
      Amount: 785.12,
      status: "Delivered",
      profile: ProfileImg,
    },
  ];

  function bgColor(text) {
    if (text == "Delivered") {
      return "bg-green-200";
    } else {
      return "bg-red-200";
    }
  }

  function textColor(text) {
    console.log(text);
    if (text == "Delivered") return "text-green-800";
    else return "text-red-800";
  }

  const feedBackList = [
    {
      name: "Deo Wade",
      profile: ProfileImg,
      rate: ["*", "*", "*", "*", "*"],
      text: "Customers like the appearance of the charging adapter, saying it stands out. They also like the portability, and performance. However, some customers have reported issues with the fit and stability of the adapter. They say it's loosely fitted and falls off easily. Opinions are mixed on the USB port, charging, and quality.",
    },
    {
      name: "Mery Cody",
      profile: ProfileImg,
      rate: ["*", "*", "*", "*"],
      text: "Took it to my europe trip and it delivered. Good travel size adaptor. Has 3 to 4 different types of plug types. Good buy for a decent price.",
    },
  ];

  function starColor(num) {}
  return (
    <div className="flex min-h-screen">
      <NavBar />
      <div className="flex flex-grow">
        <Sidebar />
        <div className="flex-grow mt-24 ms-24 me-9 mb-12 auto-scroll">
          <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
          <div className="w-full mt-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-700 rounded-md p-5">
                    <div className="bg-indigo-200 rounded-md w-10 h-10 flex justify-center items-center">
                      <FaBucket size={24} color="#5c58a1" />
                    </div>
                    <p className="font-semibold mt-2">Total Orders</p>
                    <div className="flex justify-between mt-3">
                      <h3 className="text-2xl font-bold">75</h3>
                      <div className="text-green-500 flex text-sm gap-1 mt-2">
                        <BiSolidUpArrow className="mt-1" /> <span>3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-md p-5">
                    <div className="bg-green-200 rounded-md w-10 h-10 flex justify-center items-center">
                      <RiSimCardFill size={24} color="#5aa664" />
                    </div>
                    <p className="font-semibold mt-2">Total Delivered</p>
                    <div className="flex justify-between mt-3">
                      <h3 className="text-2xl font-bold">70</h3>
                      <div className="text-red-500 flex text-sm gap-1 mt-2">
                        <BiSolidDownArrow className="mt-1" /> <span>3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-md p-5">
                    <div className="bg-red-200 rounded-md w-10 h-10 flex justify-center items-center">
                      <RiLockStarFill size={24} color="#e66447" />
                    </div>
                    <p className="font-semibold mt-2">Total Cancelled</p>
                    <div className="flex justify-between mt-3">
                      <h3 className="text-2xl font-bold">05</h3>
                      <div className="text-green-500 flex text-sm gap-1 mt-2">
                        <BiSolidUpArrow className="mt-1" /> <span>3%</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-md p-5">
                    <div className="bg-pink-200 rounded-md w-10 h-10 flex justify-center items-center">
                      <FaMoneyBillTransfer size={24} color="#c97db6" />
                    </div>
                    <p className="font-semibold mt-2">Total Revenue</p>
                    <div className="flex justify-between mt-3">
                      <h3 className="text-2xl font-bold">$12K</h3>
                      <div className="text-red-500 flex text-sm gap-1 mt-2">
                        <BiSolidDownArrow className="mt-1" /> <span>3%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-4 bg-gray-700 rounded-md p-5">
                {/* Content for the second column */}
                <p>Net profit</p>
                <div className="flex justify-center items-center grid grid-cols-1 md:grid-cols-2 gap-3 mt-1">
                  <div>
                    <h1 className="text-2xl font-bold">$6759.25</h1>
                    <div className="text-green-500 flex text-sm gap-1 mt-2">
                      <BiSolidDownArrow className="mt-2" /> <span>3%</span>
                    </div>
                  </div>
                  <div className="pt-0 mt-0 flex flex-col justify-center items-center">
                    <CircularProgressbar
                      value={66}
                      text={`${66}%`}
                      strokeWidth={10}
                      className="h-16 w-16 "
                    />
                    <p className="mt-2" style={{ fontSize: "10px" }}>
                      The values here have been rounded off.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-gray-700 rounded-md p-5">
                <div className="chart-container w-full h-full p-4">
                  <p className="text-xl font-semibold mb-4">Activity</p>
                  <ApexCharts
                    options={options}
                    series={options.series}
                    type="bar"
                    height="300" // Fixed height for better control, adjust if needed
                    width="100%" // Ensure the width is responsive
                  />
                </div>
              </div>
              <div className="md:col-span-4 bg-gray-700 rounded-md p-5 ">
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 mt-8">
                  <div className="md:col-span-3">
                    <div className="flex gap-4 items-cenetr ">
                      <div className="bg-orange-200 rounded-full w-10 h-10 md:w-10 md:h-10 flex justify-center items-center">
                        <GoGoal size={24} color="#f08756" />
                      </div>
                      <h2 className="mt-2">Goals</h2>
                    </div>
                  </div>
                  <div className="col-span-1 mt-2">
                    <div className="bg-gray-400 rounded-full p-1 w-6 h-6 flex justify-center items-center">
                      <MdNavigateNext size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 mt-8">
                  <div className="md:col-span-3">
                    <div className="flex gap-4 items-cenetr ">
                      <div className="bg-indigo-300 rounded-full w-10 h-10 flex justify-center items-center">
                        <PiListStarLight size={24} color="#323694" />
                      </div>
                      <h2 className="mt-2">Popular Dishes</h2>
                    </div>
                  </div>
                  <div className="col-span-1 mt-2">
                    <div className="bg-gray-400 rounded-full p-1 w-6 h-6 flex justify-center items-center">
                      <MdNavigateNext size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 mt-8">
                  <div className="md:col-span-3">
                    <div className="flex gap-4 items-cenetr ">
                      <div className="bg-green-200 rounded-full w-10 h-10 flex justify-center items-center">
                        <LuMenuSquare size={24} color="#50de57" />
                      </div>
                      <h2 className="mt-2">Menus</h2>
                    </div>
                  </div>
                  <div className="col-span-1 mt-2">
                    <div className="bg-gray-400 rounded-full p-1 w-6 h-6 flex justify-center items-center">
                      <MdNavigateNext size={24} color="white" />
                    </div>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 mt-8 md:grid-cols-4 gap-2">
                  <div className="md:col-span-3">
                    <div className="flex gap-4 items-cenetr ">
                      <div className="bg-teal-200 rounded-full w-10 h-10 flex justify-center items-center">
                        <IoDocumentTextOutline size={24} color="#3ecfc0" />
                      </div>
                      <h2 className="mt-2">List</h2>
                    </div>
                  </div>
                  <div className="col-span-1 mt-2">
                    <div className="bg-gray-400 rounded-full p-1 w-6 h-6 flex justify-center items-center">
                      <MdNavigateNext size={24} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-8 bg-gray-700 rounded-md p-5">
                <h1 className="text-xl font-bold">Recent Orders</h1>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-700 ">
                    <thead>
                      <tr className="w-full bg-gray-700">
                        <th className="py-2 px-4 border-b border-gray-200 text-left">
                          Customer
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">
                          Order No
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">
                          Amount
                        </th>
                        <th className="py-2 px-4 border-b border-gray-200 text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item, index) => (
                        <tr key={index} className="w-full">
                          <td className="py-2 px-4 border-b border-gray-300 flex gap-4">
                            <img
                              src={item?.profile}
                              alt=""
                              className="rounded-full h-10 w-10"
                            />{" "}
                            <p className="mt-2">{item.name}</p>
                          </td>
                          <td className="py-2 px-6 border-b border-gray-300">
                            {item.orderNo}
                          </td>
                          <td className="py-2 px-6 border-b border-gray-300">
                            ${item.Amount}
                          </td>
                          <td className="border-b border-gray-300 ">
                            <div
                              className={`${bgColor(item.status)} ${textColor(
                                item.status
                              )} flex justify-center rounded-xl`}
                            >
                              {item.status}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:col-span-4 bg-gray-700 rounded-md p-5">
                <h1 className="text-xl font-bold">Customer's feedback</h1>
                <div className="overflow-auto max-h-72">
                  {feedBackList?.map((item, index) => {
                    return (
                      <>
                        <div className="flex gap-3 mt-4">
                          <img
                            src={item?.profile}
                            alt=""
                            className="rounded-full h-10 w-10"
                          />{" "}
                          <p className="mt-2">{item.name}</p>
                        </div>
                        <div className="flex gap-2 ms-2 mt-3">
                          {item.rate?.map((item, index) => {
                            return (
                              <>
                                <FaStar size={24} color="yellow" />
                              </>
                            );
                          })}
                          {item?.rate.length < 5 ? (
                            <FaStar size={24} color="white" />
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="mt-3">
                          <p className="text-sm">{item?.text}</p>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
