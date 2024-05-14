import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";

import Homepage from "./pages/Homepage";
import Categories from "./pages/Categories";
import ChooseDifficulty from "./pages/ChooseDifficulty";
import Game from "./pages/Game";
import Finish from "./pages/Finish";
import PageNotFound from "./pages/PageNotFound";
import { Navigate } from "react-router";
import GlobalStyles from "./ui/GlobalStyles";

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
          <Route path="finish" element={<Finish />} />
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
