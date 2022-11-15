import {Navbar, Text } from "./components"
import { Table } from "./components/Table/Table";
import "./styles/app.css";

const App = () => {
  return (
    <div className="box">
      <Text label="Camila wish list!" />
      <Navbar />
      <Table />
    </div>
  );
};

export default App;
