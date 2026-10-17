import type { Task } from "@/app/data/tasks";

export async function fetchTasks(): Promise<Task[]>{
    const response = await fetch("http://localhost:3000/api/tasks",{
        cache: "no-store"
    });

    if(!response.ok){
        throw new Error("Faild to fetch tasks");
    }
    return response.json();
}

export async function fetchTaskById(id:string): Promise<Task | null>{
    const response = await fetch(`http://localhost:3000/api/tasks/${id}`,{
        cache:"no-store"
    });

    if(response.status === 404){
        return null;
    }

    if(!response.ok){
        throw new Error("Faild to fetch Task")
    }
    return response.json();

}

