import Navbar from "./Navbar";
import Home from "./Home";


function App() {



  return (
    <div className="App">


      {/*the Navbar will be nested here below "App" */}

      <Navbar />

      {/*the Navbar will be nested inside content <div> */}


      <div className="content">

        <Home />

      </div>



    </div>
  );
}

export default App;
