let grey = document.querySelector('#grey')
let red = document.querySelector('#red')
let green = document.querySelector('#green')
let blue = document.querySelector('#blue')
let solid = document.querySelector('#solid')
let dotted = document.querySelector('#dotted')
let dashed = document.querySelector('#dashed')
let top_retire = document.querySelector('#top_supprime')
let topRemettre = document.querySelector('#top_remettre')
let topGros = document.querySelector('#top_gros')
let compteur = document.querySelector('#compteur')
let button_compteur = document.querySelector('.button')
let buttonAll = document.querySelectorAll('.fleche_haut')
let button_MoinsAll = document.querySelectorAll('.fleche_bas')
let chiffre = document.querySelector('.chiffre')

let section = document.querySelector('.main')


// 1 ere ligne
let ridge= document.getElementById('ridge')
let spanRidge = ridge.querySelector('span')
red.addEventListener('click' , ()=>{
    section.style.backgroundColor = "red"
})
green.addEventListener('click' , ()=>{
    section.style.backgroundColor = "green"
})
blue.addEventListener('click' , ()=>{
    section.style.backgroundColor = "aqua"
})

grey.addEventListener('click' , ()=>{
    section.style.backgroundColor = "lightslategrey"
})

solid.addEventListener('click' , ()=>{
    section.style.border="4px solid black"
})
dotted.addEventListener('click' , ()=>{
    section.style.border="6px dotted black"
})
dashed.addEventListener('click' , ()=>{
    section.style.border="3px dotted black"
})

top_retire.addEventListener('click', ()=>{
    section.style.borderTopColor="transparent"
})

topRemettre.addEventListener('click' , ()=>{
    section.style.borderTopColor ="black"
})
topGros.addEventListener('click' , ()=>{
    section.style.borderTop ="25px dotted black"
})

//2 ieme ligne & troisieme ligne
window.addEventListener('click', ()=>{ })
buttonAll.forEach(element=>{
    let test = element.parentElement.parentElement.children
    element.addEventListener('click' , ()=>{
     
        let valeur =  test[0].innerHTML
        let convertValeur=parseInt(valeur)
        test[0].innerHTML = convertValeur +=1
        let mesPixel = test[0].innerHTML + "px"
        // section.style.borderWidth = mesPixel
        let compteurUn = document.getElementById('compteur_Un')
        let btnaugmenter_Un = compteurUn.querySelector('.fleche_haut')
        btnaugmenter_Un.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderWidth = mesPixel
        })
        let compteurDeux = document.getElementById('compteur_Deux')
        let btnaugmenter_Deux = compteurDeux.querySelector('.fleche_haut')
        btnaugmenter_Deux.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderTopWidth = mesPixel
        })
        let compteurTrois= document.getElementById('compteur_Trois')
        let btnaugmenter_Trois = compteurTrois.querySelector('.fleche_haut')
        btnaugmenter_Trois.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderRightWidth = mesPixel
        })
        let compteurQuatre= document.getElementById('compteur_Quatre')
        let btnaugmenter_Quatre = compteurQuatre.querySelector('.fleche_haut')
        btnaugmenter_Quatre.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderBottomWidth = mesPixel
        })
        let compteurCinq= document.getElementById('compteur_Cinq')
        let btnaugmenter_Cinq = compteurCinq.querySelector('.fleche_haut')
        btnaugmenter_Cinq.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderLeftWidth = mesPixel
        })
        let compteurSix= document.getElementById('compteur_Six')
        let btnaugmenter_Six= compteurSix.querySelector('.fleche_haut')
        btnaugmenter_Six.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderRadius = mesPixel
        })
        let compteurSept= document.getElementById('compteur_Sept')
        let btnaugmenter_Sept= compteurSept.querySelector('.fleche_haut')
        btnaugmenter_Sept.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderTopLeftRadius = mesPixel
        })
        let compteurHuit= document.getElementById('compteur_Huit')
        let btnaugmenter_Huit= compteurHuit.querySelector('.fleche_haut')
        btnaugmenter_Huit.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderTopRightRadius = mesPixel
        })
        let compteurNeuf= document.getElementById('compteur_Neuf')
        let btnaugmenter_Neuf= compteurNeuf.querySelector('.fleche_haut')
        btnaugmenter_Neuf.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderBottomRightRadius = mesPixel
        })
        let compteurDix= document.getElementById('compteur_Dix')
        let btnaugmenter_Dix= compteurDix.querySelector('.fleche_haut')
        btnaugmenter_Dix.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderBottomLeftRadius = mesPixel
        })


    })
})
button_MoinsAll.forEach(element=>{
    let test = element.parentElement.parentElement.children
    element.addEventListener("click" , ()=>{
        let valeur =  test[0].innerHTML
        let convertValeur=parseInt(valeur)
        test[0].innerHTML = convertValeur -=1
        let compteurUn = document.getElementById('compteur_Un')
        let btnaugmenter_Un = compteurUn.querySelector('.fleche_bas')
        btnaugmenter_Un.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderWidth = mesPixel
        })
        let compteurDeux = document.getElementById('compteur_Deux')
        let btnaugmenter_Deux = compteurDeux.querySelector('.fleche_bas')
        btnaugmenter_Deux.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderTopWidth = mesPixel
        })
        let compteurTrois= document.getElementById('compteur_Trois')
        let btnaugmenter_Trois = compteurTrois.querySelector('.fleche_bas')
        btnaugmenter_Trois.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderRightWidth = mesPixel
        })
        let compteurQuatre= document.getElementById('compteur_Quatre')
        let btnaugmenter_Quatre = compteurQuatre.querySelector('.fleche_bas')
        btnaugmenter_Quatre.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderBottomWidth = mesPixel
        })
        let compteurCinq= document.getElementById('compteur_Cinq')
        let btnaugmenter_Cinq = compteurCinq.querySelector('.fleche_bas')
        btnaugmenter_Cinq.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderLeftWidth = mesPixel
        })
        let compteurSix= document.getElementById('compteur_Six')
        let btnaugmenter_Six= compteurSix.querySelector('.fleche_bas')
        btnaugmenter_Six.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderRadius = mesPixel
        })
        let compteurSept= document.getElementById('compteur_Sept')
        let btnaugmenter_Sept= compteurSept.querySelector('.fleche_bas')
        btnaugmenter_Sept.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderTopLeftRadius = mesPixel
        })
        let compteurHuit= document.getElementById('compteur_Huit')
        let btnaugmenter_Huit= compteurHuit.querySelector('.fleche_bas')
        btnaugmenter_Huit.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderTopRightRadius = mesPixel
        })
        let compteurNeuf= document.getElementById('compteur_Neuf')
        let btnaugmenter_Neuf= compteurNeuf.querySelector('.fleche_bas')
        btnaugmenter_Neuf.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderBottomRightRadius = mesPixel
        })
        let compteurDix= document.getElementById('compteur_Dix')
        let btnaugmenter_Dix= compteurDix.querySelector('.fleche_bas')
        btnaugmenter_Dix.addEventListener('click' , ()=>{
            let mesPixel = test[0].innerHTML + "px"
            section.style.borderBottomLeftRadius = mesPixel
        })
        
 
        })
    })

    spanRidge.addEventListener('click', ()=>{
        spanRidge.style.transitionDelay="2s"
        spanRidge.style.backgroundColor="red"
        section.style.borderColor="red"
    })






