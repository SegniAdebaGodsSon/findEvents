class UI {
    constructor(data){
        // App instialization
        this.data = data; 
        this.categoriesSelect = document.querySelector('select#category');
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


}