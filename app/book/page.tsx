"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user came through qualification
    const data = sessionStorage.getItem("qualificationData");
    if (!data) {
      router.push("/qualify");
      return;
    }
    
    const parsed = JSON.parse(data);
    
    // Map businessType to readable industry text
    const industryMap: Record<string, string> = {
      coaching: "Coaching / Consulting",
      agency: "Agency / Done-for-You",
      ecommerce: "E-commerce / Products",
      saas: "SaaS / Software",
      services: "Professional Services",
      other: "Other",
    };
    
    // Build GHL booking URL with query parameters
    const params = new URLSearchParams();
    if (parsed.firstName) params.append("first_name", parsed.firstName);
    if (parsed.lastName) params.append("last_name", parsed.lastName);
    if (parsed.email) params.append("email", parsed.email);
    if (parsed.phone) params.append("phone", parsed.phone);
    if (parsed.problem) params.append("90_minute_build_problem", parsed.problem);
    if (parsed.businessType) {
      const industryText = industryMap[parsed.businessType] || parsed.businessType;
      params.append("industry", industryText);
    }
    
    const queryString = params.toString();
    const bookingUrl = `https://api.leadconnectorhq.com/widget/booking/rHmygqXSyRkFGsqUthxp${queryString ? `?${queryString}` : ""}`;
    
    // Redirect directly to the GHL booking page
    window.location.href = bookingUrl;
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4">
      <div className="text-center animate-fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
          <svg className="w-8 h-8 text-accent animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Taking you to the booking calendar...
        </h2>
        <p className="text-muted">
          You&apos;ll be redirected in just a moment.
        </p>
      </div>
    </div>
  );
}

