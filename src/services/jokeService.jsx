//joke below is an object being called and sent to database.json
export const submitJoke = async (joke) => {

    const newJoke = {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(joke)
    };

    await fetch ('http://localhost:8088/jokes', newJoke)
}