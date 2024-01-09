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

  const calculateTimeAgo = (commentDate) => {
    const currentDate = new Date();
    const commentDateTime = new Date(commentDate);
    const timeDifference = currentDate - commentDateTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days + ' Day';
    } else if (hours > 0) {
      return hours + ' Hour';
    } else if (minutes > 0) {
      return minutes + ' Minute';
    } else {
      return seconds + ' Second';
    }
  };
  return (
    <div className="postHeader">
      <div className="postHeader__user">
        <img
          onClick={() => navigate(`/profile/${user.user.id}`)}
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
          {calculateTimeAgo(user.created_at)}
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
