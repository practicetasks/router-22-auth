import type {Task, TaskPriority, TaskStatus} from "../types.ts";

export const tasks: Task[] = [
    {id: crypto.randomUUID(), title: 'Добавить отдельную страницу редактирования шаблона', status: 'NEW', priority: 'NORMAL', createdAt: Date.now().toString()},
    {id: crypto.randomUUID(), title: 'Добавить возможность resize элемента', status: 'NEW', priority: 'LOW', createdAt: Date.now().toString()},
    {id: crypto.randomUUID(), title: 'Пофиксить проблему с долгой загрузкой данных', status: 'IN_PROGRESS', priority: 'HIGH', createdAt: Date.now().toString()},
    {id: crypto.randomUUID(), title: 'Исправить работу ссылки у товара', status: 'TESTING', priority: 'HIGH', createdAt: Date.now().toString()},
]

export const taskStatuses: TaskStatus[] = [
    'NEW', "IN_PROGRESS", 'TESTING', 'DONE'
]

export const taskPriorities: TaskPriority[] = [
    'LOW', "NORMAL", 'HIGH'
]

