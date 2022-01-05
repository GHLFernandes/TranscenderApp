const ACCESS_TOKEN_MAP_BOX =
    "pk.eyJ1IjoiZ2FicmllbGY5NiIsImEiOiJja3g5N2Z6MGIwdDM3MnByeW5uNXdyZ2hyIn0.Ui8FEEqY1LCWpi6-iXSWAQ";

export const fetchLocalMapBox = (local: string) =>
    fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
    ).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
    fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);