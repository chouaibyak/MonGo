// document.addEventListener("DOMContentLoaded", function () {
//   const projet1 = document.getElementById("projet1");
//   const content = document.querySelector(".board");
//   const taskBoard = document.getElementById("task-board");
//   const backButton = document.getElementById("back");

//   // Cacher le tableau des tâches au départ
//   taskBoard.style.display = "none";

//   projet1.addEventListener("click", function () {
//       content.style.display = "none"; // Cache le contenu principal
//       taskBoard.style.display = "block"; // Affiche le tableau des tâches
//   });

//   backButton.addEventListener("click", function () {
//       taskBoard.style.display = "none"; // Cache le tableau des tâches
//       content.style.display = "block"; // Réaffiche le contenu principal
//   });
// });




// document.addEventListener("DOMContentLoaded", function () {
//   const suiviTaches = document.querySelector(".Suivi-taches");
//   const toggleButton = suiviTaches.querySelector("button");

//   // Création du bouton <<
//   const showButton = document.createElement("button");
//   showButton.textContent = "<< Suivi";
//   showButton.style.display = "none"; // Caché au début
//   showButton.style.padding = "8px 10px";
//   showButton.style.marginRight = "0";
//   showButton.style.backgroundColor = "#dbdede";
//   showButton.style.color = "#1a1c1c";
//   showButton.style.borderRadius = "20px";
//   showButton.style.border = "none";
//   showButton.style.cursor = "pointer";

//   // Ajouter le bouton dans le DOM
//   suiviTaches.parentNode.insertBefore(showButton, suiviTaches);

//   // Cacher la section "Suivi-taches" en cliquant sur >>
//   toggleButton.addEventListener("click", function () {
//       suiviTaches.style.display = "none";
//       showButton.style.display = "block"; // Afficher <<
//   });

//   // Réafficher "Suivi-taches" en cliquant sur <<
//   showButton.addEventListener("click", function () {
//       suiviTaches.style.display = "block";
//       showButton.style.display = "none"; // Cacher <<
//   });
// });







// document.addEventListener("DOMContentLoaded", function () {
//   const addTaskButton = document.getElementById("add-task");
//   const tacheInfo = document.querySelector(".tache-info");
//   const tacheNameInput = document.querySelector(".tache-name");
//   const enregistrerButton = tacheInfo.querySelector("button");
//   const annulerButton = tacheInfo.querySelectorAll("button")[1];
//   const toDoColumn = document.querySelector(".status-column em").parentElement;
//   const apparaitionTache = document.querySelector(".apparaition-tache");

//   // Afficher ou masquer tache-info au clic sur "Ajouter une tâche"
//   addTaskButton.addEventListener("click", function () {
//       if (tacheInfo.style.display === "none" || tacheInfo.style.display === "") {
//           tacheInfo.style.display = "block";
//       } else {
//           tacheInfo.style.display = "none";
//       }
//   });

//   // Masquer tache-info au clic sur "annuler"
//   annulerButton.addEventListener("click", function () {
//       tacheInfo.style.display = "none";
//       tacheNameInput.value = "";
//   });

//   // Ajouter une nouvelle tâche au clic sur "enregistrer"
//   enregistrerButton.addEventListener("click", function () {
//       const taskName = tacheNameInput.value.trim();

//       if (taskName) {
//           // Ajouter la tâche dans la section "Suivi" (sans bouton)
//           const newTaskSuivi = document.createElement("div");
//           newTaskSuivi.className = "task";
//           newTaskSuivi.textContent = taskName;
//           toDoColumn.appendChild(newTaskSuivi);

//           // Ajouter la tâche dans la section "apparaition-tache" (avec bouton)
//           const newTaskApparaition = document.createElement("div");
//           newTaskApparaition.className = "task_et_etat";

//           const taskText = document.createElement("p");
//           taskText.className = "task";
//           taskText.textContent = taskName;

//           const statusButton = document.createElement("button");
//           statusButton.className = "status";
//           statusButton.textContent = "TO DO";
//           statusButton.addEventListener("click", function () {
//               changeTaskStatus(newTaskSuivi, statusButton);
//           });

//           newTaskApparaition.appendChild(taskText);
//           newTaskApparaition.appendChild(statusButton);
//           apparaitionTache.appendChild(newTaskApparaition);

//           // Masquer tache-info et vider l'input
//           tacheInfo.style.display = "none";
//           tacheNameInput.value = "";
//       } else {
//           alert("Veuillez entrer un nom de tâche valide.");
//       }
//   });

//   // Fonction pour changer le statut d'une tâche
//   function changeTaskStatus(task, statusButton) {
//       const currentStatus = statusButton.textContent;
//       const doingColumn = document.querySelectorAll(".status-column")[1];
//       const doneColumn = document.querySelectorAll(".status-column")[2];

//       if (currentStatus === "TO DO") {
//           statusButton.textContent = "DOING";
//           doingColumn.appendChild(task);
//       } else if (currentStatus === "DOING") {
//           statusButton.textContent = "DONE";
//           doneColumn.appendChild(task);
//       } else if (currentStatus === "DONE") {
//           statusButton.textContent = "TO DO";
//           toDoColumn.appendChild(task);
//       }
//   }
// });




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

