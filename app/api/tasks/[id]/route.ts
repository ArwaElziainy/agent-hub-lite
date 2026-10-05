import { NextResponse } from "next/server";
import { getTaskById } from "@/app/data/tasks";

type RouteContext = {
    params: Promise<{id:string}>;
};

export async function GET(_request:Request, context:RouteContext) {
    const {id} = await context.params;
    const task = getTaskById(Number(id));

    if(!task){
        return NextResponse.json(
            {message:"Task not found"},
            {status:404}
        );
    }

    return NextResponse.json(task);
}