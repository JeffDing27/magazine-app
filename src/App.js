import React from "react";
import "./App.css";
import Liahona from "./Components/Liahona";
import Header from "./Components/Header";
import Active from "./Components/Active";
import Liahona2 from "./Components/Liahona2";
import Image from "./Components/Image";
import Active2 from "./Components/Active2";
import Expiration from "./Components/Expiration";

function App() {
  return (
    <div>
      <Header />
      <Image />
      <Liahona showInfo={true} />
      <Active showSubscription={true} />
      <Image />
      <Liahona2 />
      <Active2 />
      <Expiration />
    </div>
  );
}

export default App;
