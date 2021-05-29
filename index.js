const allQuestions = document.querySelectorAll('.ask');
const plusBtns = document.querySelectorAll('.fa-plus');
const minusBtns = document.querySelectorAll('.fa-minus');

function askParent(btn) {
    return btn.parentNode.parentNode.parentNode;
}

plusBtns.forEach(plus => {
    plus.addEventListener('click', function () {
        allQuestions.forEach(q => {
            q.classList.remove('show-answer');
        });

        askParent(this).classList.add('show-answer');
    })
});

minusBtns.forEach(minus => {
    minus.addEventListener('click', function () {
        askParent(this).classList.remove('show-answer');
    });
});



/* Another solution, shorter than mine and without selecting the whole document, only specific parts within each element:
* Otra solución más corta que la mía y sin seleccionar todo el documento, solo especificar partes dentro de cada elemento: */

/* const questions = document.querySelectorAll('.ask');

* questions.forEach(ask => {
*   const btn = ask.querySelector('.btn');
    
*     btn.addEventListener('click', function () {
*         questions.forEach(item => {
*             if (item !== ask) {
*                 item.classList.remove('show-answer');
*             }
*         });

*         ask.classList.toggle('show-answer');
*     });
* }); */