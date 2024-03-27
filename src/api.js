const baseHost = "https://skypro-music-api.skyeng.tech/catalog";
const getTracksHost = `${baseHost}/track/all`;
const signupHost = "https://skypro-music-api.skyeng.tech/user/signup/";
const loginHost = "https://skypro-music-api.skyeng.tech/user/login/";

const apiFunctions = {
        async getTracks() {
                const response = await fetch(getTracksHost, {
                        method: "GET"
                });
                if (!response.ok) {
                        throw new Error("Не удалось загрузить плейлист, попробуйте позже")
                }
                const data = await response.json();
                return data;
        },

        async todoSignup({
                email,
                password,
                username
        }) {
                try {
                        const response = await fetch(signupHost, {
                                method: "POST",
                                body: JSON.stringify({
                                        email,
                                        password,
                                        username,
                                }),
                                headers: {
                                        "content-type": "application/json",
                                },
                        });
                        if (response.status === 400) {
                                throw new Error("Такой пользователь уже существует");
                        }
                        return await response.json();
                } catch (error) {
                        console.error("Ошибка при регистрации пользователя:", error.message);
                        throw error;
                }
        },

        async todoLogin({
                email,
                password
        }) {
                return fetch(loginHost, {
                        method: "POST",
                        body: JSON.stringify({
                                email,
                                password,
                        }),
                        headers: {
                                // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
                                "content-type": "application/json",
                        },
                }).then((response) => {
                        if (!response.ok) {
                                throw new Error("Неверный логин или пароль");
                        }
                        return response.json();
                });
        }
};

export default apiFunctions;