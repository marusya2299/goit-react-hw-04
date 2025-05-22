import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";
import { Image } from "../../articles-api";

type ImageGalleryProps = {
  images: Image[];
  openModal: (image: Image) => void;
};

export default function ImageGallery({images, openModal}: ImageGalleryProps){

    return(
        <ul className={css.list}>
            {images.map(image => 
                <ImageCard key={image.id} image={image} openModal={() => openModal(image)} />
            )}
        </ul>
    )
}