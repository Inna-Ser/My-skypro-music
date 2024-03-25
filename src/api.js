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
        username
}) {
        return fetch(signupHost, {
                        method: "POST",
                        body: JSON.stringify({
                                email,
                                password,
                                username,
                        }),
                        headers: {
                                "content-type": "application/json",
                        },
                }).then((response) => {
                        if (response.status === 400) {
                                throw new Error("Такой пользователь уже существует");
                        }
                        return response.json();
                })
                .then((json) => console.log(json));
}

export async function todoLogin({
        username,
        password
}) {
        return fetch(loginHost, {
                method: "POST",
                body: JSON.stringify({
                        username,
                        password,
                }),
                headers: {
                        // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
                        "content-type": "application/json",
                },
        }).then((response) => {
                if (response.status === 400) {
                        throw new Error("Неверный логин или пароль");
                }
                return response.json();
        });
}