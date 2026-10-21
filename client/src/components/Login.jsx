import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { signIn, signUp } from "../lib/auth-client";

export function Login({ mode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const isSignUp = mode === "signup";
  const navigate = useNavigate();

  function switchMode() {
    navigate(isSignUp ? "/signin" : "/signup");
  }

  useEffect(() => {
    setError("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  }, [mode]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (isSignUp && password !== confirmPassword) {
      setError("Your passwords do not match. Please try again.");
      return;
    }

    setLoading(true);
    try {
      const { error: authError } = isSignUp
        ? await signUp.email({ name, email, password })
        : await signIn.email({ email, password, rememberMe });

      if (authError) {
        setError(authError.message || "Something went wrong. Please try again.");
        return;
      }

      navigate("/");
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="login">
      <div className="mx-auto max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left px-4 pt-12 pb-10 sm:px-6 md:pt-20 md:pb-16">
        {/* Left editorial section */}
        <div className="relative mx-auto w-full">
          <span
            aria-hidden="true"
            className="absolute -left-1 -top-5 text-4xl text-muted-rose/40 sm:-left-3 sm:text-5xl lg:-left-6 lg:top-0"
          >
            ✳
          </span>

          <div className="relative z-10">
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-muted-rose/30 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-dark sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary-dark" />
              Your next chapter awaits
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl">
              Every book opens
              <span className="mt-2 block text-primary-dark">
                a little world.
              </span>
            </h1>

            <p className="mt-4 text-sm leading-7 text-text/65 sm:mt-6 sm:text-base">
              Find your next favourite story, rediscover the magic of reading,
              and make a little room for imagination. Welcome to The Quiet
              Shelf.
            </p>

            {/* Book showcase */}
            <div className="relative mt-8 w-full sm:mt-10">
              <div className="absolute -right-1 -top-3 z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-primary-light text-center text-[10px] font-semibold text-dark shadow-md sm:-right-3 sm:-top-4 sm:h-20 sm:w-20 sm:rotate-12 sm:text-xs">
                <span className="text-base sm:text-lg">♡</span>
                Made for
                <span>book lovers</span>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl shadow-primary-dark/10 sm:rounded-[2rem] sm:p-3">
                <img
                  src="/images/fiction/fiction-book-1.webp"
                  alt="Discover a new story at The Quiet Shelf"
                  className="h-48 w-full rounded-xl object-cover object-center sm:h-64 sm:rounded-[1.5rem] md:h-72 lg:h-56 xl:h-64"
                />

                <div className="flex items-center justify-between gap-3 px-2 py-3 sm:px-3 sm:py-4">
                  <div className="min-w-0">
                    <p className="font-serif text-base font-semibold sm:text-lg">
                      Your next favourite
                    </p>
                    <p className="mt-1 text-xs leading-5 text-text/55 sm:text-sm">
                      A quiet moment, a beautiful story.
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light/30 text-xl text-primary-dark sm:h-11 sm:w-11">
                    ↗
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-[10px] tracking-[0.12em] text-text/45 sm:mt-8 sm:text-xs sm:tracking-wide">
            READ SLOWLY. DREAM BIG. TURN THE PAGE.
          </p>
        </div>

        {/* Right authentication section */}
        <div className="relative mx-auto w-full">
          {/* Decorative background shapes */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-4 h-24 w-24 rounded-full bg-primary-light/40 blur-2xl sm:-right-6 sm:-top-6 sm:h-32 sm:w-32"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-muted-rose/20 blur-2xl sm:-bottom-6 sm:-left-6 sm:h-32 sm:w-32"
          />

          <div className="relative rounded-2xl border border-white bg-white/95 p-5 shadow-2xl shadow-dark/5 backdrop-blur-sm sm:rounded-[2rem] sm:p-7 md:p-9">
            {/* Card icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light/30 text-2xl text-primary-dark sm:mb-7 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-3xl">
              {isSignUp ? "✧" : "♡"}
            </div>

            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-dark sm:text-xs sm:tracking-[0.2em]">
              {isSignUp ? "Become part of our story" : "Good to see you again"}
            </p>

            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              {isSignUp ? "Create your" : "Welcome back,"}
              <span className="block">{isSignUp ? "account." : "reader."}</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-text/60">
              {isSignUp
                ? "Join The Quiet Shelf and discover your next favourite story."
                : "Your next chapter is waiting. Sign in to pick up where your reading journey left off."}
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 sm:mt-8 sm:space-y-5"
            >
              {/* Full name - sign up only */}
              {isSignUp && (
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name
                  </label>

                  <div className="flex min-w-0 items-center gap-3 rounded-xl border border-dark/10 bg-bg px-3 transition focus-within:border-primary-dark focus-within:ring-2 focus-within:ring-primary-light/40 sm:px-4">
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-primary-dark"
                    >
                      ♙
                    </span>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="min-w-0 flex-1 bg-transparent py-3.5 text-base outline-none placeholder:text-text/35 sm:text-sm"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <div className="flex min-w-0 items-center gap-3 rounded-xl border border-dark/10 bg-bg px-3 transition focus-within:border-primary-dark focus-within:ring-2 focus-within:ring-primary-light/40 sm:px-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg text-primary-dark"
                  >
                    ✉
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="min-w-0 flex-1 bg-transparent py-3.5 text-base outline-none placeholder:text-text/35 sm:text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                </label>

                <div className="flex min-w-0 items-center gap-2 rounded-xl border border-dark/10 bg-bg px-3 transition focus-within:border-primary-dark focus-within:ring-2 focus-within:ring-primary-light/40 sm:gap-3 sm:px-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg text-primary-dark"
                  >
                    ♙
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete={
                      isSignUp ? "new-password" : "current-password"
                    }
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={isSignUp ? 8 : undefined}
                    className="min-w-0 flex-1 bg-transparent py-3.5 text-base outline-none placeholder:text-text/35 sm:text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                    className="shrink-0 py-2 text-xs font-semibold text-primary-dark transition hover:text-muted-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {isSignUp && (
                  <p className="mt-1.5 text-xs text-text/50">
                    Use at least 8 characters.
                  </p>
                )}
              </div>

              {/* Confirm password - sign up only */}
              {isSignUp && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium"
                  >
                    Confirm password
                  </label>

                  <div className="flex min-w-0 items-center gap-2 rounded-xl border border-dark/10 bg-bg px-3 transition focus-within:border-primary-dark focus-within:ring-2 focus-within:ring-primary-light/40 sm:gap-3 sm:px-4">
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-lg text-primary-dark"
                    >
                      ♙
                    </span>

                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      autoComplete="new-password"
                      placeholder="Re-enter your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="min-w-0 flex-1 bg-transparent py-3.5 text-base outline-none placeholder:text-text/35 sm:text-sm"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((current) => !current)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      aria-pressed={showConfirmPassword}
                      className="shrink-0 py-2 text-xs font-semibold text-primary-dark transition hover:text-muted-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              )}

              {/* Sign in options */}
              {!isSignUp && (
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 text-xs sm:text-sm">
                  <label className="flex cursor-pointer items-center gap-2 text-text/70">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 shrink-0 rounded accent-primary-dark"
                    />
                    Remember me
                  </label>

                  <a
                    href="/forgot-password"
                    className="font-medium text-primary-dark transition hover:text-muted-rose hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Validation error */}
              {error && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              {/* Submit button */}
              <button type="submit" disabled={loading} className="... disabled:opacity-60 disabled:cursor-not-allowed">
                {loading ? "Please wait…" : isSignUp ? "Create Account" : "Sign In"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3 sm:my-7 sm:gap-4">
              <div className="h-px min-w-0 flex-1 bg-dark/10" />

              <span className="shrink-0 text-center text-[10px] text-text/40 sm:text-xs">
                {isSignUp
                  ? "Start your reading journey"
                  : "A world of stories awaits"}
              </span>

              <div className="h-px min-w-0 flex-1 bg-dark/10" />
            </div>

            {/* Toggle between Sign In and Sign Up */}
            <p className="text-center text-sm leading-6 text-text/65">
              {isSignUp
                ? "Already have an account?"
                : "New to The Quiet Shelf?"}

              <button
                type="button"
                onClick={switchMode}
                className="ml-1 inline-block font-semibold text-primary-dark transition hover:text-muted-rose hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark"
              >
                {isSignUp ? "Sign In" : "Create an account"}
              </button>
            </p>

            {/* Back to bookstore */}
            <div className="mt-5 text-center sm:mt-6">
              <a
                href="/"
                className="inline-block py-1 text-xs text-text/45 transition hover:text-primary-dark"
              >
                ← Back to the bookstore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
