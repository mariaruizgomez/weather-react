import "./App.css";
import Weather from "./Weather";
import Form from "./Form";
import "./Form.css";
import HeaderCities from "./HeaderCities";
import InfoWeather from "./InfoWeather";
import Forecast from "./Forecast";
import "./HeaderCities.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderCities />
        <Form />
        <Weather/>
        <InfoWeather />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
