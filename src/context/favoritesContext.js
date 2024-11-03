// "use client";  // تأكد من إضافة هذا السطر

// import React, { createContext, useState, useEffect } from 'react';
// export const FavoritesContext = createContext();

// const FavoritesProvider = ({ children }) => {
//     const [favorites, setFavorites] = useState([]);

//     useEffect(() => {
//         const storedFavorites = localStorage.getItem('favorites');
//         if (storedFavorites) {
//             setFavorites(JSON.parse(storedFavorites));
//         }
//     }, []);

//     const toggleFavorite = (item) => {
//         const isFavorite = favorites.some(fav => fav.title === item.title);
//         const updatedFavorites = isFavorite 
//             ? favorites.filter(fav => fav.title !== item.title) 
//             : [...favorites, item];

//         setFavorites(updatedFavorites);
//         localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
//     };

//     return (
//         <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
//             {children}
//         </FavoritesContext.Provider>
//     );
// };

// export default FavoritesProvider;




"use client"; 

import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const toggleFavorite = (item) => {
        const isFavorite = favorites.some(fav => fav.title === item.title);
        const updatedFavorites = isFavorite 
            ? favorites.filter(fav => fav.title !== item.title) 
            : [...favorites, item];

        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const getFavoritesCount = () => {
        return favorites.length;
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, getFavoritesCount }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;