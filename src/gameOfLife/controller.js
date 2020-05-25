export const controller = model => {
  // à défaut d'avoir du jquery
  document
    .getElementById("start")
    .addEventListener("click", () => start(model));

  document.getElementById("stop").addEventListener("click", () => stop(model));

  document
    .getElementById("reset")
    .addEventListener("click", () => reset(model));
};

/**
 * Démarre le model.
 * @param {model} model le model.
 */
function start(model) {
  console.log("user event : start");
  model.run();
}

/**
 * Stoppe le modèle.
 * @param {model} model le modèle.
 */
function stop(model) {
  console.log("user event : stop");
  model.stop();
}

/**
 * Réinitialise le modèle.
 * @param {model} model le modèle.
 */
function reset(model) {
  console.log("user event : reset");
  model.reset();
}
