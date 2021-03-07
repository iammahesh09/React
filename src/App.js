import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import ThemeContext from "./Context/ThemeContext";
import TitleContext from "./Context/TitleContext";

function App() {
  const app_name = "React";
  return (
    <div className="App">
      <div className="container">
        <h2 className="display-4 mb-2 text-center text-uppercase fw-bold">
          Hello {app_name}
        </h2>
        <hr />
        <div className="row">
          <div className="col-lg-3">
            <div className="page-navigation">
              <TitleContext.Provider value="React Menus">
                <Navigation />
              </TitleContext.Provider>
            </div>
          </div>
          <div className="col-lg-9">
            <section className="page-body">
              <ThemeContext.Provider value="dark">
                <Posts />
              </ThemeContext.Provider>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
