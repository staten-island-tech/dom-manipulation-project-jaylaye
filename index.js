const DOMSelectors = {
    form: document.querySelector('#form'),
    val: document.querySelector('#val'),
    type: document.querySelector('#type'),
    image: document.querySelector('#image'),
    container: document.querySelector('.container')

};

DOMSelectors.form.addEventListener("submit", function (event){
    event.preventDefault();
    const card = {
        val: DOMSelectors.val.value,
        type: DOMSelectors.type.value,
        image: DOMSelectors.image.value,
    };
    createCard(card);
    clearFields();
});

function createCard(card){
    DOMSelectors.container.createAdjacentHTML(
        
    )
}