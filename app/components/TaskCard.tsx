import Link from "next/link";
import type { Task } from "../data/tasks";

type TaskCardProps = {
  task:Task;    
};

export default function TaskCard({task}: TaskCardProps){
    return(
        <Link href={`/tasks/${task.id}`} className="block rounded-xl border bg-white p-5 shadow-sm hover:bg-gray-50">
            <h2 className=" text-lg font-semibold text-gray-900">
                {task.title}
            </h2>
            <p className="mt-1 text-sm text-gray-600">Agent: {task.agent}</p>
            <p className=" mt-1 text-sm font-medium text-blue-600">Status: {task.status}</p>
        </Link>
    );
}