/*
=========================================================
 WAREHOUSE READY
 Shared English / German Language System
 File: lesson-language.js
 Supports: Lessons 01–06
=========================================================
*/

(function () {
  "use strict";

  const LANGUAGE_KEY = "wr-language";

  /*
  =======================================================
  1. ENGLISH TO GERMAN TRANSLATION DICTIONARY
  =======================================================
  */

  const EN_TO_DE = {

    // GENERAL

    "Language": "Sprache",
    "LESSON": "LEKTION",
    "Back to learning path": "Zurück zum Lernpfad",
    "‹ Back to learning path": "‹ Zurück zum Lernpfad",
    "Remember": "Denk daran",
    "Lesson guidance": "Lektionsanleitung",
    "Mark as completed ✓": "Als erledigt markieren ✓",
    "Completed ✓": "Erledigt ✓",
    "‹ Previous lesson": "‹ Vorherige Lektion",
    "Next lesson →": "Nächste Lektion →",
    "Back to learning path →": "Zurück zum Lernpfad →",

    "Lesson 1 of 6": "Lektion 1 von 6",
    "Lesson 2 of 6": "Lektion 2 von 6",
    "Lesson 3 of 6": "Lektion 3 von 6",
    "Lesson 4 of 6": "Lektion 4 von 6",
    "Lesson 5 of 6": "Lektion 5 von 6",
    "Lesson 6 of 6": "Lektion 6 von 6",

    // LESSON 01 - ON TIME ARRIVAL

    "On Time Arrival": "Pünktliches Erscheinen",
    "On-time check-in, according to your assigned shift.":
      "Pünktlich einchecken – entsprechend deiner eingeteilten Schicht.",

    "Our Shift Timings": "Unsere Schichtzeiten",

    "Please arrive on time according to your assigned shift.":
      "Bitte erscheine pünktlich zu deiner eingeteilten Schicht.",

    "Early Shift": "Frühschicht",
    "Late Shift": "Spätschicht",
    "Night Shift": "Nachtschicht",

    "Including Saturdays": "Auch samstags",
    "Monday to Sunday, as rostered": "Montag bis Sonntag laut Dienstplan",
    "Starting on Sunday": "Beginn am Sonntag",

    "Why is on-time arrival important?":
      "Warum ist pünktliches Erscheinen wichtig?",

    "Smooth operations": "Reibungsloser Ablauf",

    "Helps the team start work without delay.":
      "Das Team kann ohne Verzögerung mit der Arbeit beginnen.",

    "Safe workplace": "Sicherer Arbeitsplatz",

    "Allows time for the safety briefing and preparation.":
      "Es bleibt genügend Zeit für die Sicherheitseinweisung und Vorbereitung.",

    "Better productivity": "Bessere Produktivität",

    "Keeps receiving, storage, picking and dispatch on schedule.":
      "Wareneingang, Lagerung, Kommissionierung und Versand bleiben im Zeitplan.",

    "Respect for the team": "Respekt gegenüber dem Team",

    "Helps colleagues work efficiently and plan handovers.":
      "Kolleginnen und Kollegen können effizient arbeiten und Übergaben planen.",

    "Arrive a few minutes early so you can check in without rushing.":
      "Komme einige Minuten früher, damit du ohne Hektik einchecken kannst.",

    "Confirm your assigned shift and reporting point in the latest roster.":
      "Prüfe deine eingeteilte Schicht und den Meldepunkt im aktuellen Dienstplan.",

    "Bring your employee ID badge. Scan it at the start and end of your shift, as required.":
      "Bringe deinen Mitarbeiterausweis mit. Scanne ihn wie vorgeschrieben zu Schichtbeginn und Schichtende.",

    "Bring your employee ID badge, It's mandatory to scan the badge at the time of shift start and end.":
      "Bringe deinen Mitarbeiterausweis mit. Es ist vorgeschrieben, den Ausweis zu Schichtbeginn und Schichtende zu scannen.",

    "Also Scanning ID badge at the time of leaving for break and return from the break on time is also mandatory.":
      "Scanne deinen Ausweis beim Verlassen des Arbeitsplatzes zur Pause und bei der Rückkehr, sofern es die Standortregel verlangt.",

    "Safety boots and an orange high-visibility vest are mandatory before entering the warehouse.":
      "Sicherheitsschuhe und eine orange Warnweste sind vor dem Betreten des Lagers vorgeschrieben.",

    "If you are running late or cannot attend, inform your supervisor as soon as possible.":
      "Wenn du dich verspätest oder nicht kommen kannst, informiere deine Führungskraft so schnell wie möglich.",

    "Do not start work before your shift or change shifts without approval.":
      "Beginne nicht vor deiner Schicht und ändere deine Schicht nicht ohne Genehmigung.",

    // LESSON 02 - SAFETY BOOTS AND JACKET

    "Wear Safety Boots and Jacket":
      "Sicherheitsschuhe und Warnjacke tragen",

    "Wear Safety boots and Jacket":
      "Sicherheitsschuhe und Warnjacke tragen",

    "Wear the required protective equipment before entering the warehouse.":
      "Trage die vorgeschriebene Schutzausrüstung, bevor du das Lager betrittst.",

    "Why is the correct PPE essential?":
      "Warum ist die richtige PSA wichtig?",

    "Personal protection": "Persönlicher Schutz",

    "Safety boots help protect your feet from workplace hazards.":
      "Sicherheitsschuhe helfen, deine Füße vor Gefahren am Arbeitsplatz zu schützen.",

    "High visibility": "Gute Sichtbarkeit",

    "An orange high-visibility jacket helps others see you in busy warehouse areas.":
      "Eine orange Warnjacke sorgt dafür, dass andere dich in stark frequentierten Lagerbereichen besser sehen.",

    "Site requirements": "Vorgaben am Standort",

    "Correct PPE is an entry requirement where your site rules specify it.":
      "Die vorgeschriebene PSA ist eine Zutrittsvoraussetzung, wenn die Standortregeln dies festlegen.",

    "Team safety": "Sicherheit im Team",

    "Consistent PPE use supports a safer working environment for everyone.":
      "Konsequente Verwendung der PSA unterstützt eine sichere Arbeitsumgebung für alle.",

    "Before entering the warehouse": "Vor dem Betreten des Lagers",

    "Put on your required safety boots and orange high-visibility jacket or vest before entering the warehouse area.":
      "Ziehe vor dem Betreten des Lagerbereichs die vorgeschriebenen Sicherheitsschuhe und die orange Warnjacke oder Warnweste an.",

    "Check that your footwear is suitable, fastened and in good condition.":
      "Prüfe, ob deine Schuhe geeignet, geschlossen und in gutem Zustand sind.",

    "Make sure reflective strips are visible and the jacket or vest fits securely.":
      "Achte darauf, dass die Reflektorstreifen sichtbar sind und die Jacke oder Weste sicher sitzt.",

    "Wear any additional PPE required for your specific work area or task.":
      "Trage zusätzliche PSA, die für deinen Arbeitsbereich oder deine Aufgabe vorgeschrieben ist.",

    "Check your equipment": "Prüfe deine Ausrüstung",

    "Tell your supervisor if your safety boots, jacket or other required PPE is damaged or missing.":
      "Informiere deine Führungskraft, wenn Sicherheitsschuhe, Jacke oder andere vorgeschriebene PSA beschädigt sind oder fehlen.",

    "Do not enter a restricted operational area without the required protective equipment.":
      "Betritt keinen gesperrten Arbeitsbereich ohne die vorgeschriebene Schutzausrüstung.",

    "Do not modify, remove or exchange protective equipment unless instructed by an authorised person.":
      "Verändere, entferne oder tausche Schutzausrüstung nicht ohne Anweisung einer autorisierten Person.",

    "Ask your supervisor": "Frage deine Führungskraft",

    "Which additional PPE is required in my assigned area?":
      "Welche zusätzliche PSA benötige ich in meinem Arbeitsbereich?",

    "Where can I replace damaged or unsuitable PPE?":
      "Wo kann ich beschädigte oder ungeeignete PSA ersetzen?",

    "Are there task-specific requirements I must follow?":
      "Welche besonderen Anforderungen gelten für meine Aufgabe?",

    "Check your PPE before every shift.":
      "Prüfe deine PSA vor jeder Schicht.",

    "Replace damaged PPE through the approved site process.":
      "Lass beschädigte PSA nach dem freigegebenen Verfahren ersetzen.",

    "PPE does not replace safe behaviour, training or following instructions.":
      "PSA ersetzt weder sicheres Verhalten noch Schulungen oder das Befolgen von Anweisungen.",

    // LESSON 03 - WAREHOUSE WORKFLOW

    "Warehouse workflow": "Lagerabläufe",
    "Warehouse Workflow": "Lagerabläufe",

    "Understand the main stages: receiving, storage, picking, packing, palletising and dispatch.":
      "Kenne die wichtigsten Schritte: Wareneingang, Lagerung, Kommissionierung, Verpackung, Palettierung und Warenausgang.",

    "How do the warehouse stages fit together?":
      "Wie greifen die einzelnen Lagerprozesse ineinander?",

    "01 · Receiving": "01 · Wareneingang",

    "Goods arrive at the warehouse and are handled according to the receiving process.":
      "Die Waren kommen im Lager an und werden nach dem örtlichen Wareneingangsprozess bearbeitet.",

    "Check delivery information and visible condition as instructed.":
      "Prüfe die Lieferinformationen und den sichtbaren Zustand gemäß Anweisung.",

    "Report damaged, missing or unexpected goods; do not make assumptions.":
      "Melde beschädigte, fehlende oder unerwartete Waren. Stelle keine Vermutungen an.",

    "02 · Storage / put-away": "02 · Einlagerung",

    "Move goods only to the location assigned by the warehouse system or work instruction.":
      "Bringe Waren nur an den Lagerplatz, der vom Lagersystem oder in der Arbeitsanweisung angegeben wird.",

    "Keep labels visible and follow stacking and storage rules.":
      "Halte Etiketten sichtbar und beachte die Stapel- und Lagerregeln.",

    "Do not block aisles, emergency exits or marked routes.":
      "Blockiere keine Gänge, Notausgänge oder gekennzeichneten Verkehrswege.",

    "03 · Picking": "03 · Kommissionierung",

    "Read the order or scanner instruction carefully.":
      "Lies den Auftrag oder die Scanner-Anweisung sorgfältig.",

    "Go to the assigned location and verify the product and quantity required.":
      "Gehe zum angegebenen Lagerplatz und prüfe den benötigten Artikel und die Menge.",

    "Handle bottles and cartons carefully; report discrepancies or damage.":
      "Behandle Flaschen und Kartons vorsichtig. Melde Abweichungen oder Schäden.",

    "04 · Packing and palletising": "04 · Verpackung und Palettierung",

    "Use the correct packaging for the product and order.":
      "Verwende die passende Verpackung für den Artikel und den Auftrag.",

    "Pack and secure goods according to the site's instructions.":
      "Verpacke und sichere die Waren gemäß den Anweisungen des Standorts.",

    "Build stable pallets only as trained; do not exceed stated limits.":
      "Baue stabile Paletten nur entsprechend deiner Schulung und überschreite keine vorgegebenen Grenzen.",

    "05 · Dispatch": "05 · Warenausgang",

    "Completed orders move to the dispatch or handover area according to the local process.":
      "Fertige Aufträge werden nach dem örtlichen Ablauf in den Versand- oder Übergabebereich gebracht.",

    "Check labels and order status as required by your training.":
      "Prüfe Etiketten und Auftragsstatus entsprechend deiner Schulung.",

    "Report a mismatch before the goods leave your work area.":
      "Melde Abweichungen, bevor die Waren deinen Arbeitsbereich verlassen.",

    // LESSON 04 - ACCURACY AND QUALITY

    "Accuracy & quality": "Genauigkeit und Qualität",
    "Accuracy & Quality": "Genauigkeit und Qualität",

    "Work carefully, check the details and prevent avoidable mistakes without rushing.":
      "Arbeite sorgfältig, prüfe die Details und vermeide Fehler, ohne zu hetzen.",

    "Why do accuracy and quality matter?":
      "Warum sind Genauigkeit und Qualität wichtig?",

    "Before you handle an item": "Bevor du einen Artikel bearbeitest",

    "Read the full instruction before starting the task.":
      "Lies die vollständige Anweisung, bevor du mit der Aufgabe beginnst.",

    "Confirm the product, location and quantity using the method taught at your site.":
      "Prüfe Artikel, Lagerplatz und Menge nach dem Verfahren, das dir am Standort gezeigt wurde.",

    "Check labels carefully; do not guess if a label is unclear or damaged.":
      "Prüfe Etiketten sorgfältig. Rate nicht, wenn ein Etikett unleserlich oder beschädigt ist.",

    "During picking and packing": "Während der Kommissionierung und Verpackung",

    "Handle bottles and cartons carefully, especially fragile or glass products.":
      "Behandle Flaschen und Kartons vorsichtig, insbesondere zerbrechliche Waren und Glasprodukte.",

    "Use the packaging and palletising method specified for the order.":
      "Verwende die für den Auftrag vorgeschriebene Verpackungs- und Palettierungsmethode.",

    "Keep different orders separate as instructed.":
      "Halte verschiedene Aufträge wie angewiesen getrennt.",

    "Do not rush or skip a check to increase speed.":
      "Hetze nicht und überspringe keine Prüfung, um schneller zu arbeiten.",

    "If you find a problem": "Wenn du ein Problem feststellst",

    "Stop if the item, label, quantity or system instruction does not match.":
      "Stoppe, wenn Artikel, Etikett, Menge oder Systemanweisung nicht übereinstimmen.",

    "Report damaged goods, missing items or incorrect labels to the designated person.":
      "Melde beschädigte oder fehlende Waren sowie falsche Etiketten der zuständigen Person.",

    "Follow the approved correction process; never hide an error or create an unauthorised scan.":
      "Befolge das freigegebene Korrekturverfahren. Verheimliche niemals Fehler und erstelle keine unzulässigen Scans.",

    // LESSON 05 - BREAK / PAUSE TIMING

    "Adhere Break/Pause timing": "Pausenzeiten einhalten",
    "Adhere to Break / Pause Timing": "Pausenzeiten einhalten",

    "Take breaks at the assigned time and follow your warehouse's timekeeping procedure.":
      "Nimm deine Pausen zu den eingeteilten Zeiten und befolge das Zeiterfassungsverfahren deines Lagers.",

    "Why should break and pause times be followed?":
      "Warum müssen Pausenzeiten eingehalten werden?",

    "Know your break plan": "Kenne deinen Pausenplan",

    "Check your shift roster and the break instructions given by your supervisor.":
      "Prüfe deinen Dienstplan und die Pausenhinweise deiner Führungskraft.",

    "Confirm when and where your break should start and finish.":
      "Kläre, wann und wo deine Pause beginnt und endet.",

    "Break arrangements can differ by shift, workload, contract and site rules; do not assume everyone has the same schedule.":
      "Pausenregelungen können je nach Schicht, Arbeitsaufkommen, Vertrag und Standortregeln unterschiedlich sein. Gehe nicht davon aus, dass für alle derselbe Plan gilt.",

    "During your break": "Während deiner Pause",

    "Use the designated break area and follow site rules.":
      "Nutze den vorgesehenen Pausenbereich und beachte die Standortregeln.",

    "Return to your work area at the required time, ready to resume work.":
      "Kehre rechtzeitig und arbeitsbereit an deinen Arbeitsplatz zurück.",

    "Do not leave the site or change your break time without following the approval process.":
      "Verlasse den Standort nicht und ändere deine Pausenzeit nicht ohne das vorgesehene Genehmigungsverfahren.",

    "Timekeeping and changes": "Zeiterfassung und Änderungen",

    "Use the correct procedure to record breaks if your site requires it.":
      "Erfasse Pausen mit dem vorgeschriebenen Verfahren, sofern dies am Standort erforderlich ist.",

    "Never clock in or out for another employee.":
      "Stemple niemals für eine andere beschäftigte Person ein oder aus.",

    "If work demands, an emergency or another issue affects your break, inform your supervisor and follow the local procedure.":
      "Wenn Arbeitsanforderungen, ein Notfall oder ein anderes Problem deine Pause beeinflussen, informiere deine Führungskraft und befolge das örtliche Verfahren.",

    "Ask your supervisor or HR how breaks are arranged and recorded for your specific shift.":
      "Frage deine Führungskraft oder die Personalabteilung, wie Pausen für deine konkrete Schicht geregelt und erfasst werden.",

    // LESSON 06 - GROWTH AND PROGRESS

    "Growth & Progress": "Entwicklung und Fortschritt",

    "Build confidence through safe practice, feedback, learning and asking for help.":
      "Baue Sicherheit und Selbstvertrauen durch sicheres Üben, Feedback, Lernen und Nachfragen.",

    "What helps you grow at work?":
      "Was hilft dir, dich bei der Arbeit weiterzuentwickeln?",

    "Learn step by step": "Schritt für Schritt lernen",

    "Understand the task before starting and follow the work instruction.":
      "Verstehe die Aufgabe, bevor du beginnst, und befolge die Arbeitsanweisung.",

    "Practise only tasks you have been trained and authorised to perform.":
      "Übe nur Tätigkeiten, für die du geschult und autorisiert bist.",

    "Ask your trainer to demonstrate an unfamiliar process.":
      "Bitte deine Schulungsperson, dir einen unbekannten Ablauf zu zeigen.",

    "Do not operate machinery or powered equipment without the required training and authorisation.":
      "Bediene keine Maschinen oder motorisierten Geräte ohne die erforderliche Schulung und Genehmigung.",

    "Use feedback": "Feedback nutzen",

    "Listen to feedback from your trainer or supervisor.":
      "Höre auf Rückmeldungen deiner Schulungsperson oder Führungskraft.",

    "Ask what you should continue doing and what needs improvement.":
      "Frage, was du beibehalten solltest und was verbessert werden muss.",

    "Focus on one practical improvement at a time.":
      "Konzentriere dich jeweils auf eine konkrete Verbesserung.",

    "Report mistakes honestly and follow the approved correction process.":
      "Melde Fehler ehrlich und befolge das freigegebene Korrekturverfahren.",

    "Communicate and ask for help": "Kommunizieren und Hilfe holen",

    "Tell your supervisor if an instruction is unclear or you cannot complete a task safely.":
      "Informiere deine Führungskraft, wenn eine Anweisung unklar ist oder du eine Aufgabe nicht sicher erledigen kannst.",

    "Ask for help with heavy, damaged or unusual items.":
      "Bitte bei schweren, beschädigten oder ungewöhnlichen Artikeln um Hilfe.",

    "Share relevant information during handovers using your site's process.":
      "Gib bei Schichtübergaben wichtige Informationen nach dem Verfahren deines Standorts weiter.",

    "Treat colleagues respectfully and follow workplace rules.":
      "Behandle Kolleginnen und Kollegen respektvoll und halte die betrieblichen Regeln ein."
  };


  /*
  =======================================================
  2. ORIGINAL TEXT STORAGE

  English is the permanent source.
  German is generated from the original English text.

  This eliminates the reverse-translation problem.
  =======================================================
  */

  const originalText = new WeakMap();
  const lastRenderedText = new WeakMap();

  const originalAttributes = new WeakMap();
  const lastRenderedAttributes = new WeakMap();


  function getLanguage() {

    try {
      return localStorage.getItem(LANGUAGE_KEY) === "de"
        ? "de"
        : "en";
    } catch (error) {
      return "en";
    }

  }


  function saveLanguage(language) {

    try {
      localStorage.setItem(LANGUAGE_KEY, language);
    } catch (error) {
      console.warn("Could not save language preference:", error);
    }

  }


  function normaliseText(text) {

    return text
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  }


  /*
  =======================================================
  3. TRANSLATE TEXT NODES
  =======================================================
  */

  function translateTextNode(node, language) {

    const currentText = node.nodeValue;

    // Detect changes made by other scripts.
    if (
      lastRenderedText.has(node) &&
      currentText !== lastRenderedText.get(node)
    ) {

      originalText.set(node, currentText);

    }

    // Save original English text.
    if (!originalText.has(node)) {

      originalText.set(node, currentText);

    }

    const original = originalText.get(node);

    const key = normaliseText(original);

    if (!key) return;

    let result = original;

    if (language === "de") {

      const translated = EN_TO_DE[key];

      if (translated !== undefined) {

        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];

        result = leading + translated + trailing;

      }

    }

    // English restores the original text directly.
    node.nodeValue = result;

    lastRenderedText.set(node, result);

  }


  /*
  =======================================================
  4. TRANSLATE HTML ATTRIBUTES
  =======================================================
  */

  function translateAttribute(element, attribute, language) {

    let saved = originalAttributes.get(element);

    if (!saved) {

      saved = {};

      originalAttributes.set(element, saved);

    }

    let rendered = lastRenderedAttributes.get(element);

    if (!rendered) {

      rendered = {};

      lastRenderedAttributes.set(element, rendered);

    }

    const currentValue = element.getAttribute(attribute);

    // Detect changes made by other scripts.
    if (
      attribute in rendered &&
      currentValue !== rendered[attribute]
    ) {

      saved[attribute] = currentValue;

    }

    if (!(attribute in saved)) {

      saved[attribute] = currentValue;

    }

    const original = saved[attribute];

    if (original === null) return;

    const key = normaliseText(original);

    let result = original;

    if (language === "de" && EN_TO_DE[key] !== undefined) {

      result = EN_TO_DE[key];

    }

    element.setAttribute(attribute, result);

    rendered[attribute] = result;

  }


  /*
  =======================================================
  5. TRANSLATE COMPLETE PAGE
  =======================================================
  */

  function translatePage(language) {

    language = language === "de" ? "de" : "en";

    if (!document.body) return;

    const walker = document.createTreeWalker(

      document.body,

      NodeFilter.SHOW_TEXT,

      {

        acceptNode(node) {

          const parent = node.parentElement;

          if (!parent) {

            return NodeFilter.FILTER_REJECT;

          }

          if (

            parent.closest(
              "script, style, noscript, textarea, code, pre"
            )

          ) {

            return NodeFilter.FILTER_REJECT;

          }

          return NodeFilter.FILTER_ACCEPT;

        }

      }

    );


    const nodes = [];

    while (walker.nextNode()) {

      nodes.push(walker.currentNode);

    }

    nodes.forEach(node => {

      translateTextNode(node, language);

    });


    // Translate accessibility and input attributes.

    document.querySelectorAll(

      "[placeholder], [title], [aria-label]"

    ).forEach(element => {

      ["placeholder", "title", "aria-label"].forEach(attribute => {

        if (element.hasAttribute(attribute)) {

          translateAttribute(
            element,
            attribute,
            language
          );

        }

      });

    });


    // Update HTML language.

    document.documentElement.lang = language;


    // Update language selector.

    const selectors = [

      document.getElementById("lang"),

      document.getElementById("language")

    ].filter(Boolean);


    selectors.forEach(select => {

      select.value = language;

    });


    // Inform other scripts.

    document.dispatchEvent(

      new CustomEvent("wr:languagechange", {

        detail: {

          language: language

        }

      })

    );

  }


  /*
  =======================================================
  6. CHANGE LANGUAGE
  =======================================================
  */

  function setLanguage(language) {

    const selected = language === "de"
      ? "de"
      : "en";

    saveLanguage(selected);

    translatePage(selected);

  }


  /*
  =======================================================
  7. INITIALISE LANGUAGE SYSTEM
  =======================================================
  */

  function initialise() {

    const selectors = [

      document.getElementById("lang"),

      document.getElementById("language")

    ].filter(Boolean);


    selectors.forEach(select => {

      select.addEventListener("change", function () {

        setLanguage(this.value);

      });

    });


    // Restore previously selected language.

    translatePage(getLanguage());


    // Public API.

    window.WarehouseReadyLanguage = {

      getLanguage: getLanguage,

      setLanguage: setLanguage,

      translatePage: translatePage

    };


    console.log(
      "WarehouseReady language system loaded:",
      getLanguage()
    );

  }


  /*
  =======================================================
  8. START
  =======================================================
  */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initialise
    );

  } else {

    initialise();

  }

})();
