
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
// import MainMenu from "../../components/MainMenu/MainMenu"
import {  MainMenu } from "/src/components";


const Profile = () => {


    const mainMenuLabels = [
        { name: "من المنصورة", icon: home },
        { name: "درس في جامعة المنصورة ", icon: graduation },
        { name: "يعمل في شركة مصر ", icon: freelance },
        { name: "ولد 12 سبتمبر 2002 ", icon: cake },
        { name: " انضم في مارس 2020 ", icon: link },
    ];

    return (
        <>
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
                    <h2 className="hvr-underline-from-center"> طلب صداقة  20  .</h2>
                    <h2 className="hvr-underline-from-center">     صديق   320 </h2>

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
                            border: "none", width: "135px ", height: "38px ",
                        }}>
                        تعديل بياناتي
                    </button>
                </div>
            </div >

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


        </>
    );
};

export default Profile;