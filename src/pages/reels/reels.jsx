import home from "../../assets/images/home.png"
import graduation from "../../assets/images/graduation.png"
import freelance from "../../assets/images/freelance.png"
import cake from "../../assets/images/cake.png"
import link from "../../assets/images/link.png"
import Rectangle from "../../assets/images/Rectangle.png"
import { Dialog, Transition } from '@headlessui/react'
import { useState } from "react"
import sea from "../../assets/videos/sea.mp4"
import { Fragment } from 'react'
import xicon from "../../assets/images/xicon.png"
import Union from "../../assets/images/Union.png"
import Subtract from "../../assets/images/Subtract.png"
import Left from "../../assets/images/Left.png"
import right from "../../assets/images/right.png"
import Heart from "../../assets/images/Heart.png"
import Ellipse from "../../assets/images/Ellipse.png"
import Plus from "../../assets/images/Plus.png"
import Shape from "../../assets/images/Shape.png"










const Reels = () => {

    // function classNames(...classes) {
    //     return classes.filter(Boolean).join(' ')
    // }

    // let [categories] = useState({
    //     Recent: [
    //         {
    //             id: 1,
    //             title: 'Does drinking coffee make you smarter?',
    //             date: '5h ago',
    //             commentCount: 5,
    //             shareCount: 2,
    //         },
    //         {
    //             id: 2,
    //             title: "So you've bought coffee... now what?",
    //             date: '2h ago',
    //             commentCount: 3,
    //             shareCount: 2,
    //         },
    //     ],
    //     Popular: [
    //         {
    //             id: 1,
    //             title: 'Is tech making coffee better or worse?',
    //             date: 'Jan 7',
    //             commentCount: 29,
    //             shareCount: 16,
    //         },
    //         {
    //             id: 2,
    //             title: 'The most innovative things happening in coffee',
    //             date: 'Mar 19',
    //             commentCount: 24,
    //             shareCount: 12,
    //         },
    //     ],
    //     Trending: [
    //         {
    //             id: 1,
    //             title: 'Ask Me Anything: 10 answers to your questions about coffee',
    //             date: '2d ago',
    //             commentCount: 9,
    //             shareCount: 5,
    //         },
    //         {
    //             id: 2,
    //             title: "The worst advice we've ever heard about coffee",
    //             date: '4d ago',
    //             commentCount: 1,
    //             shareCount: 2,
    //         },
    //     ],
    // })

    const mainMenuLabels = [
        { name: "من المنصورة", icon: home },
        { name: "درس في جامعة المنصورة ", icon: graduation },
        { name: "يعمل في شركة مصر ", icon: freelance },
        { name: "ولد 12 سبتمبر 2002 ", icon: cake },
        { name: " انضم في مارس 2020 ", icon: link },
    ];

    const addresses = [
        { name: "الكل" },
        { name: "العاب" },
        { name: "نادى برشلونة" },
        { name: "متنوع" },
        { name: "موسيقى" },
        { name: "تصميم واجهة مستخدم" },
        { name: "اتحاد الكرة" },
        { name: "شركة سامسونج " },
        { name: "الان" },
        // { name: "موسيقى" },
    ];

    const videos = [
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },
        { src: sea },

    ];


    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    // const handleCloseModal = () => {
    //     setSelectedVideo(null);
    // };


    let [isOpen2, setIsOpen2] = useState(false)

    function closeModal2() {
        setIsOpen2(false)
    }

    function openModal2() {
        setIsOpen2(true)
    }

    // مراجعة سطر 225

    return (
        <>

            {/* sidebar */}
            <div className="" style={{ flexFlow: "wrap", direction: "rtl" }} >
                <aside className="mainMenu profile-card2" style={{ textAlign: "right" }}>
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


                <aside className="profile-card2 myside" style={{ textAlign: "right", width: "47rem" }}>
                    <ul className="" style={{ display: "flex" }}>
                        {addresses.map((address, index) => (
                            <li key={index} role="button">
                                <button
                                    type="submit"
                                    className="btn btn-dark font-weight-bold reelbutton"
                                    style={{
                                        backgroundColor: "#fff",
                                        borderRadius: "12px",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        height: "25px",
                                        border: "1PX solid #c7c2c2",
                                        color: "black",
                                        lineHeight: "normal",
                                        marginLeft: "10px",
                                    }}
                                >
                                    {address.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <ul
                        className=""
                        style={{
                            display: "flex",
                            marginTop: "29px",
                            maxWidth: "100%",
                            height: "auto",
                            flexFlow: "wrap",
                            borderRadius: "16px",
                            position: "relative",
                            zIndex: "1",
                        }}
                    >
                        {videos.map((video, index) => (
                            <li
                                style={{ width: "24%", marginLeft: "7px", marginBottom: "5px" }}
                                key={index}
                                role="button"
                                onClick={() => {
                                    handleVideoClick(video);
                                    openModal2();
                                }}
                            >

                                <div
                                    className="singlePost__body--video"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                >
                                    <a href="#">
                                        {/* الشكل بيتكرر ف نفس المكان !!! */}
                                        <img className="profile-pic3" style={{ top: "11px", left: "139px" }} src={Shape} alt="" />
                                    </a>
                                    <video className="" preload="true" src={video.src} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>

                <Transition appear={true} show={isOpen2} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal2}>
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
                                        className="w-full transform rounded-2xl text-end align-middle shadow-xl transition-all"
                                        style={{
                                            maxWidth: "max-content", maxHeight: "100%", overflow: "auto", padding: "0 148px"
                                            , backgroundColor: "transparent!important"
                                        }}
                                    >
                                        <Dialog.Title
                                            as="h3" style={{ fontWeight: "700" }}
                                            className="text-lg leading-6 text-gray-900"
                                        >

                                            <a className="" onClick={closeModal2}>
                                                <img className="profile-pic3" src={xicon} alt=""
                                                    style={{ top: "2px", backgroundColor: " #D9D9D9", width: " 29px", padding: "7px" }} />
                                            </a>
                                        </Dialog.Title>
                                        {selectedVideo && (
                                            <div className="video-modal">
                                                <div className="video-modal__content">
                                                    <video style={{ borderRadius: "25px" }}
                                                        className="video-modal__video"
                                                        preload="true"
                                                        src={selectedVideo.src}
                                                        autoPlay
                                                        controls
                                                    />
                                                    <div className="video-modal__background" />


                                                    <a className="">
                                                        <img className="profile-pic3" src={Ellipse} alt=""
                                                            style={{ left: "35.5rem", top: "221px", width: "40px", padding: "3px" }} />
                                                    </a>
                                                    <a className="">
                                                        <img className="profile-pic3" src={Plus} alt=""
                                                            style={{ left: "36rem", top: "244px", width: "22px", padding: "3px" }} />
                                                    </a>
                                                    <a className="">
                                                        <img className="profile-pic3" src={Left} alt=""
                                                            style={{ left: "6rem", top: "231px", backgroundColor: " #D9D9D9", width: "30px", padding: "6px 9px" }} />
                                                    </a>
                                                    <a className="" >
                                                        <img className="profile-pic3" src={right} alt=""
                                                            style={{ left: "41rem", top: "231px", backgroundColor: " #D9D9D9", width: "30px", padding: "6px 9px" }} />
                                                    </a>
                                                </div>
                                                <a className="" >
                                                    <img className="profile-pic3" src={Heart} alt=""
                                                        style={{ left: "35.5rem", top: "277px", width: "40px", padding: "3px" }} />
                                                    {/* <p> 328.7K</p> */}
                                                </a>
                                                <a className="" >
                                                    <img className="profile-pic3" src={Subtract} alt=""
                                                        style={{ left: "35.5rem", top: "324px", width: "40px", padding: "3px" }} />
                                                </a>
                                                <a className="" >
                                                    <img className="profile-pic3" src={Union} alt=""
                                                        style={{ left: "35.5rem", top: "370px", width: "40px", padding: "3px" }} />
                                                </a>
                                            </div>
                                        )}
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>


            </div>





            <style>
                {`
                 @media (max-width: 800px) {
                  
                  li {
                    flex-flow: wrap;
                  }
                  .par {
                     margin-left: 0px!important; 
                  }
                }

                @media (max-width: 800px) {
                  .myside {
                    width:92%!important;
                  }
                  }
                 `}
            </style>

        </>
    );
};

export default Reels;