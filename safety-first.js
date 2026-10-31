(() => {
  const scene = document.getElementById('scene');
  const worker = document.getElementById('worker');
  const caption = document.getElementById('sceneCaption');
  const stepText = document.getElementById('sceneStep');
  const progressFill = document.getElementById('progressFill');
  const scanFlash = document.getElementById('scanFlash');
  const replayButton = document.getElementById('replayButton');
  const languageToggle = document.getElementById('languageToggle');
  let timer = [];
  let lang = 'en';
  const captions = {
    en: [
      '1. Check your PPE before entering.',
      '2. Follow your site’s written sign-in process, if required.',
      '3. Scan your own badge and wait for confirmation, if your site uses a scanner.',
      '4. Enter only when authorised. Ask if anything is unclear.'
    ],
    de: [
      '1. Prüfe deine Schutzausrüstung vor dem Eintritt.',
      '2. Folge dem schriftlichen Anmeldeverfahren, falls erforderlich.',
      '3. Scanne deinen eigenen Ausweis und warte auf Bestätigung, falls ein Scanner genutzt wird.',
      '4. Betrete den Bereich nur mit Berechtigung. Frage bei Unsicherheit nach.'
    ]
  };
  const stepLabels = {en: 'STEP', de: 'SCHRITT'};

  function clearTimers() { timer.forEach(clearTimeout); timer = []; }
  function setStep(n) {
    caption.textContent = captions[lang][n - 1];
    stepText.textContent = `${stepLabels[lang]} ${n} ${lang === 'en' ? 'OF' : 'VON'} 4`;
    progressFill.style.width = `${n * 25}%`;
    if (n === 3) {
      scanFlash.classList.remove('show');
      void scanFlash.offsetWidth;
      scanFlash.classList.add('show');
    }
  }
  function replay() {
    clearTimers();
    scanFlash.classList.remove('show');
    scene.classList.remove('replay');
    worker.classList.remove('walking');
    worker.style.animation = 'none';
    void worker.offsetWidth;
    worker.style.animation = '';
    worker.classList.add('walking');
    timer.push(setTimeout(() => worker.classList.remove('walking'), 4700));
    setStep(1);
    timer.push(setTimeout(() => setStep(2), 2800));
    timer.push(setTimeout(() => setStep(3), 5700));
    timer.push(setTimeout(() => setStep(4), 8500));
  }
  replayButton.addEventListener('click', replay);
  languageToggle.addEventListener('click', () => {
    lang = lang === 'en' ? 'de' : 'en';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-en][data-de]').forEach(el => {
      el.textContent = el.dataset[lang];
    });
    languageToggle.textContent = lang === 'en' ? 'Deutsch' : 'English';
    replay();
  });
  replay();
})();
