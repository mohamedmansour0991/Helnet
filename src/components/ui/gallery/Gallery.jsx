import { useNavigate } from "react-router-dom";
import "./Gallery.scss";

export default function Gallery({ data, target }) {
  const navigate = useNavigate();
  const handelClick = () => {
    navigate(target);
  };
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  console.log(data[0].image.path);
  return (
    <div className={`gallery with${data.length}`}>
      {data.slice(0, 5).map((image, index) => (
        <div
          key={index}
          className={`imageNo${index + 1}`}
          onClick={handelClick}
        >
          <img src={`${URL}/storage/${image.image.path}`} alt="" />

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
