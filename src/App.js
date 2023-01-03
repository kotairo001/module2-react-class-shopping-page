import Header from "./component/Header";
import Slide from "./component/Slide";
import Detail from "./component/Detail";
import ListProduct from "./component/ListProduct";
import Find from "./component/Find";
import Client from "./component/Client";
import Signup from "./component/Signup";
import Info from "./component/Info";


function App() {
  return (
    <>
      <div className="hero_area">
        {/* header section strats */}
        <Header></Header>
        {/* end header section */}
        {/* slider section */}
        <Slide></Slide>
        {/* end slider section */}
      </div>
      {/* detail section */}
      <Detail></Detail>
      {/* end detail section */}
      {/* products section */}
      <ListProduct></ListProduct>
      {/* end products section */}
      {/* find section */}
      <Find></Find>
      {/* end find section */}
      {/* client section */}
      <Client></Client>
      {/* end client section */}
      {/* sign section */}
      <Signup></Signup>
      {/* end sign section */}
      {/* info section */}
      <Info></Info>
      {/* end info section */}
      {/* footer section */}
      <section className="container-fluid footer_section">
        <p>
          Copyright © All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </section>
    </>
  );
}
export default App;
