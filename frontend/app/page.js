export default function Home() {
  const matchCards = [
    {
      title: "Tonight's Match",
      league: "Friends League",
      question: "Who wins? Tigers vs Hawks",
      closesIn: "Closes in 1h 12m",
    },
    {
      title: "Weekend Pick",
      league: "City Squad",
      question: "Will Red FC score 2+ goals?",
      closesIn: "Closes in 18h",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 p-4 pb-24 md:p-6">
        <header className="rounded-2xl bg-indigo-600 p-5 text-white shadow-lg">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-100">
            Fun Prediction App
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight">
            Predict with your friends
          </h1>
          <p className="mt-2 text-sm text-indigo-100">
            Mobile-first MVP for quick yes/no picks, live score updates, and a
            simple leaderboard.
          </p>
          <button className="mt-4 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50 md:w-auto">
            Create private group
          </button>
        </header>

        <section className="grid gap-3 sm:grid-cols-2">
          <button className="rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              This week
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900">18 picks</p>
            <p className="mt-1 text-sm text-slate-600">4 still open</p>
          </button>
          <button className="rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Rank
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900">#2 in group</p>
            <p className="mt-1 text-sm text-slate-600">73% accuracy</p>
          </button>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Open predictions
            </h2>
            <button className="text-sm font-medium text-indigo-700">
              See all
            </button>
          </div>

          {matchCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {card.league}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-slate-900">
                    {card.title}
                  </h3>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                  {card.closesIn}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-700">{card.question}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  Yes
                </button>
                <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                  No
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <nav className="fixed inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
        <ul className="mx-auto grid max-w-md grid-cols-3 text-center text-xs font-medium text-slate-600">
          <li className="p-3 text-indigo-700">Home</li>
          <li className="p-3">Groups</li>
          <li className="p-3">Profile</li>
        </ul>
      </nav>
    </div>
  );
}
