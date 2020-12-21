class UI {
    constructor(data){
        // App instialization
        this.data = data; 
        this.categoriesSelect = document.querySelector('select#category');
        this.searchDiv = document.querySelector('#search-events');
        this.result = document.querySelector('#results');
        this.init();
    }

    init(){
        this.printCategories();
    }

    displayEvents(events){
        let htmlTemplate = ``;

        events.forEach(eventInfo => {
            htmlTemplate += `
                <div class="col-md-4 mt-4">
                    <div class="card">
                        <div class="card-body>
                            <img class="img-fluid mb-2" src="${eventInfo.logo !== null ? eventInfo.logo.url: ""}">
                        </div>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center card-title">${eventInfo.name.text}</h2>
                                <p class="lead text-info">Event Information:</p>
                                <p>${eventInfo.description.text.substring(0, 200)}...</p>
                                <span class="badge badge-primary">Capacity:${eventInfo.capacity}</span>
                                <span class="badge badge-secondary">Date & Time: ${eventInfo.start.local}</span>
                                <a href="${eventInfo.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            
            `
        });

        this.result.innerHTML = htmlTemplate; 
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