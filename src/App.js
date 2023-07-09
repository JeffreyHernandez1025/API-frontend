import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllPokemon from "./pages/AllPokemon";
import PokemonImage from "./pages/PokemonImage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Navigate to='' />} />
      <Route index element={<AllPokemon />} />
      <Route path="/pokemon" element={<PokemonImage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
