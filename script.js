/* Seleccion de elemntos HTML */
const mainForm = document.querySelector("#formContainer");
const menu = document.querySelector("#menu");
const city = document.querySelector("#menu_city");
const camperForm = document.querySelector("#camper");
const trainerForm = document.querySelector("#trainer");
/* Funcion para mostrar el formulario adecuado */
menu.addEventListener("change", function () {
    if (menu.value === "camper") {
        camperForm.style.display = "block";

        if (menu.value === "camper") {
            trainerForm.style.display = "none"
        }
    }
    if (menu.value === "trainer") {
        trainerForm.style.display = "block";

        if (menu.value === "trainer") {
            camperForm.style.display = "none"
        }
    }
});
/* Matriz de los datos */
let campus = {
    trainers: {
        cities: [],
        names: [],
        phone: [],
        email: [],
        team: {
            typeOfTeam: [],
            hour: [],
        },
        assignature: {
            language_name: [],
            language_type: [],
            sandbox: [],
        }

    },
    campers: {
        cities: [],
        names: [],
        phone: [],
        email: [],
        hour: [],
        team: {
            typeOfTeam: [],
            english_hour: [],
            ser_hour: []
        },
        level: {
            typeLevel: [],
            prerequisite: [],
          
            selective_or_obligatory: []
        },
        roadMap: {
            typeRoadMap: [],
            num_credits: [],
            num_assignatures: [],
        },
        className: [],
        neighborhood: [],
        transportation: [],
    }
};
/* Envio de datos trainer */
trainerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    /* Extraccion de elementos y propiedades de trainer con Object.fromEntries */
    const trainerFormData = new FormData(trainerForm);
    const {
        menu_city: city,
        name,
        phone,
        email,
        team,
        hour,
        language_name,
        type: language_type,
        sandbox,
    } = Object.fromEntries(trainerFormData.entries());

    /* Objeto con propiedades desctructuradas */
    const trainer = {
        city,
        name,
        phone,
        email,
        team,
        hour,
        assignature: {
            language_name,
            language_type,
            sandbox,
        }
    }

    /* Agregando el objeto trainer a la matriz campus */
        campus.trainers.cities.push(trainer.city);
        campus.trainers.names.push(trainer.name);
        campus.trainers.phone.push(trainer.phone);
        campus.trainers.team.typeOfTeam.push(trainer.team.typeOfTeam);
        campus.trainers.team.hour.push(trainer.team.hour);
        campus.trainers.email.push(trainer.email);
        campus.trainers.assignature.language_name.push(trainer.assignature.language_name);
        campus.trainers.assignature.language_type.push(trainer.assignature.language_type);
        campus.trainers.assignature.sandbox.push(trainer.assignature.sandbox)

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
       <p>City ➡ ${trainer.city}</p>   
       <p>Name ➡ ${trainer.name}</p>
       <p>Phone ➡ ${trainer.phone}</p>
       <p>Email ➡ ${trainer.email}</p>
       <p>Team ➡ ${trainer.team}</p>
       <p>Hour ➡ ${trainer.hour}</p>
       <p>Assignature Language ➡ ${trainer.assignature.language_name}</p>
       <p>Assignature Type ➡ ${trainer.assignature.language_type}</p>
       <p>Assignature Sandbox ➡ ${trainer.assignature.sandbox}</p>
   `;
    resultElement.style.display = "block";
}
);
/* Envio de datos camper */
camperForm.addEventListener("submit", (e) => {
    e.preventDefault();

 
    const camperFormData = new FormData(camperForm);
    const {
        menu_city: cityCamper,
        nameCamper,
        phoneCamper,
        emailCamper,
        teamCamper,
        hourCamper,
        english_hour,
        ser_hour,
        typeLevel,
        prerequisite,
        technology,
        selective_or_obligatory,
        typeRoadMap,
        num_credits,
        num_assignatures,
        className,
        neighborhood,
        transportation,
    } = Object.fromEntries(camperFormData.entries());
    const camper = {
        cityCamper,
        nameCamper,
        phoneCamper,
        emailCamper,

        teamCamper,
        hourCamper,
        english_hour,
        ser_hour,

        typeLevel,
        prerequisite,
        technology,
        selective_or_obligatory,
        typeRoadMap,
        num_credits,
        num_assignatures,
        className,
        neighborhood,
        transportation,
    }
    campus.campers.cities.push(camper.cityCamper);
    campus.campers.names.push(camper.nameCamper);
    campus.campers.phone.push(camper.phoneCamper);
    campus.campers.email.push(camper.emailCamper);
    campus.campers.hour.push(camper.hourCamper);

    campus.campers.team.typeOfTeam.push(camper.teamCamper);
    campus.campers.team.english_hour.push(camper.english_hour);
    campus.campers.team.ser_hour.push(camper.ser_hour);

    campus.campers.level.typeLevel.push(camper.typeLevel);
   /*  campus.campers.level.prerequisite.push(camper.prerequisite); 
    campus.campers.level.technology.push(camper.technology);
    campus.campers.level.selective_or_obligatory.push(camper.selective_or_obligatory); */

    campus.campers.roadMap.typeRoadMap.push(camper.typeRoadMap);


    campus.campers.className.push(camper.className);
    campus.campers.neighborhood.push(camper.neighborhood);
    campus.campers.transportation.push(camper.transportation);




    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>City ➡ ${camper.cityCamper}</p>   
        <p>Name ➡ ${camper.nameCamper}</p>
        <p>Phone ➡ ${camper.phoneCamper}</p>
        <p>Email ➡ ${camper.emailCamper}</p>
        <p>Team ➡ ${camper.teamCamper}</p>
        <p>Programming Hour ➡ ${camper.hourCamper}</p>
        <p>English Hour ➡ ${camper.english_hour}</p>
        <p>Ser Hour ➡ ${camper.ser_hour}</p>
     
        <p>Level: ${camper.typeLevel}</p>
        <p>RoadMap: ${camper.typeRoadMap}</p>

        <p>Class Name: ${camper.className}</p>
        <p>Neighborhood: ${camper.neighborhood}</p>
        <p>transportation:${camper.transportation}</p>

     
    `;
    // Muestra el elemento de resultado
    resultElement.style.display = "block";
});

/* Vista de todos los datos en consola */
const consoleData = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const alldata = Object.fromEntries(data.entries());
    console.log(alldata);
}
mainForm.addEventListener('submit', consoleData);

