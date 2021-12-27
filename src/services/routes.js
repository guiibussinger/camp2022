import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PokemonsList from '../pages/PokemonsList';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
