const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getPictures(token) {
    const requestOptions = {
        method: "GET",
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };
    
    const response = await fetch(`${BACKEND_URL}/pictures`, requestOptions);
    
    if (response.status !== 200) {
        throw new Error("You sure these pictures exist, bro?");
    }
    
    const data = await response.json();
    return data;
}

export async function createPicture(picture) {
    const user = JSON.parse(localStorage.getItem("user"));

    const payload = {
        URL: picture.url,
        title: picture.title,
        alttext: picture.alttext,
        user: user.username
    };
    const requestOptions = {
        method: "POST",
        headers: {
        Authorization: `Bearer ${localStorage.token}`,

        "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
    };
    const response = await fetch(`${BACKEND_URL}/pictures`, requestOptions);
    if (response.status !== 201) {
        throw new Error("Unable to create picture");
    }
    const data = await response.json();
    return data;
    }
