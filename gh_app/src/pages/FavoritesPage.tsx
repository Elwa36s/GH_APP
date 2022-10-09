import React from "react";
import { useAppSelector } from "../hooks/useAppSelector";

export const FavoritesPage = () => {
    const {favorites} = useAppSelector((state) => state.github);

    if (!favorites.length) {
        return <p className="text-center">No items</p>
    }

    return (
        <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
            <ul className="list-none">
                {
                    favorites.map((rep) => (
                        <li key={rep}>
                            <a href={rep} target="_blank">{rep}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
