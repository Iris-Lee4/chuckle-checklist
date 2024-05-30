//joke below is an object being called and sent to database.json
export const submitJoke = (joke) => {
    return fetch ('http://localhost:8088/jokes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(joke)
    })
}

export const updateJoke = (joke) => {
    return fetch (`http://localhost:8088/jokes/${joke.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(joke)
    })
}