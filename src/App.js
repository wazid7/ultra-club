import "./App.css";
import Header from "./component/Header/Header";
import Items from "./component/Items/Items";
import Answer from "./component/Q&A/Answer";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Items></Items>
      <Answer></Answer>
      <Footer></Footer>
    </div>
  );
}

export default App;
