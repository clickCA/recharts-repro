import { ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
];

function App() {
  return (
    <div style={{ width: '100%', height: 400, padding: 20 }}>
      <h1>Vite 8.0.8 + Rolldown + Recharts Bug</h1>
      <p>Check browser console for: <code>require_isUnsafeProperty is not a function</code></p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
