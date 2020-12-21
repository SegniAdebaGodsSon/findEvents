class EventBrite{
    constructor(){
        this.auth_token = `HYZDQCOJXNNX7VSGESKI`;
    }

    async getCategories(){
        const catergoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        const categories = await catergoriesResponse.json();
        return categories;
    }
}