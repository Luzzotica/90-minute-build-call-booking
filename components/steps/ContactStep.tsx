"use client";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../QualificationForm";

interface ContactStepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export default function ContactStep({ register, errors }: ContactStepProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Let&apos;s get to know you
        </h2>
        <p className="text-muted">
          First, tell us a bit about yourself so we can prepare for our conversation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-error">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            placeholder="Smith"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-error">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="john@company.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone", { required: "Phone number is required" })}
          className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
        )}
      </div>
    </div>
  );
}

