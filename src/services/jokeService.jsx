// export const getJokes = () => {
//     return fetch('http://localhost:8088/jokes').then((res) => res.json())
// }

export const submitJoke = (joke) => {
    joke.preventDefault();

    const form = joke.target;
    const formData = new FormData(form);
    fetch('http://localhost:8088/jokes', { method: form.method, body: formData.value});
}