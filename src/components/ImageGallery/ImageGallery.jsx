import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import s from "../ImageGallery/ImageGallery.module.css";

export const ImageGallery = ({ array, onClick }) => {
    return (
        <ul className={s.gallery} onClick={onClick}>
            {array.map(({ id, webformatURL, largeImageURL }) => {
                return <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />
            })}
        </ul>
    )
};
