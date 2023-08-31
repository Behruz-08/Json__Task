// function AlbumList({ albums, photos }) {
//   return albums.map((album) => (
//     <div key={album.id}>
//       <h3>{album.title}</h3>
//       <PhotoList
//         photos={photos.filter((photo) => photo.albumId === album.id)}
//       />
//     </div>
//   ));
// }

// export default AlbumList;

// function AlbumList({ albums, photos }) {
//   return albums.map((album) => (
//     <div key={album.id}>
//       <h3>{album.title}</h3>
//       <PhotoList
//         photos={photos.filter((photo) => photo.albumId === album.id)}
//       />
//     </div>
//   ));
// }

// export { AlbumList };

function AlbumList({ albums, photos, PhotoList }) {
  return albums.map((album) => (
    <div key={album.id}>
      <h3>{album.title}</h3>
      <PhotoList
        photos={photos.filter((photo) => photo.albumId === album.id)}
      />
    </div>
  ));
}
export { AlbumList };
