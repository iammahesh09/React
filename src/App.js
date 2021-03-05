import './App.css';

import Posts from './components/Posts/Posts';

function App() {
  const app_name = "React";
  return (
    <div className="App">
      <div className="container">
        <h2 className="display-4 my-2 text-center text-uppercase fw-bold">Hello {app_name}</h2>
        <hr />
        <Posts />
      </div>
    </div>
  );
}

export default App;
