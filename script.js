function verificar() 
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

        if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Você digitou algum dado errado, verifique e tente novamente!')
         }
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 18) {
            // criança
            img.setAttribute('src', 'Foto criança menino.jpg')        
        } else if (idade < 60) {
            // adulta
            img.setAttribute('src', 'Foto adulto homem.jpg' )
        } else  {
            // idosa
            img.setAttribute('src', 'Foto idoso homem.jpg')
        }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                // criança
                img.setAttribute('src', 'Foto criança menina.jpg')
            } else if (idade < 60) {
                // adulta
                img.setAttribute('src', 'Foto adulto mulher.jpg')
            } else  {
                // idosa
                img.setAttribute('src', 'Foto idosa mulher.jpg')
            }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
         }
}                           