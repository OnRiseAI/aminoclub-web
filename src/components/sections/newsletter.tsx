export function Newsletter() {
  return (
    <section className="bg-white">
      <div className="container-page pb-20 md:pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-surface-lavender/70 via-surface-pink/60 to-surface-lavender/70 px-6 py-10 md:px-12 md:py-12">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h3 className="text-[22px] md:text-[26px] font-bold text-ink-900">
                Research updates from Amino Club
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-ink-700">
                Subscribe for catalog updates, new research compounds, and quality documentation news
              </p>
              <p className="mt-2 text-[12px] text-ink-500">
                For researchers and labs. No spam, unsubscribe anytime.
              </p>
            </div>

            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 rounded-full border border-white bg-white px-5 py-3 text-[14px] text-ink-900 placeholder:text-ink-400 focus:border-ink-900 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-[13px] font-semibold text-white hover:bg-ink-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
