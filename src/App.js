import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Posts from "./components/Posts/Posts";
import ThemeContext from "./Context/ThemeContext";
import TitleContext from "./Context/TitleContext";
import UserContext from "./Context/UserContext";

function App() {
  const app_name = "React";

  const userData = {
    name: "Mahesh",
    getName: function () {
      return `Hello! ${this.name}`;
    }
  }
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
                <UserContext.Provider value={userData}>
                  <Navigation />
                </UserContext.Provider>
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
