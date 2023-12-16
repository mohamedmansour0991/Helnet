
import cover from "../../assets/images/cover.png"
import character from "../../assets/images/character.png"
import vector from "../../assets/images/Vector.png"
import camera2 from "../../assets/images/camera2.png"
import home from "../../assets/images/home.png"
import graduation from "../../assets/images/graduation.png"
import freelance from "../../assets/images/freelance.png"
import cake from "../../assets/images/cake.png"
import link from "../../assets/images/link.png"
import Rectangle from "../../assets/images/Rectangle.png"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from 'react'
import profilePic from "../../assets/images/profilePic.png"
import closeing from "../../assets/images/close.png"
import friends from "../../assets/images/friends.png"
import delet from "../../assets/images/delete.png"
import padlock from "../../assets/images/padlock.png"
import upload from "../../assets/images/upload.png"
import close2 from "../../assets/images/close2.png"
// import MainMenu from "../../components/MainMenu/MainMenu"
// import { MainMenu } from "/src/components";

import Card from "../../components/card/card";

const Profile = () => {
    const mainMenuLabels = [
        { name: "من المنصورة", icon: home },
        { name: "درس في جامعة المنصورة ", icon: graduation },
        { name: "يعمل في شركة مصر ", icon: freelance },
        { name: "ولد 12 سبتمبر 2002 ", icon: cake },
        { name: " انضم في مارس 2020 ", icon: link },
    ];


    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    let [isOpen2, setIsOpen2] = useState(false)

    function closeModal2() {
        setIsOpen2(false)
    }

    function openModal2() {
        setIsOpen2(true)
    }


    return (
        <>


            {/* mycover */}

            <div
                className="profile-card text-start">
                <img
                    className="img-responsive "
                    src={cover}
                    alt=""
                />
                <div className="profile-info">
                    <img className="profile-pic3" src={camera2} alt="" />
                    <img className="profile-pic" src={character} alt="" />
                    <h2 className="hvr-underline-from-center" onClick={openModal}> طلب صداقة  20  .</h2>
                    <h2 className="hvr-underline-from-center" onClick={openModal}>     صديق   320 </h2>

                    <h1 className="profile-title">كريم سيف  <img className="profile-pic2" src={vector} alt="" /></h1>
                    <h1 className="profile-title" style={{ opacity: "0.7", fontSize: "25px", marginRight: "43px" }}>   مبرمج فى ألمانيا</h1>
                </div>
                <div className="pb-2">
                    <button
                        type="submit"
                        className="btn btn-dark font-weight-bold logbtn"
                        style={{
                            background: " linear-gradient(#00ACFF75, #BD00FF58)", borderRadius: "11px", fontSize: "18px "
                            , fontWeight: "600", letterSpacing: "1px", marginBottom: "0.5rem", marginLeft: "1rem",
                            border: "none", width: "135px ", height: "38px "
                        }}>
                        تعديل بياناتي
                    </button>
                </div>
            </div >


            {/* my model */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        <div className="flex items-center justify-start p-4 text-center"
                            style={{ minHeight: "72rem", paddingLeft: "6rem!important" }}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full transform  rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all"
                                    style={{ maxWidth: "23rem", maxHeight: "33rem", overflow: "auto" }}>
                                    <Dialog.Title
                                        as="h3" style={{ fontWeight: "700" }}
                                        className="text-lg leading-6 text-gray-900"
                                    >
                                        الأصدقاء

                                        <a className="" onClick={closeModal}>
                                            <img className="profile-pic3" style={{ top: "19px" }} src={closeing} alt="" /> </a>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>

                                                <img className="delete" src={delet} alt="profile" />
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    قبول
                                                </button>


                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>
                                        <div className="sideBarLeft__card chosen">
                                            <div className="sideBarLeft__card--element"
                                                style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    boxShadow: "0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .5)",
                                                    padding: " 9px 12px",
                                                    borderRadius: "16px"
                                                }}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-dark font-weight-bold logbtn"
                                                    style={{
                                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                                        borderRadius: "26px",
                                                        fontSize: "12px",
                                                        fontWeight: "600",
                                                        letterSpacing: "1px",
                                                        height: "25px",
                                                        border: "none",
                                                        marginTop: "5px",
                                                        display: "flex",
                                                        padding: "3px 15px", marginRight: "46px"


                                                    }}
                                                >
                                                    <img src={friends} alt="profile" />     عرض الصفحة
                                                </button>
                                                <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px" }}>
                                                    محمد عمرو
                                                </p>

                                                <img src={profilePic} alt="profile" />
                                            </div>
                                        </div>

                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            {/* red div */}
            <div style={{
                backgroundColor: "#FB3B3B", color: "#ffff", width: "58%", marginBottom: "20px",
                height: "30px", textAlign: "center", margin: "auto", borderRadius: "5px"
            }}>
                <a className="red" href="#" onClick={openModal2} style={{ fontSize: "20px", fontWeight: "500" }}>هذا الحساب غير موثق حتى الآن</a>
            </div>

            {/* موديل توثيق الحساب  */}
            <Transition appear show={isOpen2} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full transform  rounded-2xl bg-white text-end align-middle shadow-xl transition-all"
                                    style={{ maxWidth: "70%", maxHeight: "100%", overflow: "auto" }}>
                                    <Dialog.Title
                                        as="h3" style={{ fontWeight: "400", backgroundColor: "#A74ED1", color: "#fff", padding: "12px 26px" }}
                                        className="text-lg leading-6 text-gray-900"
                                    >
                                        <h3 className="text-end font-xl ">توثيق الحساب</h3>

                                        <a className="cursor-pointer" onClick={closeModal2}>
                                            <img className="profile-pic3" style={{ top: "13px", width: " 22px", padding: " 3px", backgroundColor: "#fff" }} src={close2} alt="" /> </a>
                                    </Dialog.Title>
                                    <form style={{ padding: "22px" }}
                                        action="#"
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            // handleUpload(e);
                                        }}
                                    >
                                        <div className="row">
                                            <div className={`col-lg-12`}>
                                                <div className="form-group">
                                                    <label className="mont-font fw-600"
                                                        style={{ fontSize: "25px", fontWeight: "500" }}>
                                                        {" "}
                                                        أضف صورة البطاقة الشخصية من الأمام والخلف
                                                    </label>
                                                    <div style={{ display: "flex", justifyContent: "end", flexFlow: "wrap" }}>
                                                        <Card style={{ fontWeight: "400" }} imageSrc={upload} title=" أضف صورة 2" />
                                                        <Card style={{ fontWeight: "400" }} imageSrc={upload} title=" أضف صورة 1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`col-lg-12`}>
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 "
                                                        style={{ fontSize: "25px", fontWeight: "500" }}>
                                                        {" "}
                                                        أضف صورة  لك مع البطاقة الشخصية من الأمام والخلف
                                                    </label>
                                                    <div style={{ display: "flex", justifyContent: "end", flexFlow: "wrap" }}>
                                                        <Card style={{ fontWeight: "400" }} imageSrc={upload} title=" أضف صورة 2" />
                                                        <Card style={{ fontWeight: "400" }} imageSrc={upload} title=" أضف صورة 1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`col-lg-12`}>
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 "
                                                        style={{ fontSize: "25px", fontWeight: "500" }}>
                                                        {" "}
                                                        أضف صورة شهادة التخرج
                                                    </label>
                                                    <div style={{ display: "flex", justifyContent: "end", flexFlow: "wrap" }}>
                                                        {/* <Card imageSrc={upload} title=" أضف صورة 2" /> */}
                                                        <Card style={{ fontWeight: "400" }} imageSrc={upload} title=" أضف صورة 1" />
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
                                                    height: "46px"
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

            <aside className="profile-card2" style={{ textAlign: "right" }}>
                <h1 className="" style={{ fontSize: "20px", fontWeight: "700", color: "#2F2F31" }}>: معلومات شخصية </h1>
                <img className="pic2 mb-3" src={Rectangle} alt="" />
                <ul className="mainMenu__List" style={{ minWidth: "0rem", paddingInlineStart: "0rem" }}>
                    {mainMenuLabels.map((tap, index) => (
                        <li
                            key={index}
                            role="button" style={{ direction: "rtl", textAlign: "right" }}
                        // onClick={() => {
                        //     navigate(`/${tap.name}`);
                        // }}
                        >
                            <img className="pic2" src={tap.icon} alt="" />
                            <p>{tap.name}</p>

                        </li>
                    ))}
                </ul>
            </aside>

            {/* حساب خاص */}
            <div className="card profile-card2" style={{ textAlign: "right", width: "49.5rem", height: "181px", boxShadow: "none", border: "none" }}>
                <div className="card-body">
                    <div style={{ display: "flex", justifyContent: "right", marginBottom: "25px" }}>
                        <h1 className="" style={{ fontSize: "25px", fontWeight: "700", color: "#2F2F31", paddingTop: "11px" }}>حساب  خاص</h1>

                        <img className="" style={{ marginLeft: "20px" }} src={padlock} alt="" />
                    </div>
                    <p className="card-text" style={{ fontSize: "20px", color: "#666666", width: "613px", float: "right" }}>هذا حساب خاص لا يمكنك مشاهدة منشورات كريم، يرجى ضغط زر “إضافة صديق” لإرسال طلب صداقة.</p>
                </div>
            </div>




            <style>
                {`
                 @media (max-width: 600px) {
                  .profile-pic{
                    max-width: 90px;
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
