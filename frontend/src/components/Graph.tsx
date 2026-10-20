import {
  BarChart as RBarChart,
  LineChart as RLineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

// Графики на библиотеке recharts (белый фон, синий #1f77b4).
// Принимают данные через пропсы и рисуют их буквально:
//   <Graph type="bar" data={[108, 109, ...]} labels={["Пн", ...]} yLabel="..." xLabel="..." />
//   <Graph type="line" data={[...]} ... />

export const CHART_BLUE = "#1f77b4";
export const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

export interface GraphProps {
  /** значения — буквально ставятся на график (длина = числу столбцов/точек) */
  data: number[];
  /** подписи по X (дни недели, буквы, ...) — должны идти 1-в-1 с data */
  labels?: string[];
  yLabel?: string;
  xLabel?: string;
  color?: string;
  type?: "bar" | "line";
  /** формат числа в тултипе и на оси Y */
  formatValue?: (v: number) => string;
}

interface Row {
  name: string;
  value: number;
}

function toRows(data: number[], labels: string[]): Row[] {
  return data.map((value, i) => ({ name: labels[i] ?? `${i + 1}`, value }));
}

function niceCeil(v: number): number {
  if (v <= 10) return Math.ceil(v + 1);
  if (v <= 25) return 20;
  if (v <= 50) return Math.ceil(v / 10) * 10;
  if (v <= 130) return Math.ceil(v / 20) * 20;
  return Math.ceil(v / 50) * 50;
}

const AXIS_STYLE = { fontSize: 11, fill: "#000" } as const;

export function BarChart({ data, labels = DAYS, yLabel, xLabel, color = CHART_BLUE, formatValue }: GraphProps) {
  const rows = toRows(data, labels);
  const fmt = formatValue ?? ((v: number) => `${Math.round(v)}`);
  const max = data.length ? niceCeil(Math.max(...data)) : 10;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RBarChart data={rows} margin={{ top: 14, right: 12, bottom: xLabel ? 28 : 14, left: yLabel ? 14 : 0 }}>
        <CartesianGrid stroke="#e5e5e5" vertical={false} />
        <XAxis dataKey="name" tick={AXIS_STYLE} tickLine={false}>
          {xLabel && <Label value={xLabel} position="insideBottom" offset={-14} style={AXIS_STYLE} />}
        </XAxis>
        <YAxis domain={[0, max]} tick={AXIS_STYLE} tickLine={false} axisLine tickFormatter={fmt}>
          {yLabel && (
            <Label value={yLabel} position="insideLeft" angle={-90} offset={-2} style={{ ...AXIS_STYLE, textAnchor: "middle" }} />
          )}
        </YAxis>
        <Tooltip
          cursor={{ fill: "#00000010" }}
          contentStyle={{ background: "#111", border: "none", borderRadius: 6, color: "#fff", fontSize: 12 }}
          labelStyle={{ color: "#fff" }}
          formatter={(value) => [fmt(Number(value)), ""]}
        />
        <Bar dataKey="value" fill={color} barSize={46} radius={[2, 2, 0, 0]} />
      </RBarChart>
    </ResponsiveContainer>
  );
}

export function LineChart({ data, labels = DAYS, yLabel, xLabel, color = CHART_BLUE, formatValue }: GraphProps) {
  const rows = toRows(data, labels);
  const dMin = data.length ? Math.min(...data) : 0;
  const dMax = data.length ? Math.max(...data) : 1;
  const pad = Math.max((dMax - dMin) * 0.25, Math.abs(dMax) * 0.01, 0.5);
  const lo = Math.floor((dMin - pad) * 10) / 10;
  const hi = Math.ceil((dMax + pad) * 10) / 10;
  const fmt = formatValue ?? ((v: number) => (hi - lo < 10 ? v.toFixed(1) : `${Math.round(v)}`));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RLineChart data={rows} margin={{ top: 14, right: 12, bottom: xLabel ? 28 : 14, left: yLabel ? 14 : 0 }}>
        <CartesianGrid stroke="#e5e5e5" vertical={false} />
        <XAxis dataKey="name" tick={AXIS_STYLE} tickLine={false}>
          {xLabel && <Label value={xLabel} position="insideBottom" offset={-14} style={AXIS_STYLE} />}
        </XAxis>
        <YAxis domain={[lo, hi]} tick={AXIS_STYLE} tickLine={false} axisLine tickFormatter={fmt} />
        <Tooltip
          contentStyle={{ background: "#111", border: "none", borderRadius: 6, color: "#fff", fontSize: 12 }}
          labelStyle={{ color: "#fff" }}
          formatter={(value) => [fmt(Number(value)), ""]}
        />
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={{ r: 3.5, fill: color, stroke: "#fff", strokeWidth: 1.5 }} activeDot={{ r: 6 }} />
        {yLabel && <text x={14} y={180} textAnchor="middle" fontSize={11} fill="#000" transform="rotate(-90 14 180)">{yLabel}</text>}
      </RLineChart>
    </ResponsiveContainer>
  );
}

export default function Graph({ type = "bar", ...rest }: GraphProps) {
  if (type === "line") return <LineChart {...rest} />;
  return <BarChart {...rest} />;
}
