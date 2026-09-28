import Link from "next/link";

type TaskCardProps = {
    id: number;
    title:string;
    agent:string;
    status:string;
};

export default function TaskCard({id,title,agent,status}: TaskCardProps){
    return(
        <Link href={`/tasks/${id}`} className="block rounded-xl border bg-white p-5 shadow-sm hover:bg-gray-50">
            <h2 className=" text-lg font-semibold text-gray-900">
                {title}
            </h2>
            <p className="mt-1 text-sm text-gray-600">Agent: {}agent</p>
            <p className=" mt-1 text-sm font-medium text-blue-600">Status: {status}</p>
        </Link>
    );
}