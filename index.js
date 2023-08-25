let text = document.getElementById('text'); //text id ulaşmak için text değişkeni oluşturdum. çünkü textin aşağı doğru hareketini sağlamak istiyoruz.
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');


window.addEventListener('scroll', ()=>{ // 'scroll özelliği ile value değişkenini text_in y ekseninde hareketinin kontrolünü sağlıyorum.'
    let value = window.scrollY

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left= value * -1.5 + 'px';
    treeRight.style.left= value * 1.5 + 'px';
    gateLeft.style.left= value * 0.5 + 'px';
    gateRight.style.left= value * -0.5 + 'px';
});