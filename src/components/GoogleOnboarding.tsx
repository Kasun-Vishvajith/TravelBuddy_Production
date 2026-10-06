"use client";
import { useState, type FormEvent } from 'react';
import { Brand, DemoLogoutButton } from './AppShell';
import type { ServerAccount } from './ServerAuthProvider';

export function GoogleOnboarding({ account }: { account: ServerAccount }) {
  const [name, setName] = useState(account.displayName);
  const [accepted, setAccepted] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError('');
    try {
      const response = await fetch('/api/auth/onboarding', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ displayName: name, acceptAccountCreation: accepted }) });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || 'Your account could not be completed.');
      window.location.assign('/account/security');
    } catch (err) { setError(err instanceof Error ? err.message : 'Your account could not be completed.'); setBusy(false); }
  }
  return <div className="registration-form-page"><div className="registration-form-inner"><Brand /><h1>Welcome to TravelBuddy.</h1><p>Confirm your name to finish setting up your traveler account.</p><form onSubmit={submit}><div className="field"><label htmlFor="google-display-name">Your name</label><input id="google-display-name" autoComplete="name" maxLength={120} required value={name} onChange={event => setName(event.target.value)} /></div><label className="demo-terms"><input type="checkbox" required checked={accepted} onChange={event => setAccepted(event.target.checked)} /><span>Create my TravelBuddy traveler account. Trips and bookings are still demonstrations stored on this device.</span></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary button-wide" disabled={busy}>{busy ? 'Saving your account…' : 'Complete registration'}</button></form><DemoLogoutButton serverSession /></div></div>;
}
