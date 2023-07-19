import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <AppHeader /> */}
        <main>
          <Routes>
            <Route path="/" element={<AppHeader />}>
              <Route index element={<MainPage />} />
              <Route path="comics" element={<AppBanner />}>
                <Route index element={<ComicsPage />} />
                <Route path=":comicId" element={<SingleComicPage />} />
                <Route path="*" element={<Page404 />} />
              </Route>
              <Route path="*" element={<Page404 />}></Route>
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
