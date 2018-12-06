//This is the class that will manage all your APIs
//Each method should also invoke the renderer for its own section

class APIManager {
    constructor(renderer) {
        this.renderer = new Renderer()
    }
    getUsers() {
        $.get("https://randomuser.me/api/?results=7&inc=picture,name,location", data => {
            // Main user data    
            // let mainUser = {
            //     picture: data.results[0].picture.medium,
            //     firstname: data.results[0].name.first,
            //     lastName: data.results[0].name.last,
            //     city: data.results[0].location.city,
            //     state: data.results[0].location.state
            // }
            this.renderer.renderUsers(data.results[0])
            
            // friends sata
            this.renderer.renderFriends(data.results.splice(1, 7))
        })
    }

    getQuote() {
        // get a random quote and author
        $.get('https://talaikis.com/api/quotes/random/', data => {
            // let quote = []
            //     quote.push({ quote: data.quote, author: data.author })
            let quote = {
                quote: data.quote,
                author: data.author
            }    
                this.renderer.renderQuote(quote)
        })
    }
    getPokemon() {
        // Generate a random pokemon
        $.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 10)}/`, data => {
            this.renderer.renderPokemon({
                name : data.name,
                img : data.sprites.front_default
            })
        })
    }
    getMeat() {
        // generate two paragraphs of text that are all meat
        $.get('https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1', data => {
        this.renderer.renderMeat(data[0])
        })
    }
    generateNewPage() {
        // generate your new page here
        this.getUsers()
        this.getQuote()
        this.getPokemon()
        this.getMeat()

    }
}
