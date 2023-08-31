import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./Albums.module.css";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [newAlbum, setNewAlbum] = useState("");
  const [loading, setLoading] = useState(true);

  const albumsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [albumsResponse, photosResponse] = await Promise.all([
          axios.get(
            `https://jsonplaceholder.typicode.com/albums?page=${currentPage}`
          ),
          axios.get(
            `https://jsonplaceholder.typicode.com/photos?_limit=${albumsPerPage}`
          ),
        ]);
        setAlbums(albumsResponse.data);
        setPhotos(photosResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleNewAlbumChange = (event) => {
    setNewAlbum(event.target.value);
  };

  const addAlbum = async () => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/albums`,
        {
          title: newAlbum,
        }
      );

      setNewAlbum("");
      setAlbums((prevAlbums) => [...prevAlbums, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAlbums.length / albumsPerPage);

  return (
    <div className={style.Albums__wrapper}>
      <div className={style.Albums__container}>
        <div className={style.Albums__title}>
          <h1>Albums</h1>
        </div>
        <div className={style.Albums__back}>
          <button>
            <Link className={style.Albums__link} to="/">
              {" "}
              Назад
            </Link>
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className={style.Albums__inputs}>
              <div className={style.Albums__filter}>
                <input
                  type="text"
                  value={filter}
                  onChange={handleFilterChange}
                />
              </div>
              <div className={style.Albums__add}>
                <input
                  type="text"
                  value={newAlbum}
                  onChange={handleNewAlbumChange}
                />
                <button onClick={addAlbum}>Add Album</button>
              </div>
            </div>

            <div className={style.Albums__photos}>
              <AlbumList
                className={style.Albums__photos}
                albums={filteredAlbums}
                photos={photos}
              />
            </div>

            <div className={style.Albums__paginations}>
              <ul className={style.Albums__ul}>
                {Array.from(Array(totalPages).keys()).map((pageNumber) => (
                  <div>
                    <li className={style.Albums__li} key={pageNumber}>
                      <button onClick={() => handlePageChange(pageNumber + 1)}>
                        {pageNumber + 1}
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function AlbumList({ albums, photos }) {
  return albums.map((album) => (
    <div key={album.id}>
      {/* <h3>{album.title}</h3> */}
      <PhotoList
        photos={photos.filter((photo) => photo.albumId === album.id)}
      />
    </div>
  ));
}

function PhotoList({ photos }) {
  return photos.map((photo) => (
    <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
  ));
}

export default Albums;
