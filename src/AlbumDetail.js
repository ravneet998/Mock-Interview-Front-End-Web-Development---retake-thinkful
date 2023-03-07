import React, { useEffect, useState } from "react";

const AlbumDetail = ({ album }) => {
	const [photos, setPhotos] = useState([]);
    const [albumId, setAlbumId] = useState(album.id);
    const [clicked, setClicked] = useState(false);
    let photoList;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then((response) => response.json())
            .then(setPhotos)
            .catch((errors) => console.log(errors));
    }, [albumId]);

    if (photos) {
        photoList = photos.map((photo) => {
            return (
                <div key={photo.id}>
                    <p>{photo.title}</p>
                    <img src={photo.url} alt={photo.title} />
                </div>
            )
        });
    }

	return (
        <div key={album.id}>
            <h2 onClick={() => {
                setClicked(true)
                setAlbumId(album.id)
            }}>{album.title}</h2>
            <p>{photos.title}</p>
            <p>{clicked ? photoList.slice(0, 10) : null}</p>
        </div>
    );
};

export default AlbumDetail;