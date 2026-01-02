"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../QualificationForm";

interface ProblemStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function ProblemStep({ register, errors }: ProblemStepProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          What&apos;s the #1 sales challenge you want solved?
        </h2>
        <p className="text-muted">
          Tell us about the problem you&apos;re facing. This helps us prepare for our session together.
        </p>
      </div>

      <div>
        <textarea
          {...register("problem", {
            required: "Please describe your challenge",
            minLength: {
              value: 20,
              message: "Please provide a bit more detail (at least 20 characters)",
            },
          })}
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
          placeholder="Example: My prospects don't understand the value of what I offer until after they've bought. I need a way to show them the transformation before they commit..."
        />
        {errors.problem && (
          <p className="mt-1 text-sm text-error">{errors.problem.message}</p>
        )}
      </div>

      <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          What makes a good answer?
        </h3>
        <ul className="text-sm text-muted space-y-1">
          <li>• Be specific about the problem you&apos;re facing</li>
          <li>• Mention who your prospects are</li>
          <li>• Describe what you&apos;ve tried that hasn&apos;t worked</li>
        </ul>
      </div>
    </div>
  );
}

