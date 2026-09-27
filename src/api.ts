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

export type RefreshRequest = {
    refreshToken: string
}

export type TokenResponse = {
    success: boolean,
    accessToken?: string,
    refreshToken?: string,
    user?: {
        email: string,
        name: string
    },
    error?: string
}

// success=false - error
// success=true - user, refreshToken, accessToken

export function register(payload: RegisterRequest) {
    return fetch(BASE_PATH + "/auth/signup", {
        method: 'POST',
        body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(data => data as TokenResponse);
}

export function login(payload: LoginRequest) {
    return fetch(BASE_PATH + "/auth/login", {
        method: 'POST',
        body: JSON.stringify(payload)
    })
        .then(resp => resp.json())
        .then(data => data as TokenResponse);
}

export function refresh(payload: RefreshRequest) {
    return fetch(BASE_PATH + "/auth/refresh", {
        method: 'POST',
        body: JSON.stringify(payload)
    })
        .then(resp => resp.json())
        .then(data => data as TokenResponse);
}

export async function fetchWithRefresh(url: string, init?: RequestInit) {
    const response = await fetch(url, init);
    const data = await response.json() as TokenResponse;

    if (data.success) {
        return data;
    }

    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) throw new Error('invalid');

    const refreshResponse = await refresh({refreshToken});

    if (!refreshResponse.success) {
        throw new Error('invalid');
    }

    localStorage.setItem('accessToken', refreshResponse.accessToken!);

    const retryResponse = await fetch(url, init);
    const retryData = await retryResponse.json() as TokenResponse;

    if (!retryData.success) {
        throw new Error('invalid');
    }

    return retryData;
}

export function getMe(accessToken: string) {
    return fetchWithRefresh(BASE_PATH + "/me", {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
}
