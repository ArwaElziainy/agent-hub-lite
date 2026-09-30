export type Task = {
  id:number;
  title:string;
  agent:string;
  status: "Open" | "In Progress" | "Completed";
};

export const tasks: Task[] = [
  {
    id: 1,
    title: "Review purchase requests",
    status: "Open",
    agent: "Finance Agent",
  },
  {
    id: 2,
    title: "Validate vendor data",
    status: "In Progress",
    agent: "Master Data Agent",
  },
  {
    id: 3,
    title: "Summarize open approvals",
    status: "Completed",
    agent: "Approval Agent",
  },
];

export function getTaskById(id:number): Task | undefined {
  return tasks.find((task) => task.id === id);
}