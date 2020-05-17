import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Main from "./layout/Main";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-166900876-1");
    ReactGa.pageview("/");
  }, []);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
