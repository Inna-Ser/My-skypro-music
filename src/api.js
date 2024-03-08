const baseHost = "https://skypro-music-api.skyeng.tech/catalog";
const getTracksHost = `${baseHost}/track/all`;

export function getTracks() {
        return fetch(getTracksHost, {
                method: "GET",
        }).then((response) => {
                if (!response.ok) {
                        throw new Error("Oшибка сервера")
                }
                return response.json();
        });
}

