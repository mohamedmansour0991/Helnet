import home from "../../assets/images/home.png";
import graduation from "../../assets/images/graduation.png";
import freelance from "../../assets/images/freelance.png";
import cake from "../../assets/images/cake.png";
import link from "../../assets/images/link.png";
import Rectangle from "../../assets/images/Rectangle.png";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import profilePic from "../../assets/images/profilePic.png";
import closeing from "../../assets/images/close.png";
import friends from "../../assets/images/friends.png";
import delet from "../../assets/images/delete.png";
import padlock from "../../assets/images/padlock.png";
import upload from "../../assets/images/upload.png";
import close2 from "../../assets/images/close2.png";
// import MainMenu from "../../components/MainMenu/MainMenu"
// import { MainMenu } from "/src/components";
import { Navbar, Aside, MainMenu } from "/src/components";
import Card from "../../components/card/card";
import { useTranslation } from "react-i18next";
import Posts from "../../components/posts/Posts";
import NotActive from "../../components/profileComponents/notActive/NotActive";
import BoxFirendsProfile from "../../components/profileComponents/boxFirendsProfile/BoxFirendsProfile";
import BoxAcceptFirendsProfile from "../../components/profileComponents/boxFirendsProfile/BoxAcceptFirendsProfile";
import { data } from "/public/fakeData";
import ProfileHeader from "../../components/profileHeader/ProfileHeader";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { getDataPostProfile } from "../../components/posts/getDataPost";
import PostsProfile from "../../components/posts/PostsProfile";

const Profile = () => {
  const { token, deletePost_id, update, user } = useSelector(
    (state) => state.auth
  );
  const params = useParams().id;

  const { items, hasMore, loadMore } = getDataPostProfile(
    1,
    token,

    `post/get_post_user/${params}`
  );

  const [mainMenu, setMainMenu] = useState();

  const mainMenuLabels = [
    {
      name: mainMenu?.country_name ? mainMenu?.country_name : "لايوجد",
      icon: home,
    },
    { name: mainMenu?.city, icon: home },
    { name: mainMenu?.study_at, icon: graduation },
    // { name: "يعمل في شركة مصر ", icon: freelance },
    { name: mainMenu?.borned_in, icon: cake },
    // { name: " انضم في مارس 2020 ", icon: link },
  ];

  const { t } = useTranslation();
  const direction = localStorage.getItem("direction");
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  let [isOpen2, setIsOpen2] = useState(false);

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  return (
    <>
      {/* mycover */}
      <div className="bg-body">
        <Navbar />
        <ProfileHeader openModal={openModal} setMainMenu={setMainMenu} />
        <main className={`main mt-4 ${direction}`}>
          <MainMenu mainMenuLabels={mainMenuLabels} />
          <div className="container">
            <div className="d-flex flex-column">
              {" "}
              {mainMenu?.status == 0 && <NotActive openModal2={openModal2} />}
              {user.id == mainMenu?.user_id ? (
                <PostsProfile data={items} />
              ) : (
                <>
                  {mainMenu?.privacy == "private" &&
                  mainMenu?.follow == "unfriend" ? (
                    <>
                      <div
                        className="card__center w-100 mb-3"
                        style={{ backgroundColor: "#fff" }}
                      >
                        <div className="w-100 p-4">
                          <div
                            className="gap-2 mb-3"
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              className=""
                              src={padlock}
                              alt=""
                              style={{ width: "30px" }}
                            />
                            <h1>حساب خاص</h1>
                          </div>
                          <p className="card-text">
                            هذا حساب خاص لا يمكنك مشاهدة منشورات كريم، يرجى ضغط
                            زر “إضافة صديق” لإرسال طلب صداقة.
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <PostsProfile data={items} />
                  )}
                </>
              )}
            </div>
          </div>
          <Aside />
        </main>
      </div>

      {/* my model */}
      <Transition
        direction={direction}
        appear
        show={isOpen}
        as={Fragment}
        style={{ zIndex: "1000000" }}
      >
        <Dialog
          as="div"
          className="position-relative z-10 "
          style={{ direction: "rtl" }}
          onClose={closeModal}
          direction={direction}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className="flex items-center justify-start p-4 text-center"
              //   style={{ minHeight: "72rem", paddingLeft: "6rem!important" }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full transform  rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all"
                  style={{
                    maxWidth: "23rem",
                    maxHeight: "33rem",
                    overflow: "auto",
                    direction: direction,
                  }}
                >
                  <Dialog.Title
                    as="h3"
                    style={{ fontWeight: "700" }}
                    className="text-lg leading-6 text-gray-900"
                  >
                    الأصدقاء
                    <a className="" onClick={closeModal}>
                      <img
                        className="profile-pic3"
                        style={{ top: "19px" }}
                        src={closeing}
                        alt=""
                      />{" "}
                    </a>
                  </Dialog.Title>
                  <div className="mt-2">
                    <BoxFirendsProfile />
                    <BoxAcceptFirendsProfile />
                    <BoxFirendsProfile />
                    <BoxAcceptFirendsProfile />
                    <BoxFirendsProfile />
                    <BoxAcceptFirendsProfile />
                    <BoxFirendsProfile />
                    <BoxAcceptFirendsProfile />
                    <BoxFirendsProfile />
                    <BoxAcceptFirendsProfile />
                    <BoxFirendsProfile />
                    <BoxAcceptFirendsProfile />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* red div */}

      {/* موديل توثيق الحساب  */}
      <Transition
        appear
        show={isOpen2}
        as={Fragment}
        style={{ zIndex: "10000" }}
      >
        <Dialog as="div" lassName="position-relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-4 text-end">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full transform  rounded-2xl bg-white text-end align-middle shadow-xl transition-all"
                  style={{
                    maxWidth: "70%",
                    maxHeight: "100%",
                    overflow: "auto",
                  }}
                >
                  <Dialog.Title
                    as="h3"
                    style={{
                      fontWeight: "400",
                      backgroundColor: "#A74ED1",
                      color: "#fff",
                      //   padding: "12px 26px",
                    }}
                    className="text-lg leading-6 text-gray-900"
                  >
                    <h3 className="text-end font-xl p-3">توثيق الحساب</h3>

                    <a className="cursor-pointer" onClick={closeModal2}>
                      <img
                        className="profile-pic3"
                        style={{
                          top: "13px",
                          width: " 22px",
                          padding: " 3px",
                          backgroundColor: "#fff",
                        }}
                        src={close2}
                        alt=""
                      />{" "}
                    </a>
                  </Dialog.Title>
                  <form
                    style={{ padding: "22px" }}
                    action="#"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // handleUpload(e);
                    }}
                  >
                    <div className="row">
                      <div className={`col-lg-12`}>
                        <div className="form-group">
                          <label
                            className="mont-font fw-600"
                            style={{ fontSize: "25px", fontWeight: "500" }}
                          >
                            {" "}
                            أضف صورة البطاقة الشخصية من الأمام والخلف
                          </label>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "end",
                              flexFlow: "wrap",
                            }}
                          >
                            <Card
                              style={{ fontWeight: "400", width: "100px" }}
                              imageSrc={upload}
                              title=" أضف صورة 2"
                            />
                            <Card
                              style={{ fontWeight: "400" }}
                              imageSrc={upload}
                              title=" أضف صورة 1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-12`}>
                        <div className="form-group">
                          <label
                            className="mont-font fw-600 "
                            style={{ fontSize: "25px", fontWeight: "500" }}
                          >
                            {" "}
                            أضف صورة لك مع البطاقة الشخصية من الأمام والخلف
                          </label>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "end",
                              flexFlow: "wrap",
                            }}
                          >
                            <Card
                              style={{ fontWeight: "400" }}
                              imageSrc={upload}
                              title=" أضف صورة 2"
                            />
                            <Card
                              style={{ fontWeight: "400" }}
                              imageSrc={upload}
                              title=" أضف صورة 1"
                            />
                          </div>
                        </div>
                      </div>
                      <div className={`col-lg-12`}>
                        <div className="form-group">
                          <label
                            className="mont-font fw-600 "
                            style={{ fontSize: "25px", fontWeight: "500" }}
                          >
                            {" "}
                            أضف صورة شهادة التخرج
                          </label>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "end",
                              flexFlow: "wrap",
                            }}
                          >
                            {/* <Card imageSrc={upload} title=" أضف صورة 2" /> */}
                            <Card
                              style={{ fontWeight: "400" }}
                              imageSrc={upload}
                              title=" أضف صورة 1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pb-2">
                      <button
                        type="submit"
                        className="btn btn-dark w-100 font-weight-bold logbtn"
                        style={{
                          background: " linear-gradient(#00ACFF75, #BD00FF58)",
                          borderRadius: "18px",
                          fontSize: "24px",
                          fontWeight: "600",
                          letterSpacing: "1px",
                          marginTop: "3.5rem",
                          border: "none",
                          height: "46px",
                        }}
                      >
                        طلب توثيق
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* sidebar */}

      {/* حساب خاص */}

      <style>
        {`
                 @media (max-width: 600px) {
                  .profile-pic{
                    top: -46px;
                    right: 18px;

                  }
                  .profile-pic3{
                    max-width: 30px;
                    top: -35px;

                  }
                  h2 {
                    font-size: 16px!important;

                  }
                  .profile-info{
                     margin-top: 0px; 
                     padding-top:15px;

                  }
                  .profile-title {
                    font-size: 21px!important;
                    margin-right: 0px!important;

                  }
                  .profile-pic2{
                    max-width: 18px;
                    top: 52px;
                    right: 100px;


                  }
                 
                 .card-body p {
                    font-size: 16px;

                  }
                }
                @media (max-width:  1091px) {
                    .profile-card2 {
                        width: 90%!important;
                    }

                }
               
               
                 `}
      </style>
    </>
  );
};
export default Profile;
