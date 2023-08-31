import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Album() {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [selectedAlbumPhotos, setSelectedAlbumPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        console.log(response, "response");
        setAlbums(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedAlbumId) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}`
        )
        .then((response) => {
          setPhotos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedAlbumId]);

  useEffect(() => {
    if (selectedAlbumId) {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}`
        )
        .then((response) => {
          setSelectedAlbumPhotos(response.data); // Здесь используем setSelectedAlbumPhotos для установки полученного массива фотографий в состояние
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedAlbumId]);

  useEffect(() => {
    const totalPages = Math.ceil(albums.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [albums.length, itemsPerPage]);

  const handleAlbumClick = (albumId) => {
    setSelectedAlbumId(albumId);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset current page when search term changes
  };

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAlbums = filteredAlbums.slice(indexOfFirstItem, indexOfLastItem);

  const renderAlbums = currentAlbums.map((album) => {
    const isSelected = selectedAlbumId === album.id;
    return (
      <div key={album.id} onClick={() => handleAlbumClick(album.id)}>
        <h3>{album.title}</h3>
        {isSelected &&
          photos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
      </div>
    );
  });

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageChange(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div>
      <h1>Albums</h1>
      <button>
        <Link to="/">Назад</Link>
      </button>
      <input type="text" placeholder="Search Albums" onChange={handleSearch} />
      <div>{renderAlbums}</div>
      <div>
        <h2>Pagination</h2>
        {renderPaginationButtons()}
      </div>
      {selectedAlbumId && (
        <div>
          {selectedAlbumPhotos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Album;
