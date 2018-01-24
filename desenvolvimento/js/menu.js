var menuAbrir = document.querySelector('.abrir');

menuAbrir.addEventListener('click', function () {
    document.documentElement.classList.add('menu-ativo');
});

var menuFechar = document.querySelector('.fechar');

menuFechar.addEventListener('click', function () {
    document.documentElement.classList.remove('menu-ativo');
});

var liFechar = document.querySelectorAll('li');
liFechar.forEach(function (li) {
    li.addEventListener('click', function () {
        document.documentElement.classList.remove('menu-ativo');
    })
});



document.documentElement.onclick = function (event) {
    if (event.target === document.documentElement) {
        document.documentElement.classList.remove('menu-ativo');
    }
};
