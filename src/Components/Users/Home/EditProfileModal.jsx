import React, { useState } from "react";

export default function EditProfileModal({ user, onClose, onSave }) {
  const [username, setUsername] = useState(user?.username || "");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePhoto(file);
  };

  const handleSave = async () => {
    let base64Img = null;

    if (profilePhoto) {
      base64Img = await toBase64(profilePhoto);
    }

    onSave({
      username,
      profilePhoto: base64Img, // stays in Redux only
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">

        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>

        {/* USERNAME */}
        <label className="block text-sm font-medium">Username</label>
        <input
          className="w-full border px-3 py-2 rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* PROFILE PHOTO */}
        <label className="block text-sm font-medium mb-1">Profile Photo</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded-lg">
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
          >
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}
