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
      attempts++;
      try {
        const res = await fetch(`/api/orders/${orderId}`, { credentials: "include" });
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
        console.error(err);
      }
      if (cancelled) return;
      if (attempts < 6) timer = setTimeout(check, 1500); // webhook may arrive a moment late
      else setChecking(false);
    }

    check();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [orderId]);

  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center font-[Poppins]">
      {!order && (
        <p className="text-primary-dark">
          {checking ? "Looking up your order…" : "Order not found."}
        </p>
      )}

      {order?.status === "paid" && (
        <>
          <h1 className="text-3xl font-semibold text-primary-dark">Payment confirmed</h1>
          <p className="mt-3 text-text/70">
            Order #{order.id.slice(0, 8)} · ${(order.totalCents / 100).toFixed(2)}
          </p>
          <Link to="/#shop" className="mt-8 inline-block underline text-muted-rose">
            Back to the shelf
          </Link>
        </>
      )}

      {order && order.status !== "paid" && (
        <p className="text-primary-dark">
          {checking
            ? "Confirming your payment…"
            : "We haven't received confirmation yet. Refresh in a moment."}
        </p>
      )}
    </main>
  );
}