import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense, lazy } from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const AsyncMainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AsyncAboutPage = lazy(() => import("./pages/AboutPage/AboutPage"));

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<AsyncMainPage />} />
          <Route path="/about" element={<AsyncAboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
