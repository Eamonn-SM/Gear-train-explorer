import { useState } from "react";
import GearTrain from "./components/GearTrain";
import WorkedSolution from "./components/WorkedSolution";

export default function App() {

  const [rpm, setRPM] = useState(120);
  const [torque, setTorque] = useState(10);

  const [driver, setDriver] = useState(20);
  const [idler, setIdler] = useState(30);
  const [driven, setDriven] = useState(40);

  const [useIdler, setUseIdler] = useState(true);

  const [clockwise, setClockwise] =
    useState(true);

  const ratio = driven / driver;

  return (
    <div className="app">

      <h1>Gear Train Explorer</h1>

      <div className="controls">

        <label>
          Input RPM
          <input
            type="number"
            value={rpm}
            onChange={(e)=>
              setRPM(Number(e.target.value))
            }
          />
        </label>

        <label>
          Input Torque
          <input
            type="number"
            value={torque}
            onChange={(e)=>
              setTorque(Number(e.target.value))
            }
          />
        </label>

        <label>
          Driver Teeth
          <input
            type="number"
            value={driver}
            onChange={(e)=>
              setDriver(Number(e.target.value))
            }
          />
        </label>

        <label>
          Optional Idler Teeth
          <input
            type="number"
            value={idler}
            onChange={(e)=>
              setIdler(Number(e.target.value))
            }
          />
        </label>

        <label>
          Driven Teeth
          <input
            type="number"
            value={driven}
            onChange={(e)=>
              setDriven(Number(e.target.value))
            }
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={useIdler}
            onChange={() =>
              setUseIdler(!useIdler)
            }
          />
          Include Idler
        </label>

        <button
          onClick={() =>
            setClockwise(!clockwise)
          }
        >
          Direction:
          {clockwise
            ? " ↻ CW"
            : " ↺ CCW"}
        </button>
      </div>

      <div className="results">
        <h2>Results</h2>

        <p>Ratio: {ratio.toFixed(2)} : 1</p>

        <p>
          Output RPM:
          {(rpm / ratio).toFixed(1)}
        </p>

        <p>
          Output Torque:
          {(torque * ratio).toFixed(1)} Nm
        </p>

        <div className="badge">
          ↓ Larger gear = Slower RPM
        </div>

        <div className="badge">
          ↑ Larger gear = Greater Torque
        </div>

      </div>

      <GearTrain
        driver={driver}
        idler={idler}
        driven={driven}
        rpm={rpm}
        torque={torque}
        clockwise={clockwise}
        useIdler={useIdler}
      />

      <WorkedSolution
        rpm={rpm}
        torque={torque}
        driver={driver}
        driven={driven}
      />
    </div>
  );
}
