// Data Awal
let data = [
    {
        img: "img2.jpeg",
        name: "Tono",
        gender: "Male",
        hobby: "Sleep",
        nationality: "Malaysian"
    },
    {
        img: "img2.jpeg",
        name: "Hamzah Alghifari",
        gender: "Male",
        hobby: "Drink",
        nationality: "Arabian"
    },
    {
        img: "img2.jpeg",
        name: "Chintya Claudia",
        gender: "Female",
        hobby: "Eat",
        nationality: "Thailand"
    },
]

// Element Container
const container = document.getElementById("container");

// Update Data Awal
function updateData() {
    if(container.childElementCount > 0) {
        for(let i = 0; i < container.childElementCount; i++) {
            container.removeChild(container.children[i])
        }
        try { container.removeChild(container.children[0]) } catch (error) {}
    }

    for(let i = 0; i < data.length; i++) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("p");
        const gender = document.createElement("p");
        const hobby = document.createElement("p");
        const nationality = document.createElement("p");
        const btnContainer = document.createElement("div");
        const btn = document.createElement("button");
        const editBtn = document.createElement("button");

        const textName = document.createTextNode("Name : " + data[i].name);
        const textGender = document.createTextNode("Gender : " + data[i].gender);
        const textHobby = document.createTextNode("Hobby : " + data[i].hobby);
        const textNationality = document.createTextNode("Nationality : " + data[i].nationality);
        const textButton = document.createTextNode("X");
        const textEditButton = document.createTextNode("Edit");
    
        name.appendChild(textName);
        gender.appendChild(textGender);
        hobby.appendChild(textHobby);
        nationality.appendChild(textNationality);
        btn.appendChild(textButton);
        editBtn.appendChild(textEditButton);
    
        div.setAttribute("class", "registor");
        img.setAttribute("src", "img2.jpeg");
        btnContainer.setAttribute("class", "editDelete");
        btn.setAttribute("class", "delete");
        editBtn.setAttribute("class", "edit");
        btn.addEventListener("click", hapusKartu);
        editBtn.addEventListener("click", bukaModaledit);

        btnContainer.appendChild(btn);
        btnContainer.appendChild(editBtn);
    
        div.appendChild(btnContainer);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(gender);
        div.appendChild(hobby);
        div.appendChild(nationality);
    
        container.appendChild(div);
    }
}

updateData()

// Tambah Kartu
function tambahKartu() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const male = document.getElementById("male-add").checked;
    // Hobbies
    const drink = document.getElementById("drink-add").checked;
    const eat = document.getElementById("eat-add").checked;
    const nat = document.getElementById("nationality-add");
    const natText = nat.options[nat.selectedIndex].text;

    data.push({
        img: "img2.jpeg",
        name: firstName + " " + lastName,
        gender: male ? "Male" : "Female",
        hobby: drink ? "Drink" : eat ? "Eat" : "Sleep",
        nationality: natText
    })

    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const gender = document.createElement("p");
    const hobby = document.createElement("p");
    const nationality = document.createElement("p");
    const btnContainer = document.createElement("div");
    const btn = document.createElement("button");
    const editBtn = document.createElement("button");

    const textName = document.createTextNode("Name : " + firstName + " " + lastName);
    const textGender = document.createTextNode("Gender : " + (male ? "Male" : "Female"));
    const textHobby = document.createTextNode("Hobby : " + (drink ? "Drink" : eat ? "Eat" : "Sleep"));
    const textNationality = document.createTextNode("Nationality : " + natText);
    const textButton = document.createTextNode("X");
    const textEditButton = document.createTextNode("Edit");

    name.appendChild(textName);
    gender.appendChild(textGender);
    hobby.appendChild(textHobby);
    nationality.appendChild(textNationality);
    btn.appendChild(textButton);
    editBtn.appendChild(textEditButton);

    div.setAttribute("class", "registor");
    img.setAttribute("src", "img2.jpeg");
    btnContainer.setAttribute("class", "editDelete");
    btn.setAttribute("class", "delete");
    editBtn.setAttribute("class", "edit");
    btn.addEventListener("click", hapusKartu);
    editBtn.addEventListener("click", bukaModaledit);

    btnContainer.appendChild(btn);
    btnContainer.appendChild(editBtn);

    div.appendChild(btnContainer);
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(gender);
    div.appendChild(hobby);
    div.appendChild(nationality);

    container.appendChild(div);

    tutupModal()
}

// Hapus Kartu
function hapusKartu(e) {
    container.removeChild(e.srcElement.parentNode.parentNode);
}

let indexEditData;
// Edit Kartu
function editKartu(e) {
    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const male = document.getElementById("male").checked;
    // Hobbies
    const drink = document.getElementById("drink").checked;
    const eat = document.getElementById("eat").checked;
    const nat = document.getElementById("nationality");
    const natText = nat.options[nat.selectedIndex].text;

    data.splice(indexEditData, 1, {
        img: "img2.jpeg",
        name: firstName + " " + lastName,
        gender: male ? "Male" : "Female",
        hobby: drink ? "Drink" : eat ? "Eat" : "Sleep",
        nationality: natText
    })

    updateData()
    tutupModaledit()
}

// Cari Kartu
function cariKartu() {
    for(let i = 0; i < container.childElementCount; i++) {
        container.removeChild(container.children[i])
    }
    container.removeChild(container.children[0])

    const input = document.getElementById("search");

    const dataPencarian = data.filter(item => item.name.includes(input.value))

    for(const data of dataPencarian) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("p");
        const gender = document.createElement("p");
        const hobby = document.createElement("p");
        const nationality = document.createElement("p");
        const btnContainer = document.createElement("div");
        const btn = document.createElement("button");
        const editBtn = document.createElement("button");
    
        const textName = document.createTextNode("Name : " + data.name);
        const textGender = document.createTextNode("Gender : " + data.gender);
        const textHobby = document.createTextNode("Hobby : " + data.hobby);
        const textNationality = document.createTextNode("Nationality : " + data.nationality);
        const textButton = document.createTextNode("X");
        const textEditButton = document.createTextNode("Edit");
    
        name.appendChild(textName);
        gender.appendChild(textGender);
        hobby.appendChild(textHobby);
        nationality.appendChild(textNationality);
        btn.appendChild(textButton);
        editBtn.appendChild(textEditButton);
    
        div.setAttribute("class", "registor");
        img.setAttribute("src", "img2.jpeg");
        btnContainer.setAttribute("class", "editDelete");
        btn.setAttribute("class", "delete");
        editBtn.setAttribute("class", "edit");
        btn.addEventListener("click", hapusKartu);
        editBtn.addEventListener("click", bukaModaledit);
    
        btnContainer.appendChild(btn);
        btnContainer.appendChild(editBtn);

        div.appendChild(btnContainer);
        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(gender);
        div.appendChild(hobby);
        div.appendChild(nationality);
    
        container.appendChild(div);
    }
}

// Modal
function bukaModal() {
    const modal = document.getElementById("modal");
    modal.setAttribute('class', 'modal')
}

function tutupModal() {
    const modal = document.getElementById("modal");
    modal.setAttribute('class', 'modal hilang')
}

function bukaModaledit(e) {
    const child = e.srcElement.parentNode.parentNode.children;
    indexEditData = data.indexOf(data.find(item => item.name.includes(child[2].outerText.split(': ')[1])));
    const dataEdit = data.find(item => item.name.includes(child[2].outerText.split(': ')[1]))

    document.getElementById("first").value = dataEdit.name.split(' ')[0];
    document.getElementById("last").value = dataEdit.name.split(' ')[1] || '';
    document.getElementById("male").checked = dataEdit.gender == 'Male' ? true : false;
    document.getElementById("female").checked = dataEdit.gender == 'Female' ? true : false;
    // Hobbies
    document.getElementById("drink").checked = dataEdit.hobby == 'Drink' ? true : false;
    document.getElementById("eat").checked = dataEdit.hobby == 'Eat' ? true : false;
    document.getElementById("sleep").checked = dataEdit.hobby == 'Sleep' ? true : false;

    const modal = document.getElementById("modalEdit");
    modal.setAttribute('class', 'modal')
}

function tutupModaledit() {
    const modal = document.getElementById("modalEdit");
    modal.setAttribute('class', 'modal hilang')
}