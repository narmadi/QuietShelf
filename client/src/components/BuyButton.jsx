import { useState } from "react";
import { useNavigate } from "react-router";

export function BuyButton({
  bookId,
  quantity = 1,
  className = "",
  children = "Buy now",
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleBuy() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId, quantity }),
      });

      if (res.status === 401) {
        navigate("/signin");
        return;
      }

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error ?? "Unable to start checkout. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Could not start checkout. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex-1">
      <button
        type="button"
        onClick={handleBuy}
        disabled={loading}
        className={`
          inline-flex w-full items-center justify-center gap-2
          rounded-full border border-[#E2828C]
          bg-[#E2828C] px-6 py-3.5
          text-sm font-semibold tracking-wide text-white
          shadow-sm
          transition-all duration-300 ease-in-out
          hover:-translate-y-0.5
          hover:border-[#D98E96]
          hover:bg-[#D98E96]
          hover:shadow-md
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#D98E96]
          focus-visible:ring-offset-2
          active:translate-y-0
          disabled:cursor-not-allowed
          disabled:opacity-60
          disabled:hover:translate-y-0
          ${className}
        `}
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            <span>Redirecting...</span>
          </>
        ) : (
          children
        )}
      </button>

      {error && (
        <p
          role="alert"
          className="mt-2 text-xs leading-relaxed text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}