// import { useDispatch, useSelector } from "react-redux";
// import "./Button.scss";
// import { useState } from "react";
// import {
//   addUpload,
//   finishUpload,
//   setPercentage,
// } from "../../../rtk/slices/progressSlice";
// import { refrechPosts } from "../../../rtk/slices/authSlice";
// import { toast } from "react-toastify";
// import { useTranslation } from "react-i18next";
// import axios from "axios";
// function File() {
//   const { token } = useSelector((state) => state.auth);
//   const [t, i18n] = useTranslation();
//   const themeColor = localStorage.getItem("themeColor");
//   const [text, setText] = useState("");
//   const CHUNK_SIZE = 1 * 1024 * 1024; // 5MB
//   const [loading, setLoading] = useState(false);
//   const [file, setFile] = useState(null);
//   let uploadedChunks = 1;
//   const [videoTitle, setVideoTitle] = useState("");
//   const [progress, setProgress] = useState(0);
//   const [uploadComplete, setUploadComplete] = useState(false);
//   const [videoPath, setVideoPath] = useState("");
//   const [grade, setGrade] = useState("");
//   const [path, setPath] = useState("");
//   // const handleProgress =
//   const URL2 = import.meta.env.VITE_REACT_APP_API_KEY;

//   const dispatch = useDispatch();
//   const totalChunks = Math.ceil(file?.size / CHUNK_SIZE);
//   const generateRandomFileName = (length) => {
//     const charset =
//       "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     let randomFileName = "";
//     for (let i = 0; i < length; i++) {
//       const randomIndex = Math.floor(Math.random() * charset.length);
//       randomFileName += charset.charAt(randomIndex);
//     }
//     return randomFileName;
//   };
//   const [randomFileName, setRandomFileName] = useState(
//     generateRandomFileName(10)
//   ); // Change the length as needed

//   const handleGenerateRandomFileName = () => {
//     const newRandomFileName = generateRandomFileName(10); // Change the length as needed
//     setRandomFileName(newRandomFileName);
//   };
//   const [typePost, setTypePost] = useState(
//     localStorage.getItem("typePost") || ""
//   );
//   const user2 = useSelector((state) => state.auth.user);
//   const isUser = localStorage.getItem("user");
//   const [privacy, setPrivacy] = useState(""); ////نوع الخصوصية
//   const handlePrivacyChange = (event) => {
//     setPrivacy(event.target.value);
//   };
//   const handleUpload = async () => {
//     await handleGenerateRandomFileName();

//     const start = uploadedChunks * CHUNK_SIZE;
//     const end = Math.min(start + CHUNK_SIZE, file.size);
//     const blob = file.slice(start, end);
//     console.log(blob);
//     if (file) {
//       const formData = new FormData();
//       formData.append("video", blob);
//       // formData.append("privacy", "public");
//       // formData.append("category_id", 3);
//       // formData.append("classification_id", 2);
//       formData.append("random_title", randomFileName);
//       formData.append("chunkIndex", uploadedChunks);
//       formData.append("totalChunks", totalChunks);
//       const data = {
//         video: blob,
//         random_title: randomFileName,
//         chunkIndex: uploadedChunks,
//         totalChunks,
//       };
//       console.log(data);
//       const fileId = Date.now(); // Generate a unique fileId
//       dispatch(addUpload({ fileId }));
//       axios
//         .post(`${URL2}/api/post/post-create-video`, data, {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//           onUploadProgress: (progressEvent) => {
//             const progress = Math.round((uploadedChunks / totalChunks) * 100);
//             setProgress(progress);

//             if (progress === 100) {
//               setUploadComplete(true);
//             }
//             dispatch(setPercentage({ fileId, progress }));
//           },
//         })
//         .then(function (response) {
//           console.log(response);
//           if (response?.data?.original?.data.path) {
//             dispatch(finishUpload({ fileId }));
//             if (uploadedChunks < totalChunks) {
//               handleUpload();
//             } else {
//               setVideoPath(response?.original?.data.path);
//               setUploadComplete(true);
//               console.log("Upload complete");
//               setPath(response?.original?.data.path);
//               // console.log(response);
//               const formData2 = new FormData();
//               formData2.append("video", response?.original?.data.path);
//               formData2.append("privacy", "public");
//               formData2.append("category_id", 3);
//               formData2.append("classification_id", 2);
//               if (text) {
//                 formData2.append("text", text);
//               }
//               axios
//                 .post(`${URL2}/api/post/create_post`, formData2, {
//                   headers: {
//                     "Content-Type": "multipart/form-data",
//                     Authorization: `Bearer ${token}`,
//                   },
//                 })
//                 .then(function (response) {
//                   dispatch(refrechPosts());

//                   console.log(response);
//                 })
//                 .catch(function (error) {
//                   console.log("Upload error:", error);
//                 });
//             }
//           } else {
//             console.log("Upload failed:", response);
//           }
//           uploadedChunks++;
//         })
//         .catch(function (error) {
//           console.log("Upload error:", error);
//         });
//     }
//   };

//   return (
//     <div className={`col-lg-12 mb-3 ${themeColor}`}>
//       <div onClick={() => handleUpload()}>sadasd</div>
//       <div className="card mt-3 border-0">
//         {file ? (
//           <div className="w-100 m-auto position-relative">
//             <video width="100%" height="300px" controls>
//               <source src={URL.createObjectURL(file)} type="video/mp4" />
//             </video>
//           </div>
//         ) : (
//           <div className="card-body d-flex justify-content-between align-items-end p-0">
//             <div className="form-group mb-0 w-100">
//               <input
//                 type="file"
//                 name="file"
//                 id="file"
//                 accept=".mp4"
//                 className="input-file"
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//               <label
//                 htmlFor="file"
//                 className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed"
//               >
//                 <span className="js-fileName">{t("Upload")}</span>
//               </label>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default File;
