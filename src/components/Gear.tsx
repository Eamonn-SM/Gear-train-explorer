interface Props {
  teeth: number;
  rpm: number;
  torque: number;
  clockwise: boolean;
  color: string;
}

export default function Gear({
  teeth,
  rpm,
  torque,
  clockwise,
  color,
}: Props) {
  const diameter = teeth * 4;

  const teethShapes = [];

  for (let i = 0; i < teeth; i++) {
    const angle = (360 / teeth) * i;

    teethShapes.push(
      <rect
        key={i}
        x="48"
        y="0"
        width="4"
        height="12"
        fill={color}
        transform={`rotate(${angle} 50 50)`}
      />
    );
  }

  return (
    <div className="gear-card">
      <div
        style={{
          width: diameter,
          height: diameter,
          animation: `${clockwise ? "spinCW" : "spinCCW"}
            ${Math.max(1, 400 / Math.abs(rpm))}s linear infinite`
        }}
      >
        <svg viewBox="0 0 100 100">
          {teethShapes}

          <circle
            cx="50"
            cy="50"
            r="38"
            fill={color}
            stroke="#222"
            strokeWidth="2"
          />

          <circle
            cx="50"
            cy="50"
            r="10"
            fill="white"
          />
        </svg>
      </div>

      <h3>{teeth} Teeth</h3>

      <div>{Math.abs(rpm).toFixed(1)} RPM</div>

      <div>{torque.toFixed(1)} Nm</div>

      <div>
        {clockwise ? "↻ Clockwise" : "↺ Counter‑Clockwise"}
      </div>
    </div>
  );
}
``
