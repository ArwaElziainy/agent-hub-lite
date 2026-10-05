import PageHeader from "@/app/components/PageHeader";
import TaskCard from "@/app/components/TaskCard";
import type { Task } from "@/app/data/tasks";
// import { tasks } from "./data/tasks";

async function getTasks(): Promise<Task[]>{
  const response  = await fetch("http://localhost:3000/api/tasks",{
    cache: "no-store"
  });
  if(!response.ok){
    throw new Error("Faild to fetch tasks");
  }

  return response.json();

}

export default async function Home() {

  const tasks  = await getTasks();

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <PageHeader title="Agent Hub Lite" subtitle="Task list loaded from /api/tasks" />


        <div className="mt-8 space-y-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />

          ))}
        </div>
      </div>
    </main>
  );
}