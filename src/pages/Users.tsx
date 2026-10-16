import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Users() {
  const [rows, setRows] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) return;
    supabase.from('profiles').select('id,name,phone,car_model,created_at').order('created_at', { ascending: false }).limit(50)
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setRows(data ?? []);
      });
  }, []);

  return (
    <>
      <h1>Manage Users</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead><tr><th>Name</th><th>Phone</th><th>Car</th></tr></thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}>
              <td>{r.name}</td><td>{r.phone}</td><td>{r.car_model}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!rows.length && <p>No users / not configured.</p>}
    </>
  );
}
