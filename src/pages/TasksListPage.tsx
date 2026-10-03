import {taskPriorities, tasks, taskStatuses} from "../data/tasks.ts";
import {useSearchParams} from 'react-router-dom';
import {useDebounce} from "../hooks/useDebounce.tsx";
import {useEffect, useState} from "react";

export default function TasksListPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');

    const [inputQuery, setInputQuery] = useState(query ?? '');

    const debounceQuery = useDebounce(inputQuery, 1000);

    useEffect(() => {
        setSearchParams(prev => {
            if (debounceQuery) {
                prev.set("query", debounceQuery)
            } else {
                prev.delete("query")
            }

            return prev
        })
    }, [debounceQuery, setSearchParams]);

    const filteredTasks = tasks
        .filter(task => !query || task.title.toLowerCase().includes(query.toLowerCase()))


    return (
        <div>
            Страница с задачами

            <input onChange={e => setInputQuery(e.target.value)}/>

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