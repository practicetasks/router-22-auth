export type User = {
    id: string,
    name: string,
    reviews: string[],
    createdAt: string
}

export type TaskStatus = 'NEW' | 'IN_PROGRESS' | 'TESTING' |'DONE';
export type TaskPriority = 'LOW' | 'NORMAL' | 'HIGH';

export type Task = {
    id: string,
    title: string,
    description?: string,
    status: TaskStatus,
    priority: TaskPriority,
    createdAt: string
}

