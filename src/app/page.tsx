export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white/80 rounded-xl shadow-lg p-10 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 tracking-tight">
          Noti-Fi
        </h1>
        <p className="text-xl text-gray-700 mb-6 italic">
          Where ideas become notable.
        </p>
        <p className="text-center text-gray-600 max-w-xl mb-8">
          Welcome to <span className="font-semibold text-blue-600">Noti-Fi</span> — the globally-aware, AI-powered affiliate marketing platform. Discover trending products, personalized for your region, with a techy, modern, and sleek experience.
        </p>
        <a
          href="https://github.com/kivpo/noti-fi-starter"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-700 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition"
        >
          View on GitHub
        </a>
      </div>
    </main>
  );
}