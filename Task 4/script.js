const data = [
    {
        img: "img2.jpeg",
        name: "Tono",
        gender: "Male",
        hobby: "Sleep",
        nationality: "Malaysian"
    },
    {
        img: "img2.jpeg",
        name: "Tono",
        gender: "Male",
        hobby: "Sleep",
        nationality: "Malaysian"
    },
    {
        img: "img2.jpeg",
        name: "Tono",
        gender: "Male",
        hobby: "Sleep",
        nationality: "Malaysian"
    },
]

const container = document.getElementById("tester");

for(let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const gender = document.createElement("p");
    const hobby = document.createElement("p");
    const nationality = document.createElement("p");

    const textName = document.createTextNode("Name : Dari " + i);
    const textGender = document.createTextNode("Gender : Male");
    const textHobby = document.createTextNode("Hobby : Sleep");
    const textNationality = document.createTextNode("Nationality : Malaysian");

    name.appendChild(textName);
    gender.appendChild(textGender);
    hobby.appendChild(textHobby);
    nationality.appendChild(textNationality);

    div.setAttribute("class", "registor");
    img.setAttribute("src", "img2.jpeg");

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(gender);
    div.appendChild(hobby);
    div.appendChild(nationality);

    container.appendChild(div);
}

function bukaModal() {
    const modal = document.getElementById("modal");
    modal.setAttribute('class', 'modal')
}

function tutupModal() {
    const modal = document.getElementById("modal");
    modal.setAttribute('class', 'modal hilang')
}