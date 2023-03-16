/* Seleccion de elemntos HTML */
const menu = document.querySelector("#menu");
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
    Campus : {
        headquarters : [],
    },

    trainers: {
        names : [],
        phone : [],
        team : {
            typeOfTeam : [],
            schedule : [],
            hour : [],
            classRoom : {
                room: [],
                floor: []
            },
        email : []
        },
    },

    campers: {
        names : [],
        phone : [],
        team : [
                programing = {
                    schedule : "", //Days of the week
                    hour : "",     
                    classRoom : {
                        room: "",
                        floor: ""
                    },
                },
                english = {
                    schedule : "", //Days of the week
                    hour : "",     
                    classRoom : {
                        room: "",
                        floor: ""
                    },
                },
                ser = {
                    schedule : "", //Days of the week
                    hour : "",     
                    classRoom : {
                        room: "",
                        floor: ""
                    },
                },
                team = [],
                email = [],
                level = [],
                neighborhood = [],
                transportation = []
            ],
    },

    levels: {

    },

    tecnologies: "",

    teams: "",

    roadMap: ""

}
/* Envio de datos */
trainerForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const trainerFormData = new FormData(document.getElementById("trainer"));

    const trainer = {
        name: trainerFormData.get('name'),
        phone: trainerFormData.get('phone'),
        team: {
          typeOfTeam: trainerFormData.get('team'),
          schedule: trainerFormData.get('schedule'),
          hour: trainerFormData.get('hour'),
          classRoom: {
            room: trainerFormData.get('room'),
            floor: trainerFormData.get('floor')
          },
          email: trainerFormData.get('email')
        },
      };
    
      campus.trainers.names.push(trainer.name);
      campus.trainers.phone.push(trainer.phone);
      campus.trainers.team.typeOfTeam.push(trainer.team.typeOfTeam);
      campus.trainers.team.schedule.push(trainer.team.schedule);
      campus.trainers.team.hour.push(trainer.team.hour);
      campus.trainers.team.classRoom.room.push(trainer.team.classRoom.room);
      campus.trainers.team.classRoom.floor.push(trainer.team.classRoom.floor);
      campus.trainers.team.email.push(trainer.team.email);

       // Agrega el contenido de los datos del formulario al elemento de resultado
   const resultElement = document.getElementById("result");
   resultElement.innerHTML = `
       <p>Name: ${trainer.name}</p>
       <p>Phone: ${trainer.phone}</p>
       <p>Team: ${trainer.team.typeOfTeam}</p>
       <p>Hour: ${trainer.team.hour}</p>
       <p>Room: ${trainer.team.classRoom.room}</p>
       <p>Floor: ${trainer.team.classRoom.floor}</p>
       <p>Email: ${trainer.team.email}</p>
   `;

   // Muestra el elemento de resultado
   resultElement.style.display = "block";

}
  
);

console.log(trainer.name);
