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
        "afterbegin",
        <div class="card1">
        <div class="card">
        <h2>${card.title}</h2>
        <img class="card-img" src="${card.image}" alt=""></img>
        <p>${card.type}</p>
        </div>
        <button class="removeBtn"

    )
};