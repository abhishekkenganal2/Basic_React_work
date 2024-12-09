import "./App.css";
import Header from "./components/headers";
import MainPart from "./components/mainBody/part1";
import Part2 from "./components/mainBody/part2";
import Part3 from "./components/mainBody/part3";
import SeeMore from "./components/mainBody/seeMore";
import Support from "./components/footer/support";
import MapLinks from "./components/footer/mapLinks";

function App() {
  return (
    <div className="App">
      <div className="mainPart" style={{padding: "5%" }}>
        <Header />
        <MainPart />
        <Part2 />
        <Part3 />
        <SeeMore />
      </div>
      <div className='footerPart' >
        <Support/>
        <MapLinks/>
      </div>
    </div>
  );
}

export default App;
