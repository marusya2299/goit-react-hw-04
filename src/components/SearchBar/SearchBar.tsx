import css from "../SearchBar/SearchBar.module.css";
import toast, {Toaster} from 'react-hot-toast';
import React from "react";

type SearchBarProps = {
  onSubmit: (search: string) => void;
};

export default function SearchBar({onSubmit}: SearchBarProps){

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       event.preventDefault();
        const form = event.currentTarget;
        const searchInput = form.elements.namedItem("search") as HTMLInputElement;
        const search = searchInput.value.trim();

        if (search === "") {
        toast.error("Please enter data");
        } else {
        onSubmit(search);
        }

        form.reset();
    }

return(
    <header className={css.box}>
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="search"
            />
            <button className={css.button} type="submit">Search</button>
        </form>
        <Toaster />
    </header>
  )
}