import manager from "../../assets/images/project-manager.png"
import student from "../../assets/images/student.png"
import ButtonsForm from "../../components/buttonsForm/buttonsForm";
import Card from "../../components/card/card";

const UserKind = () => {


    return (
        <div className="container">
            <div className="row m-5 no-gutters">

                <div className="bg-white p-5" >
                    <h1 className="title" style={{ marginBottom: "66px" }}> من هو المستخدم؟</h1>


                    <div className="form-style" style={{ textAlign: "center" }}>

                        <div style={{ display: "flex", justifyContent: "center", marginBottom: "100px", flexFlow: "wrap" }}>


                            <Card imageSrc={student} title=" مستخدم عادي " />
                            <Card imageSrc={manager} title=" مقدم خدمة " />

                        </div>


                        <ButtonsForm />

                    </div>
                </div>
                {/* <ToastContainer /> */}

                <style>
                    {`
          @media (max-width: 538px) {
            .title {
                font-size: 32px;
            }
            .no-gutters{
                margin-left: 0!important;
                margin-right: 0!important;
                padding-left: 0!important;
                padding-right: 0!important;
            }
            .bg-white{
                padding-left: 0!important;
                padding-right: 0!important;
            }
          }
        `}
                </style>

            </div>
        </div >
    );
};

export default UserKind;