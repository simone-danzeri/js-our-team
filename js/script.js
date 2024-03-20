// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

// MILESTONE 0
// Mi creo l'array che conterrà i vari oggetti
// Popolo l'array con i vari oggetti
const teamMembers = [
  {
    firstName: "Wayne",
    lastName: "Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    firstName: "Walter",
    lastName: "Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    firstName: "Angela",
    lastName: "Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    firstName: "Scott",
    lastName: "Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    firstName: "Barbara",
    lastName: "Ramos",
    role: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg",
  },
];
// console.log(teamMembers);

// // MILESTONE 1
// // Per ogni membro del team stampo in console nome, cognome, ruolo, img
// for(let i = 0; i < teamMembers.length; i++) {
//     let eachMember = teamMembers[i];
//     console.log(eachMember);
//     for(let key in eachMember) {
//         console.log(key + ' : ' + eachMember[key]);
//     }
// }

// MILESTONE 2
// Stampo le info della milestone 1 nel DOM
// Mi richiamo gli elementi del DOM e li metto in variabili da usare
const memberContainer = document.querySelector(".container");
const memberFirstName = document.querySelector("#first-name");
const memberLastName = document.querySelector("#last-name");
const memberRole = document.querySelector("#role");
const memberImg = document.querySelector("#img");

for (let i = 0; i < teamMembers.length; i++) {
  let eachMember = teamMembers[i];
  console.log(eachMember);
  memberContainer.innerHTML += `
        <div class="card">
            <div class="name">
                <h3 id="first-name">
                    ${eachMember.firstName}
                </h3>
                <h3 id="last-name">
                    ${eachMember.lastName}
                </h3>
            </div>
                <h4 id="role">
                    ${eachMember.role}
                </h4>
                <p id="img">
                    ${eachMember.img}
                </p>
        </div>
    `;

  for (let key in eachMember) {
    console.log(key + " : " + eachMember[key]);
    
  }
}
