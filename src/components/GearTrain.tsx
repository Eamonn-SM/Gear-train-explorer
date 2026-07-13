import Gear from "./Gear";

interface Props {
  driver: number;
  idler: number;
  driven: number;
  rpm: number;
  torque: number;
  clockwise: boolean;
  useIdler: boolean;
}

export default function GearTrain(props: Props) {
  const ratio = props.driven / props.driver;

  const drivenRPM = props.rpm / ratio;

  const drivenTorque = props.torque * ratio;

  const idlerRPM =
    props.rpm * props.driver / props.idler;

  return (
    <div className="train">
      <Gear
        teeth={props.driver}
        rpm={props.rpm}
        torque={props.torque}
        clockwise={props.clockwise}
        color="#3b82f6"
      />

      <div className="arrow">⇄</div>

      {props.useIdler && (
        <>
          <Gear
            teeth={props.idler}
            rpm={idlerRPM}
            torque={props.torque}
            clockwise={!props.clockwise}
            color="#f59e0b"
          />

          <div className="arrow">⇄</div>
        </>
      )}

      <Gear
        teeth={props.driven}
        rpm={drivenRPM}
        torque={drivenTorque}
        clockwise={
          props.useIdler
            ? props.clockwise
            : !props.clockwise
        }
        color="#10b981"
      />
    </div>
  );
}
