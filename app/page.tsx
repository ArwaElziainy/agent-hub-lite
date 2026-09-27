import { tasks } from "./data/tasks";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Agent Hub Lite
        </h1>
        <p className="mt-2 text-gray-600"> Simple task list using mock data </p>
        <div className="mt-8 space-y-4">
          {tasks.map((task) => (
            <Link
              key={task.id}
              href={`/tasks/${task.id}`}
              className=" block rounded-xl border bg-white p-5 shadow-sm hover:bg-gray-50">
              <h2 className="text-lg font-semibold text-gray-900">
                {task.title}
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Agent: {task.agent}
              </p>
              <p className="mt-1 text-sm font-medium text-blue-600">
                Status: {task.status}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}