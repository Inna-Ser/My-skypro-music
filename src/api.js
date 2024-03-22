const baseHost = "https://skypro-music-api.skyeng.tech/catalog";
const getTracksHost = `${baseHost}/track/all`;
const signupHost = "https://skypro-music-api.skyeng.tech/user/signup/";
const loginHost = "https://skypro-music-api.skyeng.tech/user/login/";

export async function getTracks() {
        const response = await fetch(getTracksHost, {
                method: "GET"
        });
        if (!response.ok) {
                throw new Error("Не удалось загрузить плейлист, попробуйте позже")
        }
        const data = await response.json();
        return data;
}

export async function todoSignup({
        email,
        password,
        repeatPassword
}) {
        return fetch(signupHost, {
                method: "POST",
                body: JSON.stringify({
                        login: email,
                        password,
                        repeatPassword,
                }),
        }).then((response) => {
                if (response.status === 400) {
                        throw new Error("Такой пользователь уже существует");
                }
                return response.json();
        });
}

export async function todoLogin({
        email,
        password,
}) {
        return fetch(loginHost, {
                method: "POST",
                body: JSON.stringify({
                        login: email,
                        password,
                }),
        }).then((response) => {
                if (response.status === 400) {
                        throw new Error("Неверный логин или пароль");
                }
                return response.json();
        });
}