import { useNavigate, useParams } from "react-router-dom";
import "./Gallery.scss";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

export default function Gallery({ data, target }) {
  const navigate = useNavigate();
  const params = useParams();
  const [isInSinglePostPath, setIsInSinglePostPath] = useState(false);

  const handelClick = () => {
    navigate(`/singlePost/${target.id}`);
  };

  useEffect(() => {
    setIsInSinglePostPath(
      params.id && window.location.pathname.includes("/singlePost")
    );
  }, [params.id]);

  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const galleryItems = data.map((image) => ({
    original: `${URL}/storage/${image.image.path}`,
    thumbnail: `${URL}/storage/${image.image.path}`,
  }));

  return (
    <>
      {isInSinglePostPath ? (
        <div className="grid gap-4 rounded-xl">
          {/* {data.map((image, index) => (
            <div className="" key={index}>
              <img
                className="w-100 rounded-xl"
                src={`${URL}/storage/${image.image.path}`}
                alt=""
              />
            </div>
          ))} */}
          <ImageGallery items={galleryItems} />
        </div>
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
