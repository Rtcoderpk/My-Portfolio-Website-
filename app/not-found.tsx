import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-dark text-white px-6">
      <div className="text-center max-w-md">
        <span className="eyebrow mb-4 block">404</span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold mb-4">Page not found</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you were looking for does not exist. Return to the homepage to continue exploring the portfolio.
        </p>
        <Link href="/" className="btn-primary inline-flex">
          Go Home
        </Link>
      </div>
    </main>
  );
}