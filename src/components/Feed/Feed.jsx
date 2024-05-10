import React from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

export default function Feed({ user }) {
    const [modalPhoto, setModalPhoto] = React.useState(null);

    return (
        <div>
            {modalPhoto && (
                <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
            )}
            <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
        </div>
    )
}