import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: false }, [theme])}
    >
      <Navbar />
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};

export default App;
