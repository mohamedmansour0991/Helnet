import { useNavigate } from "react-router-dom";
import { PFP } from "../../../assets/images";
import { vertical3dots } from "../../../assets/images/icons";
import Dropdown from "../dropdown/Dropdown";
import "./PostHeader.scss";
import { useSelector } from "react-redux";

export default function PostHeader({ user, notPar }) {
  const myUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const openProfile = () => {
    navigate("/");
  };
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  return (
    <div className="postHeader">
      <div className="postHeader__user">
        <img
        onClick={()=>navigate(`/profile/${user.user.id}`)}
          className="postHeader__user--image"
          role="button"
          src={
            user?.user?.profile?.image
              ? `${URL}/storage/${user?.user?.profile?.image}`
              : PFP
          }
          alt="PFP"
        />

        <div className="postHeader__user--data">
          <div className="userData">
            <p className="name" role="button" onClick={openProfile}>
              {user?.user?.first_name} {user?.user?.last_name}
            </p>
          </div>
          {/* <p className="postingTime">{moment(e?.created_at).fromNow(true)}</p> */}
        </div>
      </div>
      {!notPar && (
        <>
          {myUser.id == user.user_id && (
            <div className="postHeader__aside">
              <Dropdown
                buttonData={<img src={vertical3dots} alt="" role="button" />}
                labels={["Edit", "Delete"]}
                post_id={user.id}
                post={user}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
