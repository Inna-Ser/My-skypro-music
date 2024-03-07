const baseHost = "https://skypro-music-api.skyeng.tech/catalog";
const getTracksHost = `${baseHost}/track/all`;

export function getTracks() {
  return fetch(getTracksHost, {
    method: "GET",
  }).then((response) => {
    return response.json();
  });
}

export function getTrack({ token, id }) {
  return fetch(`${baseHost}/track/${id}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  }).then((response) => {
    return response.json();
  });
}
