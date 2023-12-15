import home from "../../assets/images/home.png"
import graduation from "../../assets/images/graduation.png"
import freelance from "../../assets/images/freelance.png"
import cake from "../../assets/images/cake.png"
import link from "../../assets/images/link.png"
import Rectangle from "../../assets/images/Rectangle.png"
import profilePic from "../../assets/images/profilePic.png"
import delet from "../../assets/images/delete.png"


const Notifcations = () => {
    const mainMenuLabels = [
        { name: "من المنصورة", icon: home },
        { name: "درس في جامعة المنصورة ", icon: graduation },
        { name: "يعمل في شركة مصر ", icon: freelance },
        { name: "ولد 12 سبتمبر 2002 ", icon: cake },
        { name: " انضم في مارس 2020 ", icon: link },
    ];

    return (
        <>

            {/* sidebar */}
            <div className="row" style={{ flexFlow: "wrap", direction: "rtl" }} >
                <aside className="mainMenu profile-card2" style={{ textAlign: "right", position: "static" }}>
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

                    {/* التكرار حسب اليوم  */}
                    <h1 className="" style={{ fontSize: "20px", fontWeight: "700", color: "#2F2F31" }}>: اليوم </h1>
                    <img className="pic2 mb-3" src={Rectangle} alt="" />
                    <ul className="mainMenu__List" style={{ minWidth: "0rem", paddingInlineStart: "0rem", gap: "1.6rem", position: "static" }}>
                        {/* {mainMenuLabels.map((tap, index) => ( */}
                        <>
                            <li
                                // key={index}
                                role="button" style={{ direction: "rtl", textAlign: "right", display: "flex" }}
                            // onClick={() => {
                            //     navigate(`/${tap.name}`);
                            // }}
                            >
                                {/*نظهر الزرار .. طلب صداقة  */}

                                {/* <img src={profilePic} alt="profile" />
                            <p style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px", marginLeft: "14rem" }}>
                                محمد عمرو  <span style={{ fontWeight: "400" }}>  أرسل إليك طلب صداقة</span>
                            </p>

                            <button
                                type="submit"
                                className="btn btn-dark font-weight-bold logbtn"
                                style={{
                                    background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                    borderRadius: "6px",
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    height: "25px",
                                    border: "none",
                                    marginTop: "5px",
                                    display: "flex",
                                    padding: "3px 29px", marginRight: "46px",
                                    color: "white"
                                }}
                            >
                                موافقة
                            </button>
                            <img className="delete" src={delet} alt="profile" /> */}

                                {/* بدون الزرار ..اشعار عادى */}
                                <img src={profilePic} alt="profile" />
                                <p className="par" style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px", marginLeft: "14rem" }}>
                                    سارة محمود  <span style={{ fontWeight: "400" }}> علقت على منشور لك </span>
                                </p>


                            </li>
                            <hr />
                            <li

                                role="button" style={{ direction: "rtl", textAlign: "right", display: "flex" }}
                            // onClick={() => {
                            //     navigate(`/${tap.name}`);
                            // }}
                            >

                                <img src={profilePic} alt="profile" />
                                <p className="par" style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px", marginLeft: "14rem" }}>
                                    محمد عمرو  <span style={{ fontWeight: "400" }}>  أرسل إليك طلب صداقة</span>
                                </p>

                                <button
                                    type="submit"
                                    className="btn btn-dark font-weight-bold logbtn"
                                    style={{
                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                        borderRadius: "6px",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        letterSpacing: "1px",
                                        height: "25px",
                                        border: "none",
                                        marginTop: "5px",
                                        display: "flex",
                                        padding: "3px 29px", marginRight: "46px",
                                        color: "white"
                                    }}
                                >
                                    موافقة
                                </button>
                                <img className="delete" src={delet} alt="profile" />




                            </li>
                            <hr />
                        </>
                        {/* ))} */}
                    </ul>


                    <h1 className="" style={{ fontSize: "20px", fontWeight: "700", color: "#2F2F31" }}>: الامس </h1>
                    <img className="pic2 mb-3" src={Rectangle} alt="" />
                    <ul className="mainMenu__List" style={{ minWidth: "0rem", paddingInlineStart: "0rem", gap: "1.6rem", position: "static" }}>
                        {/* {mainMenuLabels.map((tap, index) => ( */}
                        <>
                            <li
                                // key={index}
                                role="button" style={{ direction: "rtl", textAlign: "right", display: "flex" }}
                            // onClick={() => {
                            //     navigate(`/${tap.name}`);
                            // }}
                            >

                                <img src={profilePic} alt="profile" />
                                <p className="par" style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px", marginLeft: "14rem" }}>
                                    محمد عمرو  <span style={{ fontWeight: "400" }}>  أرسل إليك طلب صداقة</span>
                                </p>

                                <button
                                    type="submit"
                                    className="btn btn-dark font-weight-bold logbtn"
                                    style={{
                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                        borderRadius: "6px",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        letterSpacing: "1px",
                                        height: "25px",
                                        border: "none",
                                        marginTop: "5px",
                                        display: "flex",
                                        padding: "3px 29px", marginRight: "46px",
                                        color: "white"
                                    }}
                                >
                                    موافقة
                                </button>
                                <img className="delete" src={delet} alt="profile" />

                            </li>
                            <hr />
                            <li

                                role="button" style={{ direction: "rtl", textAlign: "right", display: "flex" }}
                            // onClick={() => {
                            //     navigate(`/${tap.name}`);
                            // }}
                            >

                                <img src={profilePic} alt="profile" />
                                <p className="par" style={{ marginTop: "4px", fontWeight: "700", fontSize: "18px", marginLeft: "14rem" }}>
                                    محمد عمرو  <span style={{ fontWeight: "400" }}>  أرسل إليك طلب صداقة</span>
                                </p>

                                <button
                                    type="submit"
                                    className="btn btn-dark font-weight-bold logbtn"
                                    style={{
                                        background: " linear-gradient(#00ACFF75, #BD00FF58)",
                                        borderRadius: "6px",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                        letterSpacing: "1px",
                                        height: "25px",
                                        border: "none",
                                        marginTop: "5px",
                                        display: "flex",
                                        padding: "3px 29px", marginRight: "46px",
                                        color: "white"
                                    }}
                                >
                                    موافقة
                                </button>
                                <img className="delete" src={delet} alt="profile" />




                            </li>
                            <hr />
                        </>
                        {/* ))} */}
                    </ul>

                    <h3 className="" style={{ textAlign: "center", fontSize: "18px" }}>
                        <a className="notibutton" style={{ color: "#873fa9", fontWeight: "500" }} href="#"> الكل </a>
                    </h3>

                </aside>
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

export default Notifcations;