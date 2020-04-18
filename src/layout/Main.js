import React from "react";

import Cards from "../components/Cards/Cards";
import TablePage from "../components/Table/TablePage";

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Cards />
        </div>
        <div>
          <TablePage />
        </div>
      </div>
    );
  }
}

export default Main;
