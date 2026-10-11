import PageHeader from "@/app/components/PageHeader";
import TaskCard from "@/app/components/TaskCard";
import type { Task } from "@/app/data/tasks";

async function getTasks(): Promise<Task[]>{
  const response  = await fetch("http://localhost:3000/api/tasks",{
    cache: "no-store"
  });
  if(!response.ok){
    throw new Error("Faild to fetch tasks");
  }

  return response.json();

  // throw new Error("Failed to fetch task");

}

export default async function Home() {

  let tasks : Task[] = [];
  let errorMessage = "";

  try{
    tasks = await getTasks();
  } catch{
    errorMessage = "Could not load tasks. Please try again.";
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <PageHeader title="Agent Hub Lite" subtitle="Task list loaded from /api/tasks" />

        {errorMessage ? (
          <div className=" mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
            {errorMessage}
          </div>
        ) : (
          <section className="mt-8 space-y-4">
              {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />

          ))}
          </section>
        )}

      </div>
    </main>
  );
}