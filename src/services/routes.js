import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PokemonsList from '../pages/PokemonsList';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<PokemonsList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
