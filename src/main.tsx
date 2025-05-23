import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hit from './router/Hitt';
import Neww from './router/Neww';
import Promotion from './router/Promotion';
import Catalog from './catalog/Catalog';
import App from './App';
import Store from './icon/store';
import { CartProvider } from './context/greatecontext'; 
import { FavoritesProvider } from './context/favoriteContext';
import Men from './catalog/men';
import Children from './catalog/children';
import Games from './catalog/games';
import Puzzles from './catalog/puzzles';
import Antistress from './catalog/Antistress';
import Favorites from './icon/favorites';
import Form from './icon/form';
import Company from './companyAll/company';
import Admin from './admin/admin';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <FavoritesProvider> 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/hit" element={<Hit />} />
              <Route path="/new" element={<Neww />} />
              <Route path="/promotion" element={<Promotion />} />
            </Route>
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/store" element={<Store />} />
            <Route path="/men" element={<Men />} />
            <Route path="children" element={<Children />} />
            <Route path="games" element={<Games />} />
            <Route path="puzzles" element={<Puzzles />} />
            <Route path="Antistress" element={<Antistress />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path='/form' element ={<Form />}/>
            <Route path='/company' element ={<Company />}/>
            <Route path='/admin' element ={<Admin />}/>
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </CartProvider>
  </StrictMode>
);