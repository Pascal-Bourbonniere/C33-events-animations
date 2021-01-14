const moveGeneric = () => {    
    const nodeGeneric = document.getElementById('generic')
    // offsetop donne la distance de l'élément p/r au dessus de la page....
    // bref, c'est la valeur de top
    const y = nodeGeneric.offsetTop
    nodeGeneric.style.top =  `${y - 2}px`
    console.log(nodeGeneric.offsetTop)
    if(y >= -3000){
        setTimeout(moveGeneric,30)
    }
}
moveGeneric()

