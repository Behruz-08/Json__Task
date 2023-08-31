import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PhotosBox() {
  const [photos, setPhotos] = useState([]);

  const [currentPage, setCurrentPege] = useState(1);

  const [fetching, setFetching] = useState(true);

  //   const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (fetching) {
      console.log("fetching");
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${currentPage}`
        )

        .then((response) => {
          setPhotos([...photos, ...response.data]);
          setCurrentPege((prevState) => prevState + 1);
          //   setTotalCount(response.headers["x-total-count"]);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      ("scrollHeight",
      e.target.documentElement.scrollHeight -
        ("scrollHeight",
        e.target.documentElement.scrollTop + window.innerHeight) <
        100)
      // 100 && photos.length < totalCount)
    ) {
      setFetching(true);
    }
  };

  return (
    <div>
      <button>
        <Link to="/">Назад</Link>
      </button>
      {photos.map((photo) => (
        <div key={photo.id}>
          <div>
            {photo.id}.{photo.title}
            <img src={photo.thumbnailUrl} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PhotosBox;
