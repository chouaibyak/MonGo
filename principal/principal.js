document.addEventListener("DOMContentLoaded", function () {
  const projet1 = document.getElementById("projet1");
  const board = document.querySelector(".board");
  const taskBoard = document.getElementById("task-board");
  const backButton = document.getElementById("back");
  const myProjectTitle = document.querySelector(".MyProject");

  // Cacher le tableau des tâches au départ
  taskBoard.style.display = "none";

  // Afficher le tableau des tâches et cacher "My Projects"
  projet1.addEventListener("click", function () {
    board.style.display = "none"; // Cache la section "My Projects"
    myProjectTitle.style.display = "none"; // Cache le titre "My Projects"
    taskBoard.style.display = "block"; // Affiche le tableau des tâches
  });

  // Revenir à la section "My Projects"
  backButton.addEventListener("click", function () {
    taskBoard.style.display = "none"; // Cache le tableau des tâches
    board.style.display = "block"; // Affiche la section "My Projects"
    myProjectTitle.style.display = "block"; // Affiche le titre "My Projects"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const suiviTaches = document.querySelector(".Suivi-taches");
  const toggleButton = suiviTaches.querySelector("button");

  // Création du bouton <<
  const showButton = document.createElement("button");
  showButton.textContent = "<< Suivi";
  showButton.style.display = "none"; // Caché au début
  showButton.style.padding = "8px 10px";
  showButton.style.marginRight = "0";
  showButton.style.backgroundColor = "#dbdede";
  showButton.style.color = "#1a1c1c";
  showButton.style.borderRadius = "20px";
  showButton.style.border = "none";
  showButton.style.cursor = "pointer";

  // Ajouter le bouton dans le DOM
  suiviTaches.parentNode.insertBefore(showButton, suiviTaches);

  // Cacher la section "Suivi-taches" en cliquant sur >>
  toggleButton.addEventListener("click", function () {
    suiviTaches.style.display = "none";
    showButton.style.display = "block"; // Afficher <<
  });

  // Réafficher "Suivi-taches" en cliquant sur <<
  showButton.addEventListener("click", function () {
    suiviTaches.style.display = "block";
    showButton.style.display = "none"; // Cacher <<
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.getElementById("add-task");
  const tacheInfo = document.querySelector(".tache-info");
  const tacheNameInput = document.querySelector(".tache-name");
  const enregistrerButton = tacheInfo.querySelector("button");
  const annulerButton = tacheInfo.querySelectorAll("button")[1];
  const toDoColumn = document.querySelector(".status-column em").parentElement;
  const apparaitionTache = document.querySelector(".apparaition-tache");

  // Charger les tâches sauvegardées dans localStorage
  loadTasks();

  // Afficher ou masquer tache-info au clic sur "Ajouter une tâche"
  addTaskButton.addEventListener("click", function () {
    if (tacheInfo.style.display === "none" || tacheInfo.style.display === "") {
      tacheInfo.style.display = "block";
    } else {
      tacheInfo.style.display = "none";
    }
  });

  // Masquer tache-info au clic sur "annuler"
  annulerButton.addEventListener("click", function () {
    tacheInfo.style.display = "none";
    tacheNameInput.value = "";
  });

  // Ajouter une nouvelle tâche au clic sur "enregistrer"
  enregistrerButton.addEventListener("click", function () {
    const taskName = tacheNameInput.value.trim();

    if (taskName) {
      // Créer une nouvelle tâche
      const newTask = {
        name: taskName,
        status: "TO DO",
      };

      // Ajouter la tâche dans la section "Suivi"
      const newTaskSuivi = document.createElement("div");
      newTaskSuivi.className = "task";
      newTaskSuivi.textContent = taskName;
      toDoColumn.appendChild(newTaskSuivi);

      // Ajouter la tâche dans la section "apparaition-tache"
      const newTaskApparaition = document.createElement("div");
      newTaskApparaition.className = "task_et_etat";

      const taskText = document.createElement("p");
      taskText.className = "task";
      taskText.textContent = taskName;

      const statusButton = document.createElement("button");
      statusButton.className = "status";
      statusButton.textContent = "TO DO";
      statusButton.addEventListener("click", function () {
        changeTaskStatus(newTaskSuivi, statusButton);
      });

      newTaskApparaition.appendChild(taskText);
      newTaskApparaition.appendChild(statusButton);
      apparaitionTache.appendChild(newTaskApparaition);

      // Sauvegarder la tâche dans localStorage
      saveTask(newTask);

      // Masquer tache-info et vider l'input
      tacheInfo.style.display = "none";
      tacheNameInput.value = "";
    } else {
      alert("Veuillez entrer un nom de tâche valide.");
    }
  });

  // Fonction pour changer le statut d'une tâche
  function changeTaskStatus(task, statusButton) {
    const currentStatus = statusButton.textContent;
    const doingColumn = document.querySelectorAll(".status-column")[1];
    const doneColumn = document.querySelectorAll(".status-column")[2];

    if (currentStatus === "TO DO") {
      statusButton.textContent = "DOING";
      doingColumn.appendChild(task);
    } else if (currentStatus === "DOING") {
      statusButton.textContent = "DONE";
      doneColumn.appendChild(task);
    } else if (currentStatus === "DONE") {
      statusButton.textContent = "TO DO";
      toDoColumn.appendChild(task);
    }

    // Mettre à jour le statut dans localStorage
    updateTaskStatus(task.textContent, statusButton.textContent);
  }

  // Fonction pour sauvegarder une tâche dans localStorage
  function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Fonction pour charger les tâches depuis localStorage
  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task) => {
      // Ajouter la tâche dans la section "Suivi"
      const newTaskSuivi = document.createElement("div");
      newTaskSuivi.className = "task";
      newTaskSuivi.textContent = task.name;

      // Ajouter la tâche dans la section "apparaition-tache"
      const newTaskApparaition = document.createElement("div");
      newTaskApparaition.className = "task_et_etat";

      const taskText = document.createElement("p");
      taskText.className = "task";
      taskText.textContent = task.name;

      const statusButton = document.createElement("button");
      statusButton.className = "status";
      statusButton.textContent = task.status;
      statusButton.addEventListener("click", function () {
        changeTaskStatus(newTaskSuivi, statusButton);
      });

      newTaskApparaition.appendChild(taskText);
      newTaskApparaition.appendChild(statusButton);
      apparaitionTache.appendChild(newTaskApparaition);

      // Ajouter la tâche dans la colonne appropriée
      if (task.status === "TO DO") {
        toDoColumn.appendChild(newTaskSuivi);
      } else if (task.status === "DOING") {
        document.querySelectorAll(".status-column")[1].appendChild(newTaskSuivi);
      } else if (task.status === "DONE") {
        document.querySelectorAll(".status-column")[2].appendChild(newTaskSuivi);
      }
    });
  }

  // Fonction pour mettre à jour le statut d'une tâche dans localStorage
  function updateTaskStatus(taskName, newStatus) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.map((task) => {
      if (task.name === taskName) {
        task.status = newStatus;
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});






function showPage(pageId) {
  // Masquer toutes les pages
  document.querySelectorAll(".content").forEach(page => {
    page.style.display = "none";
  });
  // Afficher la page demandée
  document.getElementById(pageId).style.display = "block";
}

// Ajouter des écouteurs d'événements pour les boutons
document.getElementById("myProjectBtn").addEventListener("click", function () {
  showPage("myProjectsPage"); // Afficher la page "My Projects"
});

document.getElementById("teamBtn").addEventListener("click", function () {
  showPage("teamPage"); // Afficher la page "Team"
});
document.getElementById("viewProjectBtn").addEventListener("click", function () {
  showPage("viewProjectPage"); // Afficher la page "Team"
});


document.getElementById('addUserButton').addEventListener('click', function() {
  var form = document.getElementById('addUserForm');
  if (form.style.display === 'none') {
      form.style.display = 'block';
  } else {
      form.style.display = 'none';
  }
});

// Pour masquer le formulaire lors du clic sur le bouton "Close"
document.getElementById('close-add-user-box').addEventListener('click', function() {
  var form = document.getElementById('addUserForm');
  form.style.display = 'none';
})



/*function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

function showContent(contentId) {
  // Masquer tous les contenus
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
  }

  // Afficher le contenu sélectionné
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
      selectedContent.classList.add("active");
  }

  // Fermer le menu déroulant
  var menu = document.getElementById("menu");
  menu.classList.remove("show");
}

// Fermer le menu si l'utilisateur clique en dehors
window.onclick = function(event) {
  if (!event.target.closest('.profile-menu')) {
      var menus = document.getElementsByClassName("menu-content");
      for (var i = 0; i < menus.length; i++) {
          var openMenu = menus[i];
          if (openMenu.classList.contains('show')) {
              openMenu.classList.remove('show');
          }
      }
  }
}
*/


function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

document.addEventListener("click", function(event) {
  var menu = document.getElementById("menu");
  var button = document.querySelector(".profile-button");
  
  if (!button.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("show");
  }
});

function showContent(sectionId) {
  var sections = document.querySelectorAll(".content");
  
  sections.forEach(function(section) {
      section.style.display = "none";
  });
  
  var selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
      selectedSection.style.display = "block";
  }
}


















// Afficher "My Projects" par défaut au chargement de la page
showPage("myProjectsPage");


// Sélectionne l'élément input avec l'ID "searchInput" et écoute les entrées de l'utilisateur
document.getElementById("searchInput").addEventListener("input", function () {

  // Récupère la valeur saisie dans l'input et la convertit en minuscules
  const searchprojets = this.value.toLowerCase();

  // Sélectionne toutes les lignes <tr> du tableau ayant la classe "project-table"
  const rows = document.querySelectorAll(".project-table tbody tr");

  // Parcourt chaque ligne du tableau
  rows.forEach(row => {

    // Récupère le texte du premier <td> de la ligne et le met en minuscules
    const projectName = row.querySelector("td").textContent.toLowerCase();

    // Vérifie si le texte saisi par l'utilisateur est présent dans le nom du projet
    if (projectName.includes(searchprojets)) {
      // Si oui, on affiche la ligne (valeur par défaut de display)
      row.style.display = "";
    } else {
      // Sinon, on cache la ligne
      row.style.display = "none";
    }
  });
});









//ouvrir le Box pour ouvrir un nouveau projet
document.querySelector('.ajouter-projet').addEventListener('click', function ()
{
    document.getElementById('box-ajouter-un-projet').style.display='block';
}
);
//sauvegarder le projet
document.getElementById('save-project').addEventListener('click',function()
{
    const   projectName = document.getElementById('project-name').value ;
    const ProjectDescription = document.getElementById('project-description').value ;
    const ProjectMembers = document.getElementById('project-members').value ;
    const ProjectDeadline = document.getElementById('project-deadline').value ;

if(projectName){
    const newProject=document.createElement('div');
    newProject.className='projet';
    newProject.textContent='projectName';
    newProject.dataset.description='projectDescription';
    newProject.dataset.members='projectMembers';
    newProject.dataset.deadline='projectDeadline';
    
    //ajouter un boutton de suppresion

    const  deleteButton = document.createElement('button');
    deleteButton.textContent='Supprimer';
    deleteButton.className='delete-button';
    deleteButton.addEventListener('click',function(e)
    {
        e.stopPropagation(); //pour empeche l'ouverture du détail du projet
        newProject.remove();
    } );
    newProject.appendChild( deleteButton);
    //ajouter un projet à la liste
    document.querySelector('.board-project').appendChild(newProject);
    //Fermer la Box
    document.getElementById('box-ajouter-un-projet').style.display='none' ;

    //pour rénitialiser le formulaire 

    document.getElementById('project-name').value = '';
    document.getElementById('project-description').value = '';
    document.getElementById('project-members').value = '';
    document.getElementById('project-deadline').value = '';

} else {
    alert('Veuillez entrer un nom de projet');
}
});

//pour fermer la Box d'ajout de projet

document.getElementById('close-add-box').addEventListener('click', function () {
document.getElementById('box-ajouter-un-projet').style.display = 'none';

});
//afficher le détail d'un projet
document.querySelector('.board-project').addEventListener('click',function(e){
    if(e.target.classList.contains('projet')) {
        const project=e.target;
        
        document.getElementById('project-details-name').textContent = project.textContent;
        document.getElementById('project-details-description').textContent = project.dataset.description;
        document.getElementById('project-details-members').textContent = project.dataset.members;
        document.getElementById('project-details-deadline').textContent = project.dataset.deadline;
        document.getElementById('box-details-projet').style.display = 'block';

}

});

//pour fermer la Box des détails
document.getElementById('close-details').addEventListener('click', function () {
document.getElementById('box-details-projet').style.display = 'none';
});

//pour fermer les Boxes si on clique en dehors
window.onclick = function(event){
    const boxes=document.querySelectorAll('.box');
    boxes.forEach(box=> {
        if(event.target===box){
                box.style.display='none';
        }

    }

    );
  }



