import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import "./App.css";
import Message from "./Component/Message";

function App() {
  let items = ["Home", "About", "Services", "Contact"];

  return (
    // { <Header />
    // <div>
    //   <Menu />
    //   <Content />
    // </div>
    // <Footer /> */}
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-sm-12">
          <Header />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-sm-4">
          <Menu items={items}></Menu>
        </div>
        <div className="col-sm-8">
          <Content />
        </div>
      </div>
      <br></br>
      <div className="row text-center">
        <div className="col-sm-12">
          <Footer />
          <Message text="Hello My First Property"></Message>
        </div>
      </div>
    </div>
  );
}

export default App;
