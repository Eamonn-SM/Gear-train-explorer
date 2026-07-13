interface Props {
  rpm: number;
  torque: number;
  driver: number;
  driven: number;
}

export default function WorkedSolution({
  rpm,
  torque,
  driver,
  driven,
}: Props) {

  const ratio = driven / driver;

  return (
    <div className="panel">
      <h2>Worked Solution</h2>

      <pre>
{`
Gear Ratio

= Driven Teeth ÷ Driver Teeth
= ${driven} ÷ ${driver}
= ${ratio.toFixed(2)} : 1

Output RPM

= ${rpm} ÷ ${ratio.toFixed(2)}
= ${(rpm / ratio).toFixed(1)} RPM

Output Torque

= ${torque} × ${ratio.toFixed(2)}
= ${(torque * ratio).toFixed(1)} Nm
`}
      </pre>
    </div>
  );
}
