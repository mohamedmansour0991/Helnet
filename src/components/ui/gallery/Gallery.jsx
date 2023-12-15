import { useNavigate } from "react-router-dom";
import "./Gallery.scss";

export default function Gallery({ data }) {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate("/");
  };

  return (
    <div className="gallery">
      {data.slice(0, 5).map((image, index) => (
        <div key={index} className={`imageNo${index + 1}`}>
          <img src={image} alt="" />

          {data.length > 5 && (
            <>
              {index === 4 && (
                <p onClick={handelClick} className="gallery__indicator">
                  +{data.length - 5}
                </p>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
