/* Seleccion de elemntos HTML */
const menu = document.querySelector("#menu");
const city = document.querySelector("#menu_city");
const camperForm = document.querySelector("#camper");
const trainerForm = document.querySelector("#trainer");

/* Funcion para mostrar el formulario adecuado */
menu.addEventListener("change", function(){
    if(menu.value === "camper"){
        camperForm.style.display = "block";     
        
         if(menu.value === "camper"){
            trainerForm.style.display = "none"
        }
    }

    if (menu.value === "trainer") {
        trainerForm.style.display = "block";    

         if (menu.value === "trainer"){
            camperForm.style.display = "none"
        }       
    }
});
/* Matriz de los datos */
let campus = { 
    trainers: {
        cities: [],
        names : [],
        phone : [],
        email : [],
        team : {
            typeOfTeam : [],
            hour : [],
        },
    },
    
    campers: {
        cities: [],
        names : [],
        phone : [],
        email : [],
        hour: [],
        level: [],
        roadMap: [],
        team : {
            typeOfTeam : [],

            english : {
                hour : [], 
            },

            ser : {
                hour : [],
            },
        },     
            neighborhood : [],
            transportation : [],
    },
}
/* Envio de datos trainer */
trainerForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const trainerFormData = new FormData(document.getElementById("trainer"));

    const trainer = {
        city: trainerFormData.get('menu_city'), 
        name: trainerFormData.get('name'),
        phone: trainerFormData.get('phone'),
        email: trainerFormData.get('email'),
        team: {
          typeOfTeam: trainerFormData.get('team'),
          hour: trainerFormData.get('hour'),
        },
      };
    
      campus.trainers.cities.push(trainer.city);
      campus.trainers.names.push(trainer.name);
      campus.trainers.phone.push(trainer.phone);
      campus.trainers.team.typeOfTeam.push(trainer.team.typeOfTeam);
      campus.trainers.team.hour.push(trainer.team.hour);
      campus.trainers.email.push(trainer.email);

       // Agrega el contenido de los datos del formulario al elemento de resultado
   const resultElement = document.getElementById("result");
   resultElement.innerHTML = `
       <p>City: ${trainer.city}</p>   
       <p>Name: ${trainer.name}</p>
       <p>Phone: ${trainer.phone}</p>
       <p>Email: ${trainer.email}</p>
       <p>Team: ${trainer.team.typeOfTeam}</p>
       <p>Hour: ${trainer.team.hour}</p>
   `;
   // Muestra el elemento de resultado
   resultElement.style.display = "block";  
}
  
);
camperForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const camperFormData = new FormData(document.getElementById("camper"));

    const camper = {
        city: camperFormData.get('menu_city_camper'), 
        name: camperFormData.get('name_camper'),
        phone: camperFormData.get('phone_camper'),
        email: camperFormData.get('email_camper'),
        hour: camperFormData.get('hour_camper'),

        team: {
          typeOfTeam: camperFormData.get('team_camper'),
          english: camperFormData.get('english_hour'),
          ser: camperFormData.get('ser_hour')

        },
        level: camperFormData.get('level'),
        neighborhood: camperFormData.get('neighborhood'),
        transportation: camperFormData.get('transportation'),
        roadMap: camperFormData.get('roadmap')
    }
    campus.campers.cities.push(camper.city);
    campus.campers.names.push(camper.name);
    campus.campers.phone.push(camper.phone);
    campus.campers.email.push(camper.email);
    campus.campers.hour.push(camper.hour);
    
    campus.campers.team.typeOfTeam.push(camper.team.typeOfTeam);
    campus.campers.team.english.hour.push(camper.team.english);
    campus.campers.team.ser.hour.push(camper.team.ser);

    campus.campers.level.push(camper.level);
    campus.campers.roadMap.push(camper.roadMap);
    campus.campers.neighborhood.push(camper.neighborhood);
    campus.campers.transportation.push(camper.transportation);
    
    const resultElementCamper = document.getElementById("resultCamper");
    resultElementCamper.innerHTML = `
        <p>City: ${camper.city}</p>   
        <p>Name: ${camper.name}</p>
        <p>Phone: ${camper.phone}</p>
        <p>Email: ${camper.email}</p>
        <p>Hour: ${camper.hour}</p>

        <p>Team: ${camper.team.typeOfTeam}</p>
        <p>English Hour: ${camper.team.english}</p>
        <p>Ser Hour: ${camper.team.ser}</p>

        <p>Level: ${camper.level}</p>
        <p>Roadmap: ${camper.roadMap}</p>
        <p>Neighborhood: ${camper.neighborhood}</p>
        <p>Transportation: ${camper.transportation}</p>

    `;
    // Muestra el elemento de resultado
    resultElementCamper.style.display = "block";  
})
