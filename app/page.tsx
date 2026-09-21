export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Agent Hub Lite
        </h1>

        <p className="mt-2 text-gray-600">
          A simple companion UI built with Next.js for SAP-related agent tasks.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-sm border">
            <h2 className="font-semibold text-gray-900">Active Agents</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">3</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm border">
            <h2 className="font-semibold text-gray-900">Open Tasks</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">12</p>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm border">
            <h2 className="font-semibold text-gray-900">Completed</h2>
            <p className="mt-2 text-3xl font-bold text-blue-600">47</p>
          </div>
        </div>
      </div>
    </main>
  );
}