import { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

import { fetchArticlesWithTopic } from "../../articles-api";
import { Image } from '../../articles-api';

export default function App(){

  const quantityImages :number = 4;
  const [articles, setArticles] = useState<Image[]>([]);
  const [visibleArticles, setVisibleArticles] = useState<number>(quantityImages);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleSearch = async (search: string) => {
    try{
      setArticles([]);
      setVisibleArticles(quantityImages);
      setError(false);
      setLoading(true);
      
      const data: Image[] = await fetchArticlesWithTopic(search);
      setArticles(data);
    }
    catch{
      setError(true);
    }
    finally{
      setLoading(false);
    }
  };

  function loadMore(): void{
    setVisibleArticles(prev => prev + quantityImages);
  }

  function openModal(image: Image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }
  
  return(
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      
      {articles.length > 0 && 
      <> 
        <ImageGallery images={articles.slice(0, visibleArticles)} openModal={openModal} /> 
        {modalIsOpen && selectedImage && <ImageModal isOpen={modalIsOpen} closeModal={closeModal} selectedImage={selectedImage} />}
      </>
     }
      {loading && <Loader />}
      {articles.length > visibleArticles && !loading && (<LoadMoreBtn loadMore={loadMore} />)}
    </>
  )

}