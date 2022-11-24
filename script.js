// set reviews
const reviews = [
    {
                id: 1,
                name: "MC Lovin",
                job: "WEB Developer",
                img: "./images/Mc-Lovin.jpeg",
                text: "Lorem ipsum dolor sit amet. Hic odio rerum non eius eaque vel nesciunt molestias ut dolor suscipit. Eos maiores eaque ex delectus repellendus 33 vitae asperiores non culpa deserunt id velit doloremque?",
        
            },
            {
                id: 2,
                name: "Giga Chad",
                job: "Businessman",
                img: "./images/Giga-chad.jpeg",
                text: "Lorem ipsum dolor sit amet. Aut fugit ratione quo quas repellat non sint galisum non ducimus Quis aut architecto aspernatur. Est amet commodi ad soluta quae id quis architecto qui accusantium quas. Qui quisquam fugiat non unde magni ea eligendi labore nam dolorem fugiat nam sequi quas id ducimus sapiente aut voluptas aperiam.",
            },
            {
                id: 3,
                name: "Thomas Mann",
                job: "Junior Web Developer",
                img: "./images/thomas-mann.jpeg",
                text: "Lorem ipsum dolor sit amet. Qui dolorem voluptatem est consequatur dolores et harum nesciunt! Quo voluptas quia a consequuntur recusandae qui blanditiis voluptatem ut delectus quae aut galisum reiciendis. Aut placeat corrupti qui delectus porro ut dicta quod ut quia explicabo.",
            },
            {
                id: 4,
                name: "Young Yoda",
                job: "Senior Web Developer",
                img: "./images/Young-Yoda.jpeg",
                text: "Lorem ipsum dolor sit amet. Eos voluptates iusto qui dolores dolores qui cupiditate dolore est dolor eaque sit sequi accusantium qui error delectus aut itaque sunt. Id quibusdam facilis qui voluptatem iure sed omnis amet ex blanditiis tenetur non tempore velit aut velit iusto rem adipisci nostrum.",
            },
            {
                id: 5,
                name: "Crimson Hawk",
                job: "UX-Designer",
                img: "./images/crimson-hawk.jpeg",
                text: "Lorem ipsum dolor sit amet. Et fugit nostrum et ducimus nobis est eaque dolore non velit repellat. Hic tenetur minima aut quibusdam laudantium in sint quia in quia galisum sed galisum consequatur sed voluptates nemo. Non nemo porro ut impedit cumque ut voluptas alias sed accusamus alias eum omnis minus vel doloribus laborum ut sunt fugit.",
            }
]

// set item
currentItem = 0;

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("Author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Load review
window.addEventListener("DOMContentLoaded", function(){
      showPerson();
});

// show person
function showPerson(){
    const item = reviews[currentItem];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text; 
};

// next button
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// prev button
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson();
});

// random button
randomBtn.addEventListener('click', function(){
    // number between 0 - 4
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})
