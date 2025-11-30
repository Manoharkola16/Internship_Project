import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiBell,
  FiEdit3,
  FiUserPlus,
  FiSettings,
  FiX,
} from "react-icons/fi";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.user);

  // Detect active page from URL
  useEffect(() => {
    const p = location.pathname || "/";
    if (p.startsWith("/home")) setActive("Home");
    else if (p.startsWith("/addfriends")) setActive("Add Friends");
    else if (p.startsWith("/settings")) setActive("Settings");
    else if (p.startsWith("/profile")) setActive("Profile");
    else setActive("Home");
  }, [location.pathname]);

  // Menu buttons
  const menuItems = [
    { label: "Home", icon: <FiHome size={22} />, route: "/home" },
    { label: "Search", icon: <FiSearch size={22} />, action: () => setShowSearch(true) },
    { label: "Notifications", icon: <FiBell size={22} />, action: () => setShowNotifications(true) },
    { label: "Create Blog", icon: <FiEdit3 size={22} /> },
    { label: "Add Friends", icon: <FiUserPlus size={22} />, route: "/addfriends" },
    { label: "Settings", icon: <FiSettings size={22} />, route: "/settings" },
  ];

  const handleClick = (item) => {
    setActive(item.label);

    if (item.action) item.action();
    if (item.route) navigate(item.route);
  };

  return (
    <>
      {/* LEFT SIDEBAR */}
      <div className="w-64 h-screen border-r px-6 py-8 flex flex-col space-y-8 bg-white">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
            B
          </div>
          <h1 className="text-2xl font-bold">BlogVerse</h1>
        </div>

        {/* Profile Section */}
        <div className="text-center">
          <div className="mx-auto w-28 h-28 rounded-full bg-purple-100 flex items-center justify-center">
            <img
              src={
                user?.user?.profilePhoto
                  ? `data:image/jpeg;base64,${user.user.profilePhoto}`
                  : "/default-profile.png"
              }
              alt="profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>

          <p className="mt-2 font-semibold text-lg">
            {user?.user?.username || "Loading..."}
          </p>

          <button
            onClick={() => navigate("/profile")}
            className={`mt-3 px-4 py-2 rounded-lg font-semibold text-sm transition 
            ${
              active === "Profile"
                ? "bg-blue-50 text-blue-600"
                : "bg-purple-700 text-white hover:bg-purple-800"
            }`}
          >
            MyProfile
          </button>
        </div>

        {/* NAV BUTTONS */}
        <div className="space-y-3 mt-5">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`flex items-center gap-3 text-lg font-semibold w-full px-4 py-2 rounded-lg transition 
              ${
                active === item.label
                  ? "bg-purple-100 text-purple-700"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* SEARCH SLIDE */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transform 
        transition-transform duration-300 p-5 z-50
        ${showSearch ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Search</h2>
          <FiX
            size={28}
            className="text-red-600 cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full border px-3 py-2 rounded-md"
        />
      </div>

      {/* NOTIFICATION SLIDE */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl transform 
        transition-transform duration-300 p-5 z-50
        ${showNotifications ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Notifications</h2>
          <FiX
            size={28}
            className="text-red-600 cursor-pointer"
            onClick={() => setShowNotifications(false)}
          />
        </div>

        <p className="text-gray-600">No new notifications.</p>
      </div>
    </>
  );
}
