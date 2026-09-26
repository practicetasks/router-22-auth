import {Outlet} from "react-router";

export default function TasksLayout() {
    return (
        <div style={{border: '1px solid white'}}>
            Layout
            <Outlet/>
        </div>
    )
}