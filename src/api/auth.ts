import {Address} from './config';

const isAuthenticated = () => {
    const token = localStorage.getItem('token')
    return (token != null)
}

const get_user_data = async () => {
    const header = new Headers({
        "authorization": `Bearer ${localStorage.getItem('token')}`
    })
    const request = new Request(Address+"/users/me", {
            headers: header,
    })

    let response = await fetch(request);
    if (response.status === 500) {
        throw new Error("internal server error");
    }
    const data = await response.json();
    if (response.status > 400 && response.status < 500) {
        if (data.detail) {
            throw data.detail;
        }
        throw data
    }
    return data;
}

const login = async (username: string, password: string) => {
    if (!(username.length > 0) || !(password.length > 0)) {
        throw new Error("Username or password was not provided")
    }
    let formdata = new FormData();
    formdata.append("username", username)
    formdata.append('password', password)

    const request = new Request(Address+"/login", {
        method: "POST",
        body: formdata
    })

    let response = await fetch(request)
    if (response.status === 500) {
        throw new Error("Internal server error");
    }
    const data = await response.json()
    if (response.status > 400 && response.status < 500) {
        if (data.detail) {
            throw data.detail;
        }
        throw data;
    }
    if ('access_token' in data) {
        localStorage.setItem("token", data["access_token"]);
    }
    return data;
}

const register = async (email: string, username: string, password: string) => {
    if (!(email.length > 0)) throw new Error("Email was not provided")
    if (!(username.length > 0)) throw new Error("Username was not provided")
    if (!(password.length > 0)) throw new Error("Password was not provided")
    
    const request = new Request(Address + "/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: password
        }),
    });
    const response = await fetch(request);
    if (response.status === 500) {
        throw new Error("Internal server error");
    }
    const data = await response.json();
    if (response.status > 400 && response.status < 500) {
        if (data.detail) {
            throw data.detail;
        }
        throw data;
    }
    return data;
}


const logout = () => {
    localStorage.removeItem("token");
};

export { login, register, get_user_data }