import "./App.css";

import { useState } from "react";

function App() {
  const [acardion1, setAcardion1] = useState(false);
  const [acardion2, setAcardion2] = useState(false);
  const [acardion3, setAcardion3] = useState(false);

  function func1() {
    setAcardion1(true);
    setAcardion2(false);
    setAcardion3(false);
  }

  function func2() {
    setAcardion1(false);
    setAcardion2(true);
    setAcardion3(false);
  }

  function func3() {
    setAcardion1(false);
    setAcardion2(false);
    setAcardion3(true);
  }

  return (
    <div className="acardion">
      <div className="box">
        <p onClick={() => func1()}>Lorem ipsum dolor sit amet.</p>
        {acardion1 === true ? <p className="row">dfghgjkhjghfgdf</p> : null}
      </div>
      <div className="box">
        <p onClick={() => func2()}>Lorem ipsum dolor sit amet.</p>
        {acardion2 === true ? <p className="row">Lorem, ipsum dolor.</p> : null}
      </div>
      <div className="box">
        <p onClick={() => func3()}>Lorem ipsum dolor sit amet.</p>
        {acardion3 === true ? <p className="row">Lorem, ipsum dolor.</p> : null}
      </div>
    </div>
  );
}

export default App;
