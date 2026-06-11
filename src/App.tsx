import { useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import throttleNamed from 'es-toolkit/compat/throttle';
import { throttle as throttleBarrel } from 'es-toolkit/compat';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 },
  { name: 'C', value: 30 },
];

function App() {
  useEffect(() => {
    // Log to console to verify the import issue
    console.log('=== es-toolkit import test ===');
    console.log('Default import from es-toolkit/compat/throttle:', throttleNamed);
    console.log('Is undefined?', throttleNamed === undefined);
    console.log('Named import from es-toolkit/compat:', throttleBarrel);
    console.log('Is function?', typeof throttleBarrel === 'function');
  }, []);

  return (
    <div style={{ width: '100%', height: 400, padding: 20 }}>
      <h1>Recharts + es-toolkit Import Issue</h1>
      <p>Check browser console (F12) to see the import values.</p>
      <p style={{ color: 'red' }}>
        The default import should be <code>undefined</code> - this breaks Recharts components.
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
