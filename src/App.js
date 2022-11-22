import Installment from "./component/Installment";
import "./App.css";
import Light from "./component/Light";
import Screen from "./component/Screen";
import Back from "./component/Back";

function App() {
  return (
    <div className="mobile">
      <h1 className="head">INSTALLMENT CALCULATOR</h1>
      <div className="handle">
        <Light />
        <div className="divide">
          <Installment />
        </div>
        <Screen />
      </div>
      <Back />
    </div>
  );
}

export default App;

