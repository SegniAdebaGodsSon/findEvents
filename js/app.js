const eventBrite = new EventBrite();
const ui = new UI(eventBrite.getCategories());


document.querySelector('#submitBtn')
    .addEventListener('click', e => {
        e.preventDefault();

        // read input values
        const eventName = document.querySelector('input#event-name').value.trim();
        const category = document.querySelector('select#category').value;
        
        if(eventName !== ''){
            // query event brite api
        }else{
            // print message(error)
            ui.printMessage('Add an Event or City', 'alert alert-danger mt-4 text-center');
        }
    });


