
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"The best way to find yourself is to lose yourself in the
        service of others"`,
        person: `Mahatma Gandhi`
    },
    {
        quote: `"If you want to live a happe life, tie it to a goal, not
        to people or thins."`,
        person: `Albert Einstein`
    },
    {
        quote: `"At his best, man is the noblest of all animals; separated
        from law and justice he is the worst. "`,
        person: `Aristoteles`
    },
    {
        quote: `"Your time is limited, so dont wast it living someone
        esle's life."`,
        person: `Steve Jobs`
    },
    {
        quote: `" Tell me and I forget. Tech me and I remember. Involve me
        and I learn."`,
        person: `Benjamin Franklin`
    }
]

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})