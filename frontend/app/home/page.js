import Link from "next/link";

export default function HomeScreenPage() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)] px-4 py-8 sm:px-6 md:py-12">
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-5xl items-center justify-center">
        <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-[var(--color-brand-surface)] p-6 shadow-[0_22px_48px_-20px_rgba(47,27,87,0.45),0_14px_24px_-16px_rgba(47,27,87,0.35)] ring-1 ring-white/70 sm:p-10">
          <div className="wave-blob absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[var(--color-brand-primary-soft)]/85" />
          <div className="wave-blob wave-blob-delay absolute -bottom-12 -left-10 h-36 w-36 rounded-full bg-[var(--color-brand-accent)]/25" />

          <p className="relative inline-flex items-center rounded-full bg-[var(--color-brand-primary-soft)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--color-brand-ink)]">
            Home
          </p>

          <h1 className="relative mt-4 text-3xl font-black tracking-tight text-[var(--color-brand-ink)] sm:text-5xl">
            Welcome to Called It.
          </h1>
          <p className="relative mt-3 max-w-lg text-sm leading-7 text-[color-mix(in_oklab,var(--color-brand-ink),white_34%)] sm:text-base">
            You are in. Pick what you want to do next with your crew.
          </p>

          <div className="relative mt-8 grid grid-cols-2 gap-4">
            <Link
              href="/gang"
              className="group relative overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--color-brand-ink),white_80%)] bg-white p-4 text-left shadow-[0_14px_24px_-18px_rgba(47,27,87,0.7),0_2px_10px_-6px_rgba(47,27,87,0.35)] transition hover:-translate-y-1 hover:shadow-[0_24px_30px_-18px_rgba(47,27,87,0.75),0_10px_14px_-10px_rgba(47,27,87,0.45)]"
            >
              <span className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[var(--color-brand-primary-soft)]/80 transition-transform duration-300 group-hover:scale-110" />
              <div className="relative flex min-h-28 flex-col justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand-primary-soft)] text-base">
                  🤝
                </span>
                <div>
                  <p className="text-sm font-bold text-[var(--color-brand-ink)] sm:text-base">
                    Join a Gang
                  </p>
                  <p className="mt-1 text-xs text-[color-mix(in_oklab,var(--color-brand-ink),white_38%)]">
                    Enter a code and jump in.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/create-gang"
              className="group relative overflow-hidden rounded-2xl bg-[linear-gradient(145deg,var(--color-brand-primary),color-mix(in_oklab,var(--color-brand-primary),black_14%))] p-4 text-left shadow-[0_14px_24px_-18px_rgba(47,27,87,0.7),0_4px_10px_-6px_rgba(47,27,87,0.45)] transition hover:-translate-y-1 hover:shadow-[0_24px_30px_-18px_rgba(47,27,87,0.8),0_10px_14px_-10px_rgba(47,27,87,0.55)]"
            >
              <span className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110" />
              <div className="relative flex min-h-28 flex-col justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base text-white">
                  ✨
                </span>
                <div>
                  <p className="text-sm font-bold text-white sm:text-base">
                    Create a Gang
                  </p>
                  <p className="mt-1 text-xs text-white/85">
                    Start a new crew in seconds.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
