import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { DemoLogoutButton } from '@/components/AppShell';
import { sessionAccount } from '@/lib/backend/sessions';
import { SESSION_COOKIE } from '@/lib/backend/auth-security';
export const dynamic = 'force-dynamic';
export default async function Page() {
  const account = await sessionAccount(cookies().get(SESSION_COOKIE)?.value);
  if (!account) redirect('/login');
  if (account.data.onboarding === 'pending') redirect('/register/google');
  return <div className="content-width google-account-page"><h1>Hello, {account.data.displayName}.</h1><p>You’re signed in with Google.</p><section className="settings-section"><h2>Your TravelBuddy account</h2><p>Your account is saved securely on the server. Travel experiences, trip planning, and booking flows are still demonstrations.</p><p>Account access: {account.data.roles.join(', ')}</p><div className="google-account-actions"><Link className="button button-primary" href="/">Explore experiences</Link><DemoLogoutButton serverSession /></div></section></div>;
}
