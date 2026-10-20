export function PageLoader({ message = 'Finding your next story...' }) {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F8F3ED] px-6"
      role="status"
      aria-live="polite"
    >
      {/* Animated book icon */}
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 animate-ping rounded-full bg-[#B77979]/15" />

        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[#30231F] shadow-lg">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-8 w-8 animate-pulse text-[#F8F3ED]"
            aria-hidden="true"
          >
            <path d="M12 7v14" />
            <path d="M12 7C9.5 4.8 6 4.5 3 5.5V19c3-1 6.5-.7 9 1" />
            <path d="M12 7c2.5-2.2 6-2.5 9-1.5V19c-3-1-6.5-.7-9 1" />
          </svg>
        </div>
      </div>

      <h2 className="mt-7 font-serif text-2xl text-[#392923]">
        The Quiet Shelf
      </h2>

      <p className="mt-2 text-sm text-[#76655D]">{message}</p>

      {/* Loading indicator */}
      <div className="mt-6 h-1.5 w-36 overflow-hidden rounded-full bg-[#E8DCD1]">
        <div className="h-full w-1/2 animate-[loader_1.4s_ease-in-out_infinite] rounded-full bg-[#B77979]" />
      </div>

      <style>{`
        @keyframes loader {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}