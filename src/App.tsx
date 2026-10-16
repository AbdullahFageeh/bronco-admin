import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { isConfigured } from './lib/supabase';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Trips from './pages/Trips';
import Subscriptions from './pages/Subscriptions';
import Pricing from './pages/Pricing';
import Admins from './pages/Admins';
import Analytics from './pages/Analytics';
import AuditLogs from './pages/AuditLogs';
import SupportTickets from './pages/SupportTickets';

const NAV = [
  ['/', 'Dashboard'],
  ['/users', 'Manage Users'],
  ['/trips', 'Trips'],
  ['/subscriptions', 'Subscriptions'],
  ['/pricing', 'Pricing'],
  ['/admins', 'Admins'],
  ['/analytics', 'Analytics'],
  ['/audit', 'Audit Logs'],
  ['/support', 'Support Tickets'],
];

export default function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui' }}>
      <aside style={{ width: 220, background: '#0f172a', color: '#fff', padding: 16 }}>
        <h2>Bronco Admin</h2>
        {NAV.map(([to, label]) => (
          <div key={to} style={{ margin: '6px 0' }}>
            <Link to={to} style={{ color: '#94a3b8', textDecoration: 'none' }}>{label}</Link>
          </div>
        ))}
        {!isConfigured() && (
          <p style={{ color: '#f87171', fontSize: 12, marginTop: 16 }}>
            Supabase not configured (.env)
          </p>
        )}
      </aside>
      <main style={{ flex: 1, padding: 24, background: '#f8fafc' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/audit" element={<AuditLogs />} />
          <Route path="/support" element={<SupportTickets />} />
        </Routes>
      </main>
    </div>
  );
}
