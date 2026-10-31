/* WarehouseReady: English-German Translation System */

const translations = {

  en: {
    siteName: "WarehouseReady",
    home: "Home",
    safetyFirst: "Safety First",
    startLearning: "Start learning",
    important: "Important:",
    learningPath: "LEARNING PATH",
    chooseTopic: "Choose a topic",
    language: "Language",

    heroTitle: "Start your warehouse job with confidence.",
    heroDescription:
      "Learn how to work safely, accurately and efficiently in the warehouse.",

    safetyNotice:
      "Wearing safety boots and an orange high-visibility vest is mandatory before entering the warehouse.",

    learningDescription:
      "Follow these six steps in order to complete your tasks safely and efficiently.",

    picking: "Picking",
    packing: "Packing",
    palletizing: "Palletizing",
    prePacking: "Pre-packing",
    dispatch: "Dispatch",

    step1: "Step 1",
    step2: "Step 2",
    step3: "Step 3",
    step4: "Step 4",
    step5: "Step 5",
    step6: "Step 6",

    previous: "Previous",
    next: "Next",
    complete: "Complete lesson",
    checkAnswer: "Check answer",
    tryAgain: "Try again",
    correct: "Correct!",
    incorrect: "Incorrect. Try again.",
    quizTitle: "Knowledge check",
    lessonComplete: "Lesson completed!"
  },

  de: {
    siteName: "WarehouseReady",
    home: "Startseite",
    safetyFirst: "Sicherheit zuerst",
    startLearning: "Lernen beginnen",
    important: "Wichtig:",
    learningPath: "LERNPFAD",
    chooseTopic: "Thema auswählen",
    language: "Sprache",

    heroTitle: "Starten Sie sicher und selbstbewusst in Ihren Lagerjob.",
    heroDescription:
      "Lernen Sie, wie Sie sicher, präzise und effizient im Lager arbeiten.",

    safetyNotice:
      "Das Tragen von Sicherheitsschuhen und einer orangefarbenen Warnweste ist vor dem Betreten des Lagers verpflichtend.",

    learningDescription:
      "Befolgen Sie diese sechs Schritte, um Ihre Aufgaben sicher und effizient auszuführen.",

    picking: "Kommissionierung",
    packing: "Verpackung",
    palletizing: "Palettierung",
    prePacking: "Vorverpackung",
    dispatch: "Versand",

    step1: "Schritt 1",
    step2: "Schritt 2",
    step3: "Schritt 3",
    step4: "Schritt 4",
    step5: "Schritt 5",
    step6: "Schritt 6",

    previous: "Zurück",
    next: "Weiter",
    complete: "Lektion abschließen",
    checkAnswer: "Antwort überprüfen",
    tryAgain: "Erneut versuchen",
    correct: "Richtig!",
    incorrect: "Falsch. Versuchen Sie es erneut.",
    quizTitle: "Wissensüberprüfung",
    lessonComplete: "Lektion abgeschlossen!"
  }

};


/* Apply translation to the page */

function applyTranslations(language) {

  const selectedLanguage = translations[language]
    ? language
    : "en";

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.getAttribute("data-i18n");

    if (translations[selectedLanguage][key]) {
      element.textContent = translations[selectedLanguage][key];
    }

  });

  localStorage.setItem("warehouseLanguage", selectedLanguage);
}


/* Initialize language selector */

document.addEventListener("DOMContentLoaded", () => {

  const languageSelector = document.getElementById("language");

  const savedLanguage =
    localStorage.getItem("warehouseLanguage") || "en";

  if (languageSelector) {

    languageSelector.value = savedLanguage;

    languageSelector.addEventListener("change", () => {

      applyTranslations(languageSelector.value);

    });

  }

  applyTranslations(savedLanguage);

});
