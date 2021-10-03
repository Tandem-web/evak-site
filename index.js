window.onload = () => {
    let allpopups = document.querySelectorAll('.pop-up');
    allpopups.forEach(item => {
        item.addEventListener('click', (e) =>{
            if(e.target.classList[0] == item.classList[0]){
                item.classList.add('pop-up-hidden');
            }
        });
    });
    let allCartBtns = document.querySelectorAll('.cart-btn');
    allCartBtns.forEach(item => {
        item.addEventListener('click', () =>{
            console.log(1)
            document.querySelector('.pop-up').classList.remove('pop-up-hidden');
        });
    });
    document.querySelector('.close-pop-up').onclick = () => {
        document.querySelector('.pop-up').classList.add('pop-up-hidden');
    }
}