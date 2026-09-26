import {users} from "../data/users.ts";
import {Link} from "react-router-dom";

export function UsersListPage() {
    return (
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>CREATED AT</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>
                            <Link to={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </td>
                        <td>{user.createdAt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}