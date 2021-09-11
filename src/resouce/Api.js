const params = {
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
}

const URL = "https://localhost:3000";

function getNews(subject) {
    return fetch(`${URL}/${subject}`,params)
        .then((response) => Response.json())
        .catch((err)=>{
            console.log('Ocorreu um erro', err)
        })

}

export default {
    getNews
}
