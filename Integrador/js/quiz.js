// Definición de las preguntas y respuestas
const questions = [
  {
    question:
      "Goku atravesaba mares, valles y montañas en su fiel nube voladora durante sus primeras aventuras. Eso sí, conforme aprendió a volar dejó de necesitarla. Entonces, ¿a quién regaló Goku la nube mágica al final del manga?",
    answers: [
      { txt: "A Pan, su nieta", correct: false },
      { txt: "A Roshi, su maestro", correct: false },
      { txt: "A Krillin, su mejor amigo", correct: false },
      { txt: "A Uub, la resurreccion de Buu", correct: true },
    ],
    extra:
      "Pese al enorme poder latente de Uub, Goku se dio cuenta que le faltaba adiestramiento. De hecho, como no sabía volar, le regaló su nube.",
  },
  {
    question:
      "Cuando Goku conoció a Bulma éste le dijo que tenía 14 años, aunque parecía demasiado pequeño para esa edad. ¿Con cuántos años participó en el 21º Torneo de las Artes Marciales?",
    answers: [
      { txt: "19", correct: false },
      { txt: "21", correct: false },
      { txt: "12", correct: true },
      { txt: "15", correct: false },
    ],
    extra:
      "Como aclaró Goku durante el torneo, su edad era de 12 años. Le dijo a Bulma y Krilin que tenía 14 ya que por entonces no sabía contar. Afortunadamente, aprendió algo de matemáticas con Roshi",
  },
  {
    question:
      "Es bastante frecuente que los saiyans se hagan cicatrices en el cuerpo dado su estilo de vida. De hecho, ¿dónde tiene Goku su cicatriz?",
    answers: [
      { txt: "En su cabeza", correct: true },
      { txt: "En su espalda ", correct: false },
      { txt: "En su trasero", correct: false },
      { txt: "En su pie derecho", correct: false },
    ],
    extra:
      "El pequeño Goku le dió más de un disgusto a su abuelo adoptivo. Un día se cayó de cabeza desde una gran altura y, tras estar al borde de la muerte, su forma de ser cambió. Afortunadamente, de aquel susto sólo conserva una cicatriz.",
  },
  {
    question:
      "Antes de convertirse a sí mismo en un androide, el Dr. Gero secuestró a dos jóvenes delincuentes con el objetivo de transformarlos en seres de poder ilimitado. ¿Cómo se llamaban originalmente los Androides A17 y A18?",
    answers: [
      { txt: "Lapis y Lazuli", correct: true },
      { txt: "Castor y Pollux", correct: false },
      { txt: "Bonnie y Clyde", correct: false },
      { txt: "Richard y Mckenzie", correct: false },
    ],
    extra:
      "Según establece el propio Toriyama en los compendios y entrevistas, ambos androides compartían nombre con las exóticas gemas azuladas. Eso sí, ambos prefieren que se les llame por su nombre actual",
  },
  {
    question:
      "Bardock, el padre de Goku, ha calado estupendamente entre los fans de Dragon Ball. Pero ¿cómo se llama la madre de Goku?",
    answers: [
      { txt: "Apple", correct: false },
      { txt: "Nuts", correct: false },
      { txt: "Gine", correct: true },
      { txt: "Celipa", correct: false },
    ],
    extra:
      "El propio Toriyama dibujó una historia corta llamada Dragon Ball Minus en la que se nos presenta a Gine, la madre de Goku. Más tarde la veríamos fugazmente en videojuegos y la gran pantalla",
  },
  {
    question:
      "En 2008 Toei dió una grata sorpresa a los fans de Dragon Ball con ‘Dragon Ball Z: Goku y sus amigos se reúnen’. Un nuevo especial para TV en el que conocíamos al hermano de Vegeta ¿Cómo se llama?",
    answers: [
      { txt: "Vegeta es hijo unico", correct: false },
      { txt: "Tarble", correct: true },
      { txt: "Onio", correct: false },
      { txt: "Cabba", correct: false },
    ],
    extra:
      "El príncipe Tarble es un saiyan exiliado al que, por cierto, se hace una diminuta mención durante Dragon Ball Broly y La Batalla de los Dioses.",
  },
  {
    question:
      "Cuando los saiyans con cola miran directamente a la Luna se transforman en mono gigante. Ahora bien, también es posible crear una pequeña luna capaz de igualar el efecto ¿Cuantos rayos Blutz necesita un saiyan para transformarse en Ozaru?",
    answers: [
      { txt: "17.000 de Blutz", correct: false },
      { txt: "1.700.000 de Blutz", correct: false },
      { txt: "170.000 de Blutz", correct: false },
      { txt: "17.000.000 de Blutz", correct: true },
    ],
    extra:
      "Según Vegeta, la luz del sol reflejada en la luna necesaria para provocar la transformación de Ozaru debe ser de, como mínimo, 17 millones de rayos Blutz.",
  },
  {
    question:
      "La Escuela de la Grulla es una escuela de artes marciales fundada por Tsuru-Sen'nin ¿Cuál de los siguientes personajes no formó parte de la misma?",
    answers: [
      { txt: "Chaos", correct: false },
      { txt: "Tao Pai Pai", correct: false },
      { txt: "Krillin", correct: true },
      { txt: "Ten Shin Han", correct: false },
    ],
    extra:
      "Ten Shin Han y Chaos fueron los alumnos mas destacados de la Escuela de la Grulla, ambos abandonaron la misma luego de recapacitar sobre sus actos al enfrentar a Tao Pai Pai en el Torneo de las Artes Marciales.",
  },
  {
    question: "¿En qué consiste el método de entrenamiento del Maestro Roshi?",
    answers: [
      { txt: "Moverse mucho y divertirse mucho", correct: false },
      { txt: "Estudiar mucho", correct: false },
      { txt: "Comer mucho y descansar mucho", correct: false },
      { txt: "Todas son verdaderas", correct: true },
    ],
    extra:
      "Cuando Goku y Krilin se pusieron a entrenar con el Maestro roshi, éste les hizo pasar toda clase de pruebas absurdas. Sin embargo, su base es bastante sencilla: “Moverse mucho, estudiar mucho, divertirse mucho, comer mucho y descansar mucho”",
  },
  {
    question:
      "Según registra el scouter de Vegeta antes de destruirlo ¿Cuál es el nivel de poder de Goku, sin usar el Kaio Ken,  durante su enfrentamiento con Nappa?",
    answers: [
      { txt: "Mas de 8000 unidades", correct: true },
      { txt: "Mas de 9000 unidades", correct: false },
      { txt: "Mas de 7000 unidades", correct: false },
      { txt: "Mas de 10000 unidades", correct: false },
    ],
    extra:
      "Pese al meme de internet, el nivel de poder que despliega Goku al enfrentarse a Nappa sobrepasa las 8.000 unidades. Una cantidad que llegaría a multiplicar por cuatro gracias al kaio-ken durante su combate con Vegeta.",
  },
];
// Elementos del DOM
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Variables de estado del juego
let currentQuestionIndex = 0;
let score = 0;

// Función para iniciar el cuestionario
function startQuiz() {
  currentQuestionIndex = 0; // Reinicia el índice de la pregunta actual
  score = 0; // Reinicia el puntaje del jugador
  nextButton.innerHTML = "Siguiente"; // Cambia el texto del botón "Siguiente"
  showQuestion(); // Muestra la primera pregunta
}

// Función para mostrar la pregunta actual y sus opciones de respuesta
function showQuestion() {
  resetState(); // Reinicia el estado del DOM
  let currentQuestion = questions[currentQuestionIndex]; // Obtiene la pregunta actual del array
  let questionNo = currentQuestionIndex + 1; // Calcula el número de pregunta (1-indexed)
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Muestra la pregunta en el HTML

  // Creación de botones de respuesta y asignación de eventos
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button"); // Crea un nuevo botón
    button.innerHTML = answer.txt; // Establece el texto del botón como la respuesta
    button.classList.add("btn"); // Agrega una clase al botón
    answerButton.appendChild(button); // Agrega el botón al contenedor de respuestas

    if (answer.correct) {
      button.dataset.correct = answer.correct; // Establece un atributo personalizado para indicar si la respuesta es correcta
    }
    button.addEventListener("click", selectAnswer); // Agrega un event listener para manejar la selección de la respuesta
  });
}

// Función para resetear el estado del DOM
function resetState() {
  nextButton.style.display = "none"; // Oculta el botón "Siguiente"
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild); // Elimina todos los botones de respuesta del contenedor
  }
}

// Función para manejar la selección de una respuesta por parte del jugador
function selectAnswer(e) {
  const selectedBtn = e.target; // Obtiene el botón seleccionado
  const isCorrect = selectedBtn.dataset.correct === "true"; // Verifica si la respuesta seleccionada es correcta

  // Actualización del puntaje y estilo visual de la respuesta seleccionada
  if (isCorrect) {
    selectedBtn.classList.add("correct"); // Agrega una clase al botón para indicar que la respuesta es correcta
    score++; // Incrementa el puntaje del jugador
  } else {
    selectedBtn.classList.add("incorrect"); // Agrega una clase al botón para indicar que la respuesta es incorrecta
  }

  // Deshabilitar botones de respuesta y mostrar el botón "Siguiente"
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // Agrega una clase a los botones de respuesta correctos
    }
    button.disabled = true; // Deshabilita todos los botones de respuesta
  });
  nextButton.style.display = "block"; // Muestra el botón "Siguiente"
}

// Función para mostrar el puntaje final
function showScore() {
  resetState(); // Reinicia el estado del DOM
  questionElement.innerHTML = `Tu puntaje fue ${score} de ${questions.length}!`; // Muestra el puntaje final
  nextButton.innerHTML = "Jugar de nuevo"; // Cambia el texto del botón "Siguiente"
  nextButton.style.display = "block"; // Muestra el botón "Siguiente"
}

// Función para manejar el botón "Siguiente"
function handleNextButton() {
  currentQuestionIndex++; // Incrementa el índice de la pregunta actual
  if (currentQuestionIndex < questions.length) {
    showQuestion(); // Muestra la siguiente pregunta si quedan preguntas por responder
  } else {
    showScore(); // Muestra el puntaje final si todas las preguntas han sido respondidas
  }
}

// Event listener para el botón "Siguiente"
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton(); // Maneja el evento de clic en el botón "Siguiente"
  } else {
    startQuiz(); // Reinicia el cuestionario si se hace clic en el botón "Siguiente" después de mostrar el puntaje final
  }
});

// Iniciar el cuestionario al cargar la página
startQuiz(); // Llama a la función para iniciar el cuestionario cuando la página se carga