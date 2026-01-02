"use client";

const steps = [
  {
    time: "15 min",
    title: "Discovery",
    description: "Understanding your specific sales challenge and what your prospects need to see",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    time: "60 min",
    title: "Build",
    description: "Live coding your custom sales tool while you watch and provide feedback",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    time: "15 min",
    title: "Deploy",
    description: "Making it live and ready to use with your prospects immediately",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative flex gap-6 animate-slide-in opacity-0"
            style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: "forwards" }}
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-accent text-white shadow-lg shadow-accent/25">
              {step.icon}
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {step.time}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

