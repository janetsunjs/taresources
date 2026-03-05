import { useState } from "react";
import Home from "./Home";
import ScenarioSelect from "./ScenarioSelect";
import Grading from "./grading";
import ModuleHub from "./ModuleHub";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [module, setModule] = useState(null);

  const goModule = (m) => {
    setModule(m);
    setPage("module");
  };

  const goScenario = (id) => {
    if (id === "grading") setPage("grading");
    // later:
    // if (id === "groupConflict") setPage("groupConflict");
    // if (id === "boundaries") setPage("boundaries");
  };

  return (
    <>
      {page === "home" && (
        <Home
          onStart={() => setPage("scenarios")}
          onPickModule={goModule}
        />
      )}

      {page === "scenarios" && (
        <ScenarioSelect
          onBack={() => setPage("home")}
          onPickScenario={goScenario}
        />
      )}

      {page === "module" && (
        <ModuleHub
          module={module}
          onBack={() => setPage("home")}
        />
      )}

      {page === "grading" && (
        <Grading
          onBack={() => setPage("scenarios")}
          onHome={() => setPage("home")}
        />
      )}
    </>
  );
}
