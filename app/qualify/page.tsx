import QualificationForm from "@/components/QualificationForm";
import Link from "next/link";

export default function QualifyPage() {
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
      <main className="flex-1 flex items-start justify-center">
        <QualificationForm />
      </main>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <p className="text-sm text-muted">
          Your information is secure and will only be used to prepare for our call.
        </p>
      </footer>
    </div>
  );
}

