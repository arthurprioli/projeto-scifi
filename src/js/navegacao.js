(function() {
    function marcarLinkComoSelecionado(hash){
        const links = document.querySelectorAll(`[link-autor]`)
        links.forEach(link => link.classList.remove('selecionado'))

        const link = document.querySelector(`[link-autor='${hash}']`)
        link.classList.add('selecionado')
    }

    function navegarViaAjax(hash) {
        if (!hash) return

        const link = document.querySelector(`[link-autor='${hash}']`)
        const destino = document.querySelector('[link-autor-destino]')

        const url = hash.substring(1)
        fetch(url) 
            .then(resp => resp.text())
            .then(html => {
                destino.innerHTML = html
                marcarLinkComoSelecionado(hash)
            })
    }

    function configurarLinks() {
        document.querySelectorAll('[link-autor]')
            .forEach(link => {
                link.href = link.attributes['link-autor'].value
            })
    }

    function navegacaoInicial() {
        if (location.hash) {
            navegarViaAjax(location.hash)
        } else {
            const primeiroLink = document.querySelector('[wm-link]')
            navegarViaAjax(primeiroLink.hash)
        }
    }

    window.onhashchange = e => navegarViaAjax(location.hash)

    configurarLinks()
    navegacaoInicial()
})()