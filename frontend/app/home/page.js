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

          <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
            <Link
              href="#"
              className="rounded-2xl border border-[color-mix(in_oklab,var(--color-brand-ink),white_78%)] bg-white px-5 py-4 text-center text-sm font-semibold text-[var(--color-brand-ink)] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Join a Gang
            </Link>
            <Link
              href="#"
              className="rounded-2xl bg-[var(--color-brand-primary)] px-5 py-4 text-center text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Create a Gang
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
