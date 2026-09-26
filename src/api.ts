const BASE_PATH = "https://practicetasks.kz/api/v1";

export type RegisterRequest = {
    email: string,
    name: string,
    password: string
}

export type LoginRequest = {
    email: string,
    password: string
}

export type TokenResponse = {
    success: boolean,
    accessToken: string,
    refreshToken: string,
    user: {
        email: string,
        name: string
    }
}

export function register(payload: RegisterRequest) {
    return fetch(BASE_PATH + "/auth/signup", {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(data => data as TokenResponse);
}

export function getMe(accessToken: string) {
    return fetch(BASE_PATH + "/me", {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
        .then(resp => resp.json())
        .then(data => data as TokenResponse);
}
