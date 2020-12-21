class UI {
    constructor(data){
        // App instialization
        this.data = data; 
        this.categoriesSelect = document.querySelector('select#category');
        this.searchDiv = document.querySelector('#search-events');
        this.init();
    }

    init(){
        this.printCategories();
    }

    printCategories(){
        this.data.then(categories => {
            const categoriesList = categories.categories;
            categoriesList.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id;
                option.appendChild(document.createTextNode(category.name));
                // option.textContent = category.name;                      // This would work too
                this.categoriesSelect.appendChild(option);
            });
        }).catch(err => console.log(err));
    }

    printMessage(message, className){
        const div = document.createElement('div');          // create a div
        div.className = className;                          // add the class names passed down, for bootstrap styling
        div.appendChild(document.createTextNode(message));  // append the message passed down to the new div
        this.searchDiv.appendChild(div);
        setTimeout(this.removeMessage, 3000);
    }

    removeMessage(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }


}