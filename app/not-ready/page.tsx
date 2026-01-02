"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotReadyPage() {
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
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center">
          <div className="animate-fade-in">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            {/* Message */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {firstName ? `Thanks for your interest, ${firstName}!` : "Thanks for your interest!"}
            </h2>
            
            <p className="text-lg text-muted mb-6">
              I only work with people who are making $10K+ a month because otherwise the tool doesn&apos;t make sense. 
              The sales tools I build are designed to show prospects what changes for them if they buy — 
              but if you don&apos;t have something that&apos;s already selling, there&apos;s nothing to show.
            </p>

            <p className="text-muted mb-8">
              But here&apos;s someone who can help you get to that $10K/month milestone.
            </p>
          </div>

          {/* Alternative Resource */}
          <div className="bg-card rounded-2xl shadow-xl shadow-foreground/5 border border-border p-6 md:p-8 mb-8 animate-fade-in delay-200" style={{ animationFillMode: "forwards" }}>
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">
              Want to Grow Your Income?
            </h3>
            <p className="text-muted mb-6">
              My friend <strong className="text-foreground">Collin Strachan</strong> runs a community called &quot;Become Unforgettable&quot; 
              where he teaches entrepreneurs how to go from &quot;I don&apos;t know what to post&quot; to inbound leads in 30 days. 
              If you&apos;re looking to build your audience and reach that $10K/month milestone, this is where I&apos;d send you.
            </p>

            <a
              href="https://www.skool.com/become-unforgettable/about?ref=afd79fb298434103b07ee51af6b59c34"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-all duration-200"
            >
              Join Become Unforgettable
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
            </a>
          </div>

          {/* Stay Connected */}
          <div className="animate-fade-in delay-300" style={{ animationFillMode: "forwards" }}>
            <p className="text-muted mb-4">
              Want to follow along? Connect with me on LinkedIn for tips on building sales tools and growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.linkedin.com/in/long-sterling/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground border-2 border-border hover:border-accent hover:bg-accent/5 rounded-xl transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Return Home */}
          <div className="mt-8 animate-fade-in delay-400" style={{ animationFillMode: "forwards" }}>
            <Link
              href="/"
              className="text-muted hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 py-6 border-t border-border">
        <p className="text-center text-sm text-muted">
          Keep building. When you hit $10K/month, come back and let&apos;s create something amazing together.
        </p>
      </footer>
    </div>
  );
}

