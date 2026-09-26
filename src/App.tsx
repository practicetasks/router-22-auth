// import {Routes, Route} from 'react-router';
// import LoginPage from "./pages/LoginPage.tsx";
// import RegisterPage from "./pages/RegisterPage.tsx";
// import MainPage from "./pages/MainPage.tsx";
// import NotFoundPage from "./pages/NotFoundPage.tsx";
// import {Link} from "react-router-dom";
// import TasksListPage from "./pages/TasksListPage.tsx";
// import RecentTasksPage from "./pages/RecentTasksPage.tsx";
// import TasksLayout from "./pages/TasksLayout.tsx";
// import {UsersListPage} from "./pages/UsersListPage.tsx";
import {useEffect, useState} from "react";
import {getMe, register, type RegisterRequest, type TokenResponse} from "./api.ts";

function App() {
    const [formState, setFormState] = useState<RegisterRequest>({email: '', name: '', password: ''});

    const [response, setResponse] = useState<TokenResponse | null>(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) return

        getMe(accessToken)
            .then(data => setResponse(data));
    }, []);

    if (response?.user) {
        return <div>
            <p>name {response.user.name}</p>
            <p>email {response.user.name}</p>
        </div>
    }

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        register(formState).then(data => {
            setResponse(data);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <h3>Регистрация</h3>
                <input placeholder={'Введите email'}
                       onChange={e => setFormState({...formState, email: e.target.value})}/>

                <input placeholder={'Введите name'} onChange={e => setFormState({...formState, name: e.target.value})}/>

                <input placeholder={'Введите password'}
                       onChange={e => setFormState({...formState, password: e.target.value})}/>

                <button>Подтвердить</button>
            </form>
        </div>
    )


            {/*<div>*/}
            {/*    <h1>App</h1>*/}
            {/*    <nav style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>*/}
            {/*        <Link to={"/"}>Главная</Link>*/}
            {/*        <Link to={"/login"}>Вход</Link>*/}
            {/*        <Link to={"/register"}>Регистрация</Link>*/}
            {/*        <Link to={"/users"}>Список пользователей</Link>*/}
            {/*    </nav>*/}
            {/*</div>*/}

            {/*<Routes>*/}
            {/*    <Route path="/" element={<MainPage/>}/>*/}
            {/*    <Route path="/login" element={<LoginPage/>}/>*/}
            {/*    <Route path="/register" element={<RegisterPage/> }/>*/}

            {/*    <Route path="/users" element={<UsersListPage/> }/>*/}
            {/*    <Route path="/users/:id" element={<UserSinglePage/> }/>*/}

            {/*    /!*<Route path="/tasks" element={<TasksListPage/>}/>*!/*/}
            {/*    /!*<Route path="/tasks/recent" element={<RecentTasksPage/>}/>*!/*/}

            {/*    <Route path={"/tasks"} element={<TasksLayout/>}>*/}
            {/*        <Route index element={<TasksListPage/> }/>*/}
            {/*        <Route path="recent" element={<RecentTasksPage/>}/>*/}
            {/*    </Route>*/}


            {/*    <Route path="*" element={<NotFoundPage/> }/>*/}
            {/*</Routes>*/}

            {/*<footer style={{background: 'blue'}}>*/}
            {/*    Подвал*/}
            {/*</footer>*/}
}

export default App
