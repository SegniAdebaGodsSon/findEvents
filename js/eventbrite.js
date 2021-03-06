class EventBrite{
    constructor(){
        this.auth_token = `HYZDQCOJXNNX7VSGESKI`;
        this.orderBy = 'date';
    }

    async getCategories(){
        const catergoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        const categories = await catergoriesResponse.json();
        return categories;
    }

    async queryAPI(eventName, category){
        const eventResponse = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.orderBy}&categories=${category}&token=${this.auth_token}`);
        console.log(eventResponse)
        const events = await eventResponse.json();
        console.log(events);
        return events;
    }
}