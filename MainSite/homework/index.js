function hide(id) {
    let e = document.getElementById(id);
    let E=document.getElementsByClassName('NN')
    for(let i=0; i< E.length; i++){
        E[i].style.display = 'none'
    }
    // console.log(E.length)
    if (e.style.display === 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

