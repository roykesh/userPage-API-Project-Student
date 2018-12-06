// Fill in the functions for your Renderer Class

class Renderer {
    renderUsers(users) {
        console.log(users)
        $('.user-container').empty()
        let source = $('#user-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(users);
        $('.user-container').append(newHTML);
    }
    renderFriends(users) {
        $('.friends-container').empty()
        let source = $('#user-friends-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({ users });
        $('.friends-container').append(newHTML);
    }
    renderQuote(quoteInfo) {
        console.log(quoteInfo)
        $('.quote-container').empty()
        let source = $('#quote-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(quoteInfo);
        $('.quote-container').append(newHTML);
    }
    renderPokemon(pokemonInfo) {
        console.log(pokemonInfo)
        $('.pokemon-container').empty()
        let source = $('#pokemon-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template(pokemonInfo);
        $('.pokemon-container').append(newHTML);
    }
    renderMeat(meatText) {
        console.log(meatText)
        $('.meat-container').empty()
        let source = $('#meat-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({meatText});
        $('.meat-container').append(newHTML);
    }
}

Handlebars.registerHelper('toUpper', function (str) {
    return str.replace(/^\w/, c => c.toUpperCase());
});