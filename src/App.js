import StoryMode from "./webpage/StoryMode";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<StoryMode />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
