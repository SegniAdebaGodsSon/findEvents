class UI {
    constructor(){
        // App instialization 
        this.init();
    }

    init(){
        this.printCategories();
    }

    printCategories(){
        const categoriesList = eventBrite.getCategories()
            .then(categories => {
                console.log(categories);
            });
    }


}