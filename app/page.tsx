import PageHeader from "./components/PageHeader";
import TaskCard from "./components/TaskCard";
import { tasks } from "./data/tasks";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <PageHeader title="Agent Hub Lite" subtitle="Simple task list using mock data" />


        <div className="mt-8 space-y-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />

          ))}
        </div>
      </div>
    </main>
  );
}