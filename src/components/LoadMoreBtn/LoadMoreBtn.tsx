import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  loadMore: () => void;
};

export default function LoadMoreBtn({loadMore}: LoadMoreBtnProps){
    return(
        <button onClick={loadMore} className={css.button} type="submit">Load more</button>
    )
}