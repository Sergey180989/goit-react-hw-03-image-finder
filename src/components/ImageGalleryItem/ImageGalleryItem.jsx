import s from "../ImageGalleryItem/ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
    return (
        <li className={s.galleryItem} >
            <img src={webformatURL} alt={largeImageURL} className={s.image} />
        </li>
    )
};
