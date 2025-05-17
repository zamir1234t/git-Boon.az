import React, { createContext, useContext, useEffect, useState } from 'react';

export interface FavoriteItem {
  title: string;
  img: string;
  text: string;
  AZN: string;
  discount: number;
  azn: number;
  id?: number;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  
  useEffect(() => {
    const localFavorites = localStorage.getItem('favorites');
    if (localFavorites) {
      setFavorites(JSON.parse(localFavorites));
    }
  }, []);


  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      localStorage.removeItem('favorites');
    }
  }, [favorites]);

 
  const addToFavorites = (item: FavoriteItem) => {
    const isAlreadyInFavorites = favorites.some(fav => fav.title === item.title);
    if (!isAlreadyInFavorites) {
      setFavorites(prev => [...prev, { ...item, id: Date.now() }]);
    }
  };

 
  const removeFromFavorites = (id: number) => {
    setFavorites(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};