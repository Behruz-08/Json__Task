function PhotoList({ photos }) {
  return photos.map((photo) => (
    <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
  ));
}

export { PhotoList };
