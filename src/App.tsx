import Header from "./Component/Header";
import Menu from "./Component/Menu";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import "./App.css";

function App() {
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
          <Menu></Menu>
        </div>
        <div className="col-sm-8">
          <Content />
        </div>
      </div>
      <br></br>
      <div className="row text-center">
        <div className="col-sm-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
