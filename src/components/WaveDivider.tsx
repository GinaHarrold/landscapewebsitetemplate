interface WaveDividerProps {
  fill?: string;
  height?: number;
  flip?: boolean;
}

export default function WaveDivider({ fill = "white", height = 60, flip = false }: WaveDividerProps) {
  return (
    <div className={`absolute ${flip ? "top-0" : "bottom-0"} left-0 right-0 ${flip ? "-translate-y-full" : ""}`}>
      <svg viewBox={`0 0 1440 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <path
          d={`M0 ${height / 2}C240 ${height} 480 0 720 ${height / 2}C960 ${height} 1200 0 1440 ${height / 2}V${height}H0V${height / 2}Z`}
          fill={fill}
        />
      </svg>
    </div>
  );
}
