import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./ui/GlobalStyles";
import AppLayout from "./ui/AppLayout";

import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import ChooseDifficulty from "./pages/ChooseDifficulty";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route
            path="choose-difficulty/:category"
            element={<ChooseDifficulty />}
          ></Route>
          <Route path="quiz/:category/:difficulty" element={<Game />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
