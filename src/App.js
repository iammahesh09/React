import "./App.css";
import Posts from "./components/Posts/Posts";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const app_name = "React";
  return (
    <div className="App">
      <div className="container">
        <h2 className="display-4 my-2 text-center text-uppercase fw-bold">
          Hello {app_name}
        </h2>
        <hr />
        <ThemeContext.Provider value="dark">
          <Posts />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;
