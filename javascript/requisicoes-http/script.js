// URL: https://sujeitoprogramador.com/rn-api/?api=posts

const listElement = document.querySelector("#app");

let posts = [];

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
        .then((response) => response.json())
        .then((data) => {
            posts = data;
            posts.map((post) => {
                const liElement = document.createElement("li");
                liElement.id = `item-${post.id}`;
                liElement.innerHTML = `
                <h2>${post.titulo}</h2>
                <img src="${post.capa}" alt="${post.subtitulo}" />
                <p>${post.subtitulo}</p>
                <p class="categoria">Categoria: <a href="#">${post.categoria}</a></p>
            `;
                listElement.append(liElement);
            });
        })
        .catch(() => console.log("Error!"));
}

nutriApp();
