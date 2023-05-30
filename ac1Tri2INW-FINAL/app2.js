const url = 'http://localhost:3000/produtos'
fetch(url)
 .then((req) => req.json())
 .then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
 const htmlProdutos = produtos.map(
 (produto) =>`
        <div class="card" style="width: 18rem;">
            <img src="${produto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${produto.produto}</h5>
                <p class="card-text">${produto.cor}</p>
                <p class="card-text">${produto.marca}</p>
                <p class="card-text">R$${(produto.preco).toFixed(2)}</p>
            </div>
        </div>`
);



document.getElementById('app').innerHTML = htmlProdutos;
}