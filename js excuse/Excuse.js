const excuses = [
    {
        usecase: 'work',
        work_excuse: "I was breathing methane and hydrogen yesterday and my spirit could not find my shoes. That's why i couldn't show up at work "
    },

    {
        usecase: 'school',
        school_excuse: "The bridge connecting my house to the school got destroyed by a whale. That's why I couldn't come to school"
    },

    {
        usecase: 'chores',
        chores_excuse: "My hands and legs disappeared for the whole day, they are just appearing now. That's why I couldn't do my chores"
    },

    {
        usecase: 'church',
        church_excuse: "I dreamt about the service and i felt i was in church, i didnt know i was in my dream. It's why i couldn't come to church"
    }
]

const balabu = excuses[0].work_excuse
const blululu = excuses[0].usecase 

const emilokan = excuses[1].school_excuse;
const jagaban = excuses[1].usecase



const infinix = excuses[2].chores_excuse;
const tecno = excuses[2].usecase;

const apple = excuses[3].church_excuse
const samsung = excuses[3].usecase

const excuse_form = document.querySelector('#excuse-form')
const excuse_input = document.querySelector('#excuse')
const btn = document.querySelector('.btn')
const msg = document.querySelector('.msg');
const excuse_list = document.querySelector('.excuses')


excuse_form.addEventListener('submit', drop);
console.log(balabu)
function drop(ex) {
    ex.preventDefault();

    if(excuse_input.value === "") {
        msg.innerHTML = "Please enter an excuse use";
    }
    else if (excuse_input.value.toLowerCase() === blululu) {
        excuse_list.innerHTML = balabu
    }
    else if (excuse_input.value.toLowerCase() === jagaban) {
        excuse_list.innerHTML = emilokan
    }
    else if (excuse_input.value.toLowerCase() === tecno) {
        excuse_list.innerHTML = infinix
    }
    else if(excuse_input.value.toLowerCase() === samsung) {
        excuse_list.innerHTML = apple 
    }
}