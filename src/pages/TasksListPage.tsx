import {taskPriorities, tasks, taskStatuses} from "../data/tasks.ts";
import {useSearchParams} from 'react-router-dom';
import * as React from "react";

export default function TasksListPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const status = searchParams.get('status'); // NEW | IN_PROGRESS | DONE | TESTING | null
    const priority = searchParams.get('priority'); // LOW | NORMAL | HIGH | null

    const filteredTasks = tasks
        .filter(task => !status || task.status === status)
        .filter(task => !priority || task.priority === priority)


    function handleChange(e: React.ChangeEvent<HTMLSelectElement>, param: string)  {
        const value = e.target.value;

        // value = ''
        // param = 'status'

        // prev = {status: 'NEW', priority: 'HIGH'}
        setSearchParams(prev => {
            if (e.target.value) {
                prev.set(param, value) // {status: 'NEW', priority: 'HIGH'} -> {status: 'DONE', priority: 'HIGH'}
            } else {
                prev.delete(param) // {status: 'NEW', priority: 'HIGH'} -> {priority: 'HIGH'}
            }
            return prev;
        })
    }

    return (
        <div>
            Страница с задачами

            <select value={status ?? ""} onChange={e => handleChange(e, 'status')}>
                <option value="">All</option>
                {taskStatuses.map(taskStatus => (
                    <option value={taskStatus}>{taskStatus}</option>
                ))}
            </select>

            <select value={priority ?? ""} onChange={e => handleChange(e, 'priority')}>
                <option value="">All</option>
                {taskPriorities.map(taskPriority => (
                    <option value={taskPriority}>{taskPriority}</option>
                ))}
            </select>

            <table>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>status</th>
                        <th>priority</th>
                        <th>createdAt</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td>{task.status}</td>
                            <td>{task.priority}</td>
                            <td>{task.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}