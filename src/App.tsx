import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./pages/Homepage";
import AppLayout from "./AppLayout";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="categories" element={<Categories />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
