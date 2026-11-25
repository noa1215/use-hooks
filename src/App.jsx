import "./App.css";
import ToggleComponent from "./components/ToggleComponent";
import CounterComponent from "./components/CounterComponent";
import CounterWithStepComponent from "./components/CounterWithStepComponent";
import InputComponent from "./components/InputComponent";
import TextareaComponent from './components/TextareaComponent'
import PreviousComponent from "./components/PreviousComponent";
import IntervalComponent from "./components/IntervalComponent";
import TimeoutComponent from "./components/TimeoutComponent";
import DocumentTitleComponent from "./components/DocumentTitleComponent";
import WindowSizeComponent from "./components/WindowSizeComponent";
import KeyPressComponent from "./components/KeyPressComponent";
function App() {
  return (
    <>
      <ToggleComponent />
      <CounterComponent />
      <CounterWithStepComponent />
      <InputComponent />
      <TextareaComponent />
      <PreviousComponent />
      <IntervalComponent />
      <TimeoutComponent />
      <DocumentTitleComponent />
      <WindowSizeComponent />
      <KeyPressComponent />

    </>
  );
}

export default App;
