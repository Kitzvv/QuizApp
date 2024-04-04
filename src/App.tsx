import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./ui/GlobalStyles";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";
import Categories from "./pages/Categories";

import ChooseDificulty from "./pages/ChooseDifficulty";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="categories" element={<Categories />}></Route>
          <Route
            path="difficulty/:category"
            element={<ChooseDificulty />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
