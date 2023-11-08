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
    removeW();
    clearFields();
});

function clearFields() {
    DOMSelectors.val.value = "";
    DOMSelectors.type.value = "";
    DOMSelectors.image.value = "";
}

function createCard(card) {
    DOMSelectors.container.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card">
            <h2>${card.val}</h2>
            <img class="card-img" src="${card.image}" alt="">
            <p>${card.type}</p>
            <button class="removeBtn">Remove</button>
        </div>
        `
    );
}

function removeW() {
    const removee = document.querySelectorAll(".removeBtn");
    removee.forEach(button => {
        button.addEventListener("click", function () {
            button.parentElement.remove();
        });
    });
}

function clearW(){
    DOMSelectors.val.value = "";
    DOMSelectors.type.value = "";
    DOMSelectors.image.value = "";
};
