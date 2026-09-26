Base Path = https://practicetasks.kz/api/v1


SignUp - регистрация

/auth/signup

Request Payload
```json
{
  "email": "почта",
  "password": "пароль",
  "name": "имя_пользователя"
}
```

Response Payload
```json
{
  "success": "true|false",
  "refreshToken": "string",
  "accessToken": "string",
  "user": {
    "email": "почта",
    "name": "имя_пользователя"
  }
}
```


---

получение информаций о пользователе (защищенный)

GET /me

Header:
Authorization: <accessToken>

Response Payload
```json
{
  "success": "true|false",
  "user": {
    "email": "почта",
    "name": "имя_пользователя"
  }
}
```

---

Login - логин

/auth/login

Request Payload
```json
{
  "email": "почта",
  "password": "пароль"
}
```

Response Payload
```json
{
  "success": "true|false",
  "refreshToken": "string",
  "accessToken": "string",
  "user": {
    "email": "почта",
    "name": "имя_пользователя"
  }
}
```


---

Refresh - получение нового accessToken

/auth/refresh

Request Payload
```json
{
  "refreshToken": "токен"
}
```

Response Payload
```json
{
  "success": "true|false",
  "refreshToken": "string",
  "accessToken": "string",
  "user": {
    "email": "почта",
    "name": "имя_пользователя"
  }
}
```


