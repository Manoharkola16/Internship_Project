// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import toast from 'react-hot-toast';
// // // // // import { registerUser } from '../../slice';
// // // // // import { useDispatch, useSelector } from 'react-redux';

// // // // // const Register = () => {
// // // // //   const navigate = useNavigate();
// // // // //   const dispatch = useDispatch();
// // // // //   const { loading, error } = useSelector((state) => state.user);

// // // // //   const [formData, setFormData] = useState({
// // // // //     username: '',
// // // // //     email: '',
// // // // //     password: '',
// // // // //     confirmPassword: '',
// // // // //     phone: '',
// // // // //     profilePhoto: null,
// // // // //   });
// // // // //   const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
// // // // //   const [formError, setFormError] = useState('');
// // // // //   const [success, setSuccess] = useState('');

// // // // //   // Password visibility toggles
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value, files } = e.target;
// // // // //     if (name === 'profilePhoto') {
// // // // //       const file = files[0];
// // // // //       if (file && file.type.startsWith('image/')) {
// // // // //         setFormData({ ...formData, profilePhoto: file });
// // // // //         const reader = new FileReader();
// // // // //         reader.onloadend = () => setProfilePhotoPreview(reader.result);
// // // // //         reader.readAsDataURL(file);
// // // // //       } else {
// // // // //         alert('Please select a valid image file.');
// // // // //       }
// // // // //     } else {
// // // // //       setFormData({ ...formData, [name]: value });
// // // // //     }
// // // // //   };

// // // // //   const validatePassword = (password) => {
// // // // //     const uppercaseRegex = /[A-Z]/;
// // // // //     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
// // // // //     return uppercaseRegex.test(password) && specialCharRegex.test(password);
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setFormError('');
// // // // //     setSuccess('');

// // // // //     if (
// // // // //       !formData.username ||
// // // // //       !formData.email ||
// // // // //       !formData.password ||
// // // // //       !formData.confirmPassword ||
// // // // //       !formData.phone ||
// // // // //       !formData.profilePhoto
// // // // //     ) {
// // // // //       setFormError('Please fill all input fields and upload a profile photo.');
// // // // //       return;
// // // // //     }

// // // // //     if (formData.password !== formData.confirmPassword) {
// // // // //       setFormError('Passwords do not match.');
// // // // //       return;
// // // // //     }

// // // // //     if (!validatePassword(formData.password)) {
// // // // //       setFormError('Password must contain at least one uppercase letter and one special character.');
// // // // //       return;
// // // // //     }

// // // // //     const registerData = new FormData();
// // // // //     registerData.append('username', formData.username);
// // // // //     registerData.append('email', formData.email);
// // // // //     registerData.append('password', formData.password);
// // // // //     registerData.append('phone', formData.phone);
// // // // //     registerData.append('profilePhoto', formData.profilePhoto);

// // // // //     try {
// // // // //       await dispatch(registerUser(registerData)).unwrap();
// // // // //       toast.success('Registration successful!');
// // // // //       navigate('/'); // navigate to login page
// // // // //     } catch (err) {
// // // // //       console.error('Register error:', err);
// // // // //       toast.error(err.message || 'Registration failed');
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex justify-end py-0 px-50 items-center min-h-screen bg-[url('/public/image.jpg')] bg-cover overflow-hidden">
// // // // //       <div className="w-full max-w-md p-2 rounded-lg">
// // // // //         <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
// // // // //         <form onSubmit={handleSubmit}>
// // // // //           {(formError || error) && (
// // // // //             <p className="text-red-500 text-center mb-4 font-semibold">{formError || error}</p>
// // // // //           )}
// // // // //           {success && <p className="text-green-600 text-center mb-4 font-semibold">{success}</p>}

// // // // //           <div className="mb-4">
// // // // //             <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
// // // // //               Username
// // // // //             </label>
// // // // //             <input
// // // // //               type="text"
// // // // //               id="username"
// // // // //               name="username"
// // // // //               value={formData.username}
// // // // //               onChange={handleChange}
// // // // //               className="shadow border rounded w-full py-2 px-3 text-gray-700"
// // // // //             />
// // // // //           </div>

// // // // //           <div className="mb-4">
// // // // //             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
// // // // //               Email
// // // // //             </label>
// // // // //             <input
// // // // //               type="email"
// // // // //               id="email"
// // // // //               name="email"
// // // // //               value={formData.email}
// // // // //               onChange={handleChange}
// // // // //               className="shadow border rounded w-full py-2 px-3 text-gray-700"
// // // // //             />
// // // // //           </div>

// // // // //           <div className="mb-4 relative">
// // // // //             <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
// // // // //               Password
// // // // //             </label>
// // // // //             <input
// // // // //               type={showPassword ? 'text' : 'password'}
// // // // //               id="password"
// // // // //               name="password"
// // // // //               value={formData.password}
// // // // //               onChange={handleChange}
// // // // //               className="shadow border rounded w-full py-2 px-3 text-gray-700 pr-10"
// // // // //             />
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={() => setShowPassword(!showPassword)}
// // // // //               className="absolute right-3 top-9 text-gray-600"
// // // // //               tabIndex={-1}
// // // // //               aria-label={showPassword ? 'Hide password' : 'Show password'}
// // // // //             >
// // // // //               {showPassword ? '🙈' : '👁️'}
// // // // //             </button>
// // // // //           </div>

// // // // //           <div className="mb-4 relative">
// // // // //             <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
// // // // //               Confirm Password
// // // // //             </label>
// // // // //             <input
// // // // //               type={showConfirmPassword ? 'text' : 'password'}
// // // // //               id="confirmPassword"
// // // // //               name="confirmPassword"
// // // // //               value={formData.confirmPassword}
// // // // //               onChange={handleChange}
// // // // //               className="shadow border rounded w-full py-2 px-3 text-gray-700 pr-10"
// // // // //             />
// // // // //             <button
// // // // //               type="button"
// // // // //               onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// // // // //               className="absolute right-3 top-9 text-gray-600"
// // // // //               tabIndex={-1}
// // // // //               aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
// // // // //             >
// // // // //               {showConfirmPassword ? '🙈' : '👁️'}
// // // // //             </button>
// // // // //             {formData.password &&
// // // // //               formData.confirmPassword &&
// // // // //               formData.password !== formData.confirmPassword && (
// // // // //                 <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
// // // // //               )}
// // // // //           </div>

// // // // //           <div className="mb-4">
// // // // //             <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
// // // // //               Phone Number
// // // // //             </label>
// // // // //             <input
// // // // //               type="tel"
// // // // //               id="phone"
// // // // //               name="phone"
// // // // //               value={formData.phone}
// // // // //               onChange={handleChange}
// // // // //               className="shadow border rounded w-full py-2 px-3 text-gray-700"
// // // // //             />
// // // // //           </div>

// // // // //           <div className="mb-4">
// // // // //             <label htmlFor="profilePhoto" className="block text-gray-700 text-sm font-bold mb-2">
// // // // //               Profile Photo
// // // // //             </label>
// // // // //             <input
// // // // //               type="file"
// // // // //               id="profilePhoto"
// // // // //               name="profilePhoto"
// // // // //               accept="image/*"
// // // // //               onChange={handleChange}
// // // // //               className="shadow border rounded w-full py-2 px-3 text-gray-700"
// // // // //             />
// // // // //           </div>

// // // // //           {profilePhotoPreview && (
// // // // //             <div className="mb-4">
// // // // //               <img
// // // // //                 src={profilePhotoPreview}
// // // // //                 alt="Preview"
// // // // //                 className="w-32 h-32 object-cover rounded"
// // // // //               />
// // // // //             </div>
// // // // //           )}

// // // // //           <div className="flex items-center justify-center">
// // // // //             <button
// // // // //               type="submit"
// // // // //               disabled={loading}
// // // // //               className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
// // // // //                 loading ? 'opacity-50 cursor-not-allowed' : ''
// // // // //               }`}
// // // // //             >
// // // // //               {loading ? 'Registering...' : 'Register'}
// // // // //             </button>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Register;





import React, { useEffect, useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { registerUser } from '../../slice';
import { useDispatch, useSelector } from 'react-redux';

const getCroppedImg = (imageSrc, pixelCrop) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(pixelCrop.width));
      canvas.height = Math.max(1, Math.round(pixelCrop.height));
      const ctx = canvas.getContext('2d');
      ctx.drawImage(
        image,
        Math.round(pixelCrop.x),
        Math.round(pixelCrop.y),
        Math.round(pixelCrop.width),
        Math.round(pixelCrop.height),
        0,
        0,
        canvas.width,
        canvas.height
      );
      canvas.toBlob((blob) => {
        if (!blob) return reject(new Error('Canvas is empty'));
        const reader = new FileReader();
        reader.onloadend = () => resolve({ blob, dataUrl: reader.result });
        reader.readAsDataURL(blob);
      }, 'image/jpeg', 0.9);
    };
    image.onerror = (e) => reject(e);
    image.src = imageSrc;
  });
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user || {});

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    profilePhoto: null,
  });
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState('');

  // visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // cropper modal
  const [showCropper, setShowCropper] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropping, setCropping] = useState(false);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
      setShowCropper(true);
    };
    reader.readAsDataURL(file);
  };

  const handlePreviewClick = () => {
    if (!profilePhotoPreview) {
      document.getElementById('profileFileInput')?.click();
      return;
    }
    setImageSrc(profilePhotoPreview);
    setShowCropper(true);
  };

  const onCropComplete = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleSaveCropped = async () => {
    if (!croppedAreaPixels || !imageSrc) {
      alert('Please select a crop area.');
      return;
    }
    setCropping(true);
    try {
      const { blob, dataUrl } = await getCroppedImg(imageSrc, croppedAreaPixels);
      const file = new File([blob], 'profile.jpg', { type: 'image/jpeg' });
      setFormData((p) => ({ ...p, profilePhoto: file }));
      setProfilePhotoPreview(dataUrl);
      setShowCropper(false);
      setImageSrc(null);
      setZoom(1);
    } catch (err) {
      console.error('Crop/save error:', err);
      alert('Failed to crop image.');
    } finally {
      setCropping(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return uppercaseRegex.test(password) && specialCharRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSuccess('');

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.phone ||
      !formData.profilePhoto
    ) {
      setFormError('Please fill all input fields and upload a profile photo.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }

    if (!validatePassword(formData.password)) {
      setFormError('Password must contain at least one uppercase letter and one special character.');
      return;
    }

    const registerData = new FormData();
    registerData.append('username', formData.username);
    registerData.append('email', formData.email);
    registerData.append('password', formData.password);
    registerData.append('phone', formData.phone);
    registerData.append('profilePhoto', formData.profilePhoto);

    try {
      await dispatch(registerUser(registerData)).unwrap();
      toast.success('Registration successful!');
      navigate('/');
    } catch (err) {
      console.error('Register error:', err);
      toast.error(err.message || 'Registration failed');
    }
  };

  const passwordMismatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/public/image.jpg')] bg-cover p-6 pl-180">
      <div className="w-full max-w-md p-6 rounded-lg ">
        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>

        {(formError || error) && (
          <p className="text-red-500 text-center mb-4 font-semibold">{formError || error}</p>
        )}
        {success && <p className="text-green-600 text-center mb-4 font-semibold">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Centered larger photo */}
          {profilePhotoPreview && (
            <div className="flex justify-center mb-6">
              <img
                src={profilePhotoPreview}
                alt="Preview"
                onClick={handlePreviewClick}
                className="w-48 h-48 object-cover rounded-full border-4 border-blue-400 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          <div className="flex justify-center mb-4">
            <input
              id="profileFileInput"
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => document.getElementById('profileFileInput')?.click()}
              className="px-4 py-2 border rounded bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium"
            >
              {profilePhotoPreview ? 'Change / Crop Photo' : 'Upload Profile Photo'}
            </button>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Username</label>
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded p-2 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          <div className="relative">
            <label className="block text-gray-700 text-sm font-bold mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full border rounded p-2 pr-10 ${
                passwordMismatch ? 'border-red-500' : ''
              }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((s) => !s)}
              className="absolute right-3 top-9 text-gray-600"
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </button>

            {passwordMismatch && (
              <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-1">Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>

      {/* Cropper Modal */}
      {showCropper && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="bg-white rounded-lg w-full max-w-3xl overflow-hidden shadow-lg">
            <div className="relative w-full h-[60vh] bg-black">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Zoom</label>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveCropped}
                  disabled={cropping}
                  className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  {cropping ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={() => {
                    setShowCropper(false);
                    setImageSrc(null);
                  }}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;


