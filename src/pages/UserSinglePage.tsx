import {useParams} from "react-router-dom";
import {users} from "../data/users.ts";

export function UserSinglePage() {
    const {id} = useParams();

    // id = string | undefined
    if (!id) {
        return <h1>id не передан</h1>
    }

    const user = users.find(u => u.id === id);

    if (!user) {
        return <h1>Пользователь с id={id} не найден</h1>
    }

    return (
        <div>
            <p>name: {user.name}</p>
            <p>createdAt: {user.createdAt}</p>
            <div>
                отзывы
                {user.reviews.map(review => (
                    <p> - {review}</p>
                ))}
            </div>
        </div>
    )
}