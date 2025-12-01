import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiBell,
  FiEdit3,
  FiUserPlus,
  FiSettings,
  FiX,
} from "react-icons/fi";

/* -----------------------------------------------------------
   DUMMY DATA
----------------------------------------------------------- */
const initialRequests = [
  {
    id: 1,
    name: "Sarah Mitchell",
    username: "@sarahmitchell",
    mutual: 24,
    time: "2h ago",
    title: "Product Designer at TechCorp",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    name: "Michael Chen",
    username: "@michaelchen",
    mutual: 18,
    time: "5h ago",
    title: "Software Engineer at Google",
    location: "Mountain View, CA",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    username: "@emilyrodriguez",
    mutual: 31,
    time: "1d ago",
    title: "Marketing Manager at Meta",
    location: "New York, NY",
  },
  {
    id: 4,
    name: "David Thompson",
    username: "@davidthompson",
    mutual: 12,
    time: "1d ago",
    title: "Data Scientist at Amazon",
    location: "Seattle, WA",
  },
  {
    id: 5,
    name: "Jessica Park",
    username: "@jessicapark",
    mutual: 9,
    time: "2d ago",
    title: "UX Researcher at Apple",
    location: "Cupertino, CA",
  },
  {
    id: 6,
    name: "Ryan Martinez",
    username: "@ryanmartinez",
    mutual: 15,
    time: "3d ago",
    title: "Creative Director at Adobe",
    location: "Los Angeles, CA",
  },
];

const initialNotifications = [
  "Priya commented on your post.",
  "You have 3 new followers.",
  "Your blog 'Daily Writing Habits' reached 1k views!",
  "Alex liked your recent blog.",
  "New recommendation: 'Top 10 productivity hacks'.",
  "Reminder: Finish your draft 'Travel Diaries'.",
];

const initialRecentSearches = [
  "Productivity blogs",
  "Travel stories",
  "Tech trends 2025",
  "Minimalist lifestyle",
  "Photography blogs",
];

/* -----------------------------------------------------------
   SIDEBAR NAV BUTTON
----------------------------------------------------------- */
function NavButton({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-sm font-medium transition
        ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
        }`}
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </button>
  );
}

/* -----------------------------------------------------------
   SLIDE PANEL (Search / Notifications)
----------------------------------------------------------- */
function SlidePanel({
  type,
  onClose,
  notificationsState,
  setNotificationsState,
  recentSearchesState,
  setRecentSearchesState,
}) {
  const [searchInput, setSearchInput] = useState("");

  const clearNotifications = () => setNotificationsState([]);
  const clearRecentSearches = () => setRecentSearchesState([]);

  return (
    <>
      {/* overlay */}
      {type && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed left-0 top-16 bottom-16 z-50 w-80 bg-white border-r shadow-xl transform transition-transform duration-300 
          ${type ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* panel header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h3 className="font-semibold text-gray-900">
            {type === "search" ? "Search" : "Notifications"}
          </h3>

          <div className="flex items-center gap-2">
            {type === "notifications" && (
              <button
                onClick={clearNotifications}
                className="text-xs text-red-600 px-2 py-1 bg-red-50 rounded hover:bg-red-100"
              >
                Clear All
              </button>
            )}

            <button onClick={onClose}>
              <FiX />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 overflow-y-auto h-full">
          {/* SEARCH PANEL */}
          {type === "search" && (
            <>
              <div className="mb-4">
                <label className="block text-xs text-gray-500 mb-1">
                  Search
                </label>

                <div className="flex items-center border rounded-lg px-3 py-2 gap-2">
                  <FiSearch className="text-gray-400" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="flex-1 text-sm outline-none"
                    placeholder="Search BlogVerse..."
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="text-xs font-semibold text-gray-700">
                    Recent Searches
                  </h4>

                  <button
                    onClick={clearRecentSearches}
                    className="text-xs text-red-600 px-2 py-1 bg-red-50 rounded hover:bg-red-100"
                  >
                    Clear All
                  </button>
                </div>

                {recentSearchesState.length === 0 ? (
                  <p className="text-sm text-gray-500">No recent searches.</p>
                ) : (
                  <ul className="space-y-2">
                    {recentSearchesState.map((txt, idx) => (
                      <li
                        key={idx}
                        className="text-sm bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 cursor-pointer"
                      >
                        {txt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}

          {/* NOTIFICATIONS PANEL */}
          {type === "notifications" && (
            <div className="space-y-3">
              {notificationsState.length === 0 ? (
                <p className="text-sm text-gray-500">No notifications.</p>
              ) : (
                notificationsState.map((msg, i) => (
                  <div
                    key={i}
                    className="p-3 bg-gray-100 rounded border text-sm"
                  >
                    {msg}
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* -----------------------------------------------------------
   CREATE BLOG MODAL
----------------------------------------------------------- */
export function CreateBlogModal({ open, onClose }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-40"
      />

      <div className="fixed inset-0 z-50 flex justify-center items-center p-4">
        <div className="bg-white rounded-lg w-full max-w-lg p-6 shadow-xl space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">Create Blog</h3>
            <button onClick={onClose}>
              <FiX />
            </button>
          </div>

          <input
            className="w-full border px-3 py-2 rounded text-sm"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border px-3 py-2 rounded text-sm h-32"
            placeholder="Write your story..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="flex justify-end gap-2">
            <button
              className="px-4 py-2 text-sm border rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* -----------------------------------------------------------
   FRIEND CARD
----------------------------------------------------------- */
function FriendCard({ request, onAccept, onDecline, disabled }) {
  return (
    <div className="bg-white rounded-2xl border shadow-sm p-5 flex flex-col gap-3">
      <div className="flex gap-4">
        <div className="w-12 h-12 bg-black rounded-lg" />

        <div className="flex-1">
          <div className="font-semibold">{request.name}</div>
          <div className="text-xs text-gray-500">{request.username}</div>

          <div className="flex gap-3 text-xs text-gray-500 mt-1">
            <span>👥 {request.mutual} mutual</span>
            <span>• {request.time}</span>
          </div>

          <div className="text-xs text-gray-500 mt-1">
            {request.title} • {request.location}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-3 ml-16">
        <button
          className={`px-5 py-2 rounded-full text-sm ${
            disabled
              ? "bg-purple-200 text-white"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
          onClick={onAccept}
          disabled={disabled}
        >
          Accept
        </button>

        <button
          className={`px-5 py-2 rounded-full text-sm ${
            disabled
              ? "bg-gray-200 text-gray-400"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
          onClick={onDecline}
          disabled={disabled}
        >
          Decline
        </button>
      </div>
    </div>
  );
}

/* -----------------------------------------------------------
   MAIN ADD FRIENDS COMPONENT
----------------------------------------------------------- */
export default function AddFriends() {
  const navigate = useNavigate();

  /* Sidebar behavior */
  const [activeNav, setActiveNav] = useState("friends");
  const [sidePanel, setSidePanel] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [notificationsState, setNotificationsState] = useState(
    initialNotifications
  );
  const [recentSearchesState, setRecentSearchesState] = useState(
    initialRecentSearches
  );

  /* Friend list */
  const [requests, setRequests] = useState(
    initialRequests.map((r) => ({ ...r, status: "pending" }))
  );
  const [activeTab, setActiveTab] = useState("all");
  const [pageSearch, setPageSearch] = useState("");

  const pending = requests.filter((r) => r.status === "pending").length;
  const accepted = requests.filter((r) => r.status === "accepted").length;
  const declined = requests.filter((r) => r.status === "declined").length;

  const handleAction = (id, status) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  };

  const filteredRequests = requests.filter((r) => {
    const matchTab =
      activeTab === "all"
        ? r.status === "pending"
        : activeTab === "accepted"
        ? r.status === "accepted"
        : r.status === "declined";

    const matchSearch =
      r.name.toLowerCase().includes(pageSearch.toLowerCase()) ||
      r.username.toLowerCase().includes(pageSearch.toLowerCase()) ||
      r.location.toLowerCase().includes(pageSearch.toLowerCase());

    return matchTab && matchSearch;
  });

  /* NAV ACTIONS */
  const openSearchPanel = () => {
    setSidePanel("search");
    setActiveNav("search");
  };

  const openNotifPanel = () => {
    setSidePanel("notifications");
    setActiveNav("notifications");
  };

  const openCreateModal = () => {
    setShowCreateModal(true);
    setActiveNav("create");
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex">

      {/* SHARED LEFT NAVBAR */}
      <Navbar />

      {/* -----------------------------------------------------------
         RIGHT SIDE — FRIEND REQUEST SECTION
      ----------------------------------------------------------- */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="px-8 py-6 bg-white border-b flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">Add Friends</h1>
            <p className="text-gray-500 text-sm">
              Manage your friend connections
            </p>

            {/* TABS */}
            <div className="mt-4 inline-flex bg-gray-100 rounded-full p-1 text-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 rounded-full ${
                  activeTab === "all"
                    ? "bg-white shadow font-medium"
                    : "text-gray-500"
                }`}
              >
                All ({pending})
              </button>

              <button
                onClick={() => setActiveTab("accepted")}
                className={`px-4 py-1.5 rounded-full ${
                  activeTab === "accepted"
                    ? "bg-white shadow font-medium"
                    : "text-gray-500"
                }`}
              >
                Sent ({accepted})
              </button>

              <button
                onClick={() => setActiveTab("declined")}
                className={`px-4 py-1.5 rounded-full ${
                  activeTab === "declined"
                    ? "bg-white shadow font-medium"
                    : "text-gray-500"
                }`}
              >
                Suggestions ({declined})
              </button>
            </div>
          </div>

          {/* WIDE SEARCH BAR */}
          <div className="w-[430px]">
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

              <input
                type="text"
                value={pageSearch}
                onChange={(e) => setPageSearch(e.target.value)}
                placeholder="Search people..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 border border-gray-300 outline-none 
                focus:bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition text-sm"
              />
            </div>
          </div>
        </header>

        {/* FRIEND CARDS */}
        <main className="p-8">
          {filteredRequests.length === 0 ? (
            <p className="text-center text-gray-500 mt-20">
              No results found.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRequests.map((req) => (
                <FriendCard
                  key={req.id}
                  request={req}
                  disabled={req.status !== "pending"}
                  onAccept={() => handleAction(req.id, "accepted")}
                  onDecline={() => handleAction(req.id, "declined")}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* PANELS & MODALS */}
      <SlidePanel
        type={sidePanel}
        onClose={() => setSidePanel(null)}
        notificationsState={notificationsState}
        setNotificationsState={setNotificationsState}
        recentSearchesState={recentSearchesState}
        setRecentSearchesState={setRecentSearchesState}
      />

      <CreateBlogModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}



