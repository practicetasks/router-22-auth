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
import {getMe, login, type LoginRequest, type TokenResponse} from "./api.ts";
import {Route, Routes} from "react-router-dom";
import TasksListPage from "./pages/TasksListPage.tsx";

function App() {
    const [formState, setFormState] = useState<LoginRequest>({email: '', password: ''});

    const [response, setResponse] = useState<TokenResponse | null>(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) return

        getMe(accessToken)
            .then(data => {
                if (data.success) {
                    setResponse(data);
                }
            });
    }, []);

    if (response?.user) {
        return <div>
            <p>name {response.user.name}</p>
            <p>email {response.user.name}</p>
        </div>
    }

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        login(formState).then(data => {
            if (data.success) {
                setResponse(data);
                localStorage.setItem('accessToken', data.accessToken!);
                localStorage.setItem('refreshToken', data.refreshToken!);
            }
        });
    }

    return (
        <>
            {/*<div>*/}
            {/*    <form onSubmit={handleSubmit}>*/}

            {/*        <h3>Логин</h3>*/}
            {/*        <input placeholder={'Введите email'}*/}
            {/*               onChange={e => setFormState({...formState, email: e.target.value})}/>*/}

            {/*        <input placeholder={'Введите password'}*/}
            {/*               onChange={e => setFormState({...formState, password: e.target.value})}/>*/}

            {/*        <button>Подтвердить</button>*/}
            {/*    </form>*/}
            {/*</div>*/}
            <Routes>
                <Route path="/tasks"  element={<TasksListPage/>}/>
            </Routes>
        </>
    )


    {/*<div>*/
    }
    {/*    <h1>App</h1>*/
    }
    {/*    <nav style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>*/
    }
    {/*        <Link to={"/"}>Главная</Link>*/
    }
    {/*        <Link to={"/login"}>Вход</Link>*/
    }
    {/*        <Link to={"/register"}>Регистрация</Link>*/
    }
    {/*        <Link to={"/users"}>Список пользователей</Link>*/
    }
    {/*    </nav>*/
    }
    {/*</div>*/
    }



    {/*<footer style={{background: 'blue'}}>*/
    }
    {/*    Подвал*/
    }
    {/*</footer>*/
    }
}

export default App
