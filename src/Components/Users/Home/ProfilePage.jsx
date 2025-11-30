
import React, { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiMessageCircle,
  FiBookmark,
  FiX,
  FiHeart,
} from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

/* -------------------------
   Sample Data
   ------------------------- */
const initialPosts = [
  { id: 1, title: "A morning routine that works", content: "Tiny habits compound. This post explains a 10-minute routine that helped me ship more.", likes: 12, comments: 4 },
  { id: 2, title: "Design systems for small teams", content: "You don't need a giant design system to get consistent UI — here are pragmatic steps.", likes: 8, comments: 2 },
  { id: 3, title: "Why I love writing", content: "Writing helps me think. Short notes > long procrastinated drafts.", likes: 5, comments: 1 },
  { id: 4, title: "How to write better headlines", content: "Headlines are the gatekeepers — this short guide will help you write clearer headlines.", likes: 20, comments: 6 },
  { id: 5, title: "Small design decisions that scale", content: "Consistency is not about rules, it's about predictable choices. A few rules to follow.", likes: 7, comments: 0 },
];

const initialNotifications = [
  "Priya commented on your post.",
  "You have 3 new followers.",
  "Your blog 'Daily Writing Habits' reached 1k views!",
  "Alex liked your recent blog.",
  "New recommendation: 'Top 10 productivity hacks'.",
];

const initialRecentSearches = [
  "Productivity blogs",
  "Travel stories",
  "Tech trends 2025",
  "Minimalist lifestyle",
  "Personal finance tips",
  "Photography blogs",
  "Health & wellness",
];

/* -------------------------
   POST CARD
   ------------------------- */
function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [comments] = useState(post.comments);

  const toggleLike = () => {
    setLiked((v) => !v);
    setLikes((c) => (liked ? c - 1 : c + 1));
  };

  return (
    <article className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
      <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4 text-sm md:text-base">{post.content}</p>

      <div className="flex items-center justify-between text-xs md:text-sm text-gray-500">
        <div>Posted • <span className="font-medium">2h</span></div>

        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={toggleLike} className="flex items-center gap-2">
            {liked ? <AiFillHeart className="text-xl text-red-500" /> : <FiHeart className="text-lg" />}
            <span className={`${liked ? "text-red-500" : "text-gray-500"} text-xs`}>{likes}</span>
          </button>

          <button className="flex items-center gap-2">
            <FiMessageCircle className="text-lg" />
            <span className="text-xs">{comments}</span>
          </button>

          <button className="flex items-center gap-2">
            <FiBookmark className="text-lg" />
            <span className="hidden sm:inline text-xs">Save</span>
          </button>
        </div>
      </div>
    </article>
  );
}

/* -------------------------
   RIGHT PROFILE SIDEBAR (FIXED)
   ------------------------- */
function RightProfileCard({ user }) {
  const realUser = user?.user || user; // FIX: correct user object

  return (
    <aside className="hidden lg:block w-80 flex-shrink-0">
      <div className="sticky top-6 pr-4">

        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">

          <div className="flex flex-col items-center mb-4">

            <img
              src={
                realUser?.profilePhoto
                  ? `data:image/jpeg;base64,${realUser.profilePhoto}`
                  : "/default-avatar.png"
              }
              alt="profile"
              className="w-24 h-24 rounded-full object-cover shadow mb-3"
            />

            <div className="font-semibold text-lg">{realUser?.username || "User"}</div>
            <div className="text-gray-500 text-sm">{realUser?.email || "user@example.com"}</div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center mb-6 text-sm">
            <div>
              <div className="text-xs text-gray-500">Posts</div>
              <div className="font-semibold mt-1">{realUser?.posts?.length ?? 0}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Followers</div>
              <div className="font-semibold mt-1">{realUser?.followers?.length ?? 0}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Following</div>
              <div className="font-semibold mt-1">{realUser?.following?.length ?? 0}</div>
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow text-sm">
            Edit Profile
          </button>

        </div>

      </div>
    </aside>
  );
}

/* -------------------------
   SLIDE PANEL
   ------------------------- */
function SlidePanel({
  type,
  onClose,
  notificationsState,
  recentSearchesState,
  user,
}) {
  const isOpen = type !== null;
  const realUser = user?.user || user;

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}

      <div className={`fixed left-0 top-4 bottom-4 z-50 w-72 sm:w-80 bg-white shadow-lg transition-transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h3 className="font-semibold">{type === "search" ? "Search" : "Notifications"}</h3>
          <button onClick={onClose}><FiX /></button>
        </div>

        <div className="p-4 overflow-y-auto">
          {type === "notifications" && (
            <>
              <h4 className="text-xs font-semibold mb-2">Notifications</h4>

              {notificationsState.length === 0 ? (
                <p>No notifications.</p>
              ) : (
                notificationsState.map((n, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded mb-2">
                    {n}
                  </div>
                ))
              )}
            </>
          )}

          {type === "search" && (
            <>
              <div className="border rounded-lg px-3 py-2 flex items-center">
                <FiSearch className="text-gray-500" />
                <input className="ml-2 w-full outline-none" placeholder="Search..." />
              </div>

              <h4 className="text-xs font-semibold mt-4">Recent searches</h4>

              {recentSearchesState.map((s) => (
                <div key={s} className="p-2 bg-gray-50 rounded mt-2">{s}</div>
              ))}
            </>
          )}
        </div>

      </div>
    </>
  );
}

/* -------------------------
   MAIN LAYOUT
   ------------------------- */
export default function ProfileLayout() {
  const [posts, setPosts] = useState(initialPosts);
  const [sidePanel, setSidePanel] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [query, setQuery] = useState("");

  // FIXED: ALWAYS extract actual user object
  const { user: userObj } = useSelector((state) => state.user);

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="flex h-screen w-full overflow-hidden">

        <Navbar />

        {/* FEED */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">

          {/* Search + Create */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 rounded-full bg-white border shadow-sm"
                placeholder="Search posts..."
              />
            </div>

            <button
              onClick={() => setShowCreateModal(true)}
              className="px-4 py-2 flex items-center gap-2 bg-green-500 text-white rounded-full shadow"
            >
              <FiPlus /> New Post
            </button>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {filtered.map((p) => <PostCard key={p.id} post={p} />)}

            {filtered.length === 0 && (
              <p className="text-center text-gray-500 mt-8">
                No posts for "<b>{query}</b>"
              </p>
            )}
          </div>

        </main>

        {/* RIGHT SIDEBAR FIXED */}
        <RightProfileCard user={userObj} />

      </div>

      {/* Slide Panel */}
      <SlidePanel
        type={sidePanel}
        onClose={() => setSidePanel(null)}
        notificationsState={initialNotifications}
        recentSearchesState={initialRecentSearches}
        user={userObj}
      />
    </div>
  );
}
