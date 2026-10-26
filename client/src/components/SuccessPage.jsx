import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router";

export function SuccessPage() {
  const [params] = useSearchParams();
  const orderId = params.get("order_id");
  const [order, setOrder] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let attempts = 0;
    let timer;
    let cancelled = false;

    async function check() {
      if (!orderId) {
        setChecking(false);
        return;
      }

      attempts++;

      try {
        const res = await fetch(`/api/orders/${orderId}`, {
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();

          if (cancelled) return;

          setOrder(data);

          if (data.status === "paid") {
            setChecking(false);
            return;
          }
        }
      } catch (err) {
        console.error("Unable to check order:", err);
      }

      if (cancelled) return;

      if (attempts < 6) {
        timer = setTimeout(check, 1500);
      } else {
        setChecking(false);
      }
    }

    check();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [orderId]);

  return (
    <main className="min-h-[75vh] bg-[#f6f6f6] px-4 py-12 font-[Poppins] text-[#222222] sm:px-6 sm:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">

        {/* Brand accent */}
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#d98e96]">
          The Quiet Shelf
        </p>

        {/* Status card */}
        <section className="w-full rounded-3xl border border-[#f0dfe1] bg-white px-6 py-10 shadow-sm sm:px-12 sm:py-14">

          {checking && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fcecef]">
                <svg
                  className="h-8 w-8 animate-spin text-[#d98e96]"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="opacity-20"
                  />
                  <path
                    d="M21 12a9 9 0 0 0-9-9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-semibold tracking-tight text-[#222222] sm:text-3xl">
                Just a little moment...
              </h1>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#777777]">
                {order
                  ? "We're confirming your payment. Your next great read is almost ready."
                  : "We're looking up your order. Please stay with us for a moment."}
              </p>
            </>
          )}

          {!checking && !order && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fcecef]">
                <svg
                  className="h-8 w-8 text-[#d98e96]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>

              <h1 className="text-2xl font-semibold sm:text-3xl">
                Order not found
              </h1>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                We couldn't find your order details. You can return to the
                collection or try opening your order link again.
              </p>
            </>
          )}

          {order?.status === "paid" && (
            <>
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#fcecef]">
                <svg
                  className="h-10 w-10 text-[#d98e96]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d98e96]">
                A lovely choice
              </p>

              <h1 className="text-2xl font-semibold tracking-tight text-[#222222] sm:text-3xl">
                Payment confirmed!
              </h1>

              <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#777777]">
                Thank you for choosing The Quiet Shelf. Your next chapter
                starts here. We’re delighted to be part of your reading journey.
              </p>

              <div className="mt-8 rounded-2xl bg-[#faf5f5] px-5 py-5 text-left">
                <p className="text-xs font-medium uppercase tracking-wider text-[#888888]">
                  Order summary
                </p>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#222222]">
                      Order reference
                    </p>
                    <p className="mt-1 text-sm text-[#777777]">
                      #{String(order.id).slice(0, 8)}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm font-medium text-[#222222]">
                      Total paid
                    </p>
                    <p className="mt-1 text-lg font-semibold text-[#d98e96]">
                      ${(order.totalCents / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-[#777777]">
                Happy reading, and thank you for shopping with us.
              </p>
            </>
          )}

          {order && order.status !== "paid" && !checking && (
            <>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fcecef]">
                <svg
                  className="h-8 w-8 text-[#d98e96]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 2" />
                </svg>
              </div>

              <h1 className="text-2xl font-semibold sm:text-3xl">
                Payment is being verified
              </h1>

              <p className="mt-4 text-sm leading-7 text-[#777777]">
                We haven't received payment confirmation yet. Please check
                your payment status again in a moment.
              </p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-6 rounded-full border border-[#e2828c] px-6 py-3 text-sm font-medium text-[#d98e96] transition-all duration-300 hover:bg-[#fcecef]"
              >
                Check again
              </button>
            </>
          )}

          {/* Return to collection */}
          {(!checking && order?.status === "paid") ||
          (!checking && !order) ? (
            <Link
              to="/#shop"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#e2828c] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d98e96] hover:shadow-md sm:w-auto"
            >
              Back to the collection
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          ) : null}
        </section>

        <p className="mt-6 text-xs tracking-wide text-[#999999]">
          A good book makes every moment a little quieter.
        </p>
      </div>
    </main>
  );
}