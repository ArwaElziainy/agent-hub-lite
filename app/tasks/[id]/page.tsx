import { tasks } from "@/app/data/tasks";
import Link from "next/link";

type TaskDetailsProps = {
    params: Promise<{id:string}>;
};

export default async function TaskDetailsPage({params}: TaskDetailsProps){
    const {id} = await params;
    const task = tasks.find((item) => item.id === Number(id));

    if(!task){
        return(
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
    return(
        <main className=" min-h-screen bg-gray-50 p-8">
            <div className=" mx-auto max-w-3xl rounded-xl border bg-white p-6 shadow-sm">
                <Link href="/" className="text-sm text-blue-600">
                ← Back to tasks
                </Link>
                <h1 className="mt-4 text-3xl font-bold text-gray-900">
                    {task.title}
                </h1>
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