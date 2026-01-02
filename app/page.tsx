import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              I build custom sales tools in{" "}
              <span className="text-accent">90 minutes</span>
              <br />
              or I pay you <span className="text-accent">$90</span>
            </h1>
            
            <p className="text-xl text-muted mb-8 max-w-xl mx-auto">
              Show your prospects what changes for them if they buy — 
              before they buy.
            </p>

            <p className="text-xl text-muted mb-8 max-w-xl mx-auto">
              If I can't help you, you'll be done in 1 minute.
            </p>

            <Link
              href="/qualify"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-200"
            >
              Let&apos;s Do It!
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          {/* Value Props */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
            <div className="animate-fade-in delay-200 opacity-0" style={{ animationFillMode: "forwards" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visual Transformation</h3>
              <p className="text-muted text-sm">Your prospects see exactly what changes for them — making the decision obvious.</p>
            </div>

            <div className="animate-fade-in delay-300 opacity-0" style={{ animationFillMode: "forwards" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Built in 90 Minutes</h3>
              <p className="text-muted text-sm">Not weeks. Not months. A working tool you can use with prospects that same day. (And some people have.)</p>
            </div>

            <div className="animate-fade-in delay-400 opacity-0" style={{ animationFillMode: "forwards" }}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Risk-Free Guarantee</h3>
              <p className="text-muted text-sm">If we don&apos;t build something that works in 90 minutes, I pay you $90. Simple as that. If this happens, I will need your venmo.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border">
        <p className="text-center text-sm text-muted">
          For family-focused entrepreneurs ready to show their prospects the transformation.
        </p>
      </footer>
    </div>
  );
}
