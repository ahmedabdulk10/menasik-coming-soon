import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

type OAuthDetails = {
  client?: { name?: string; client_id?: string; redirect_uris?: string[] } | null;
  scope?: string | null;
  redirect_url?: string | null;
  redirect_to?: string | null;
};

type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
  approveAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
  denyAuthorization: (id: string) => Promise<{ data: OAuthDetails | null; error: { message: string } | null }>;
};

const oauthApi = () => (supabase.auth as unknown as { oauth: OAuthApi }).oauth;

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id");
    if (!authorizationId) throw new Error("Missing authorization_id");

    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) return { needsSignIn: true as const, details: null };

    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);

    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });

    return { needsSignIn: false as const, details: data };
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-6 text-cocoa">
      <h1 className="font-display text-2xl">Authorization unavailable</h1>
      <p className="mt-3 text-base text-taupe">{String((error as Error)?.message ?? error)}</p>
    </main>
  ),
});

function Consent() {
  const { needsSignIn, details } = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setError(null);
  }, [authorization_id]);

  async function signInWithGoogle() {
    setBusy(true);
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.href,
    });
    if (result.error) {
      setBusy(false);
      setError(String(result.error));
      return;
    }
    if (result.redirected) return;
    window.location.reload();
  }

  async function signInWithEmail(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.href },
    });
    setBusy(false);
    if (err) setError(err.message);
    else setSent(true);
  }

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error: err } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (err) {
      setBusy(false);
      setError(err.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("No redirect returned by the authorization server.");
      return;
    }
    window.location.href = target;
  }

  if (needsSignIn) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 text-cocoa">
        <h1 className="font-display text-3xl">Sign in to continue</h1>
        <p className="mt-3 text-base text-taupe">
          Sign in to your Menasik account to approve this connection.
        </p>
        {error && (
          <p role="alert" className="mt-4 text-base text-cocoa">
            {error}
          </p>
        )}
        <button
          type="button"
          disabled={busy}
          onClick={signInWithGoogle}
          className="mt-6 rounded-sm border border-gold px-6 py-3 text-base tracking-wide disabled:opacity-50"
        >
          Continue with Google
        </button>
        {sent ? (
          <p className="mt-6 text-base text-taupe">Check your inbox for a sign-in link.</p>
        ) : (
          <form onSubmit={signInWithEmail} className="mt-6 flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="rounded-sm border border-gold/50 bg-transparent px-4 py-3 text-base"
            />
            <button
              type="submit"
              disabled={busy}
              className="rounded-sm bg-cocoa px-6 py-3 text-base text-cream disabled:opacity-50"
            >
              Email me a sign-in link
            </button>
          </form>
        )}
      </main>
    );
  }

  const clientName = details?.client?.name ?? "an app";

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 text-cocoa">
      <h1 className="font-display text-3xl">Connect {clientName} to Menasik</h1>
      <p className="mt-3 text-base text-taupe">
        {clientName} will be able to call this app&rsquo;s enabled tools while you are signed in.
      </p>
      {details?.scope && (
        <p className="mt-2 text-sm text-taupe">Requested access: {details.scope}</p>
      )}
      <p className="mt-2 text-sm text-taupe">
        This does not bypass this app&rsquo;s permissions or backend policies.
      </p>
      {error && (
        <p role="alert" className="mt-4 text-base text-cocoa">
          {error}
        </p>
      )}
      <div className="mt-8 flex gap-3">
        <button
          type="button"
          disabled={busy}
          onClick={() => decide(true)}
          className="rounded-sm bg-cocoa px-6 py-3 text-base text-cream disabled:opacity-50"
        >
          Approve
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => decide(false)}
          className="rounded-sm border border-gold px-6 py-3 text-base disabled:opacity-50"
        >
          Cancel connection
        </button>
      </div>
    </main>
  );
}
