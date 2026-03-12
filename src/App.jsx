import { useState } from "react";
import Home from "./Home";
import ScenarioSelect from "./ScenarioSelect";
import ModuleHub from "./ModuleHub";
import ScenarioFlow from "./scenarios/ScenarioFlow";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [module, setModule] = useState(null);
  const [scenarioId, setScenarioId] = useState(null);

  const goModule = (m) => {
    setModule(m);
    setPage("module");
  };

  const goScenario = (id) => {
    setScenarioId(id);
    setPage("scenario");
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

      {page === "scenario" && (
        <ScenarioFlow
          scenarioId={scenarioId}
          onBack={() => setPage("scenarios")}
          onHome={() => setPage("home")}
        />
      )}
    </>
  );
}
