"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function ConfirmedPage() {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const data = sessionStorage.getItem("qualificationData");
    if (data) {
      const parsed = JSON.parse(data);
      setFirstName(parsed.firstName || "");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col py-8 px-4">
      {/* Header */}
      <header className="text-center mb-8">
        <Link href="/" className="inline-block">
          <h1 className="text-xl font-bold text-foreground">
            90-Minute Build
          </h1>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-2xl mx-auto w-full">
        {/* Confirmation Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6">
            <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {firstName ? `You're all set, ${firstName}!` : "You're all set!"}
          </h2>
          <p className="text-lg text-muted max-w-lg mx-auto">
            Check your email for confirmation details. Here&apos;s exactly what we&apos;ll build together in our 90-minute session.
          </p>
        </div>

        {/* What You'll Get Section */}
        <div className="bg-card rounded-2xl shadow-xl shadow-foreground/5 border border-border p-6 md:p-8 mb-8 animate-fade-in delay-100" style={{ animationFillMode: "forwards" }}>
          <h3 className="text-xl font-bold text-foreground mb-2 text-center">
            In 90 Minutes, You&apos;ll Walk Away With...
          </h3>
          <p className="text-muted text-center mb-8">
            A custom sales tool that shows YOUR prospects what changes for them if they buy.
          </p>

          <ProcessTimeline />
        </div>

        {/* The Guarantee */}
        <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 md:p-8 mb-8 animate-fade-in delay-200" style={{ animationFillMode: "forwards" }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-foreground text-lg mb-1">The Guarantee</h4>
              <p className="text-muted">
                If we don&apos;t finish in 90 minutes, I pay you $90. No questions asked. 
                You&apos;re risking nothing but 90 minutes of your time.
              </p>
            </div>
          </div>
        </div>

        {/* What to Prepare */}
        <div className="bg-card rounded-2xl shadow-xl shadow-foreground/5 border border-border p-6 md:p-8 animate-fade-in delay-300" style={{ animationFillMode: "forwards" }}>
          <h3 className="text-xl font-bold text-foreground mb-4">
            Before Our Call, Think About...
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">1</span>
              </div>
              <span className="text-muted">
                <strong className="text-foreground">Your ideal prospect</strong> — Who needs to see the transformation?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">2</span>
              </div>
              <span className="text-muted">
                <strong className="text-foreground">The &quot;before&quot; state</strong> — What problem are they stuck in?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent font-bold text-sm">3</span>
              </div>
              <span className="text-muted">
                <strong className="text-foreground">The &quot;after&quot; state</strong> — What does success look like for them?
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in delay-400" style={{ animationFillMode: "forwards" }}>
          <p className="text-muted mb-4">
            Questions before our call?
          </p>
          <a
            href="mailto:ster@sterlinglong.me"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground border-2 border-border hover:border-accent hover:bg-accent/5 rounded-xl transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Me an Email
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-border">
        <p className="text-center text-sm text-muted">
          See you on the call! — For family-focused entrepreneurs ready to show their prospects the transformation.
        </p>
      </footer>
    </div>
  );
}

