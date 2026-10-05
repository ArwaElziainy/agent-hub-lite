// import { tasks } from "@/app/data/tasks";
import PageHeader from "@/app/components/PageHeader";
import { Task } from "@/app/data/tasks";
import Link from "next/link";

type TaskDetailsProps = {
    params: Promise<{ id: string }>;
};

async function getTask(id: string): Promise<Task | null> {
    const response = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        cache: "no-store"
    });
    if (response.status === 404) {
        return null;
    }
    if (!response.ok) {
        throw new Error("Faild to fetch task");
    }
    return response.json();
}

export default async function TaskDetailsPage({ params }: TaskDetailsProps) {
    const { id } = await params;
    const task = await getTask(id);

    if (!task) {
        return (
            <main className="min-h-screen bg-gray-50 p-8">
                <div className=" mx-auto max-w-3xl">
                    <h1 className="text-2xl font-bold text-gray-900">Task not found</h1>
                    <Link href="/" className=" mt-4 inline-block text-blue-600">
                        ← Back to tasks
                    </Link>
                </div>
            </main>
        );
    }
    return (
        <main className=" min-h-screen bg-gray-50 p-8">
            <div className=" mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow-sm">
                <Link href="/" className="text-sm text-blue-600">
                    ← Back to tasks
                </Link>
                <PageHeader title={task.title} subtitle={`Agent: ${task.agent}`} />

                <p className=" mt-4 text-gray-700">
                    <span className=" font-semibold" >Agent: </span> {task.agent}
                </p>
                <p className=" mt-4 text-gray-700">
                    <span className=" font-semibold" >Status: </span> {task.status}
                </p>
                <p className=" mt-4 text-gray-700">
                    <span className=" font-semibold" >Task ID: </span> {task.id}
                </p>
            </div>
        </main>
    )
}