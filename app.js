
const numero = { cont: 0 };

// Vista: los elementos que el usuario ve y usa
const view = {
  inc: document.getElementById('inc'),
  dec: document.getElementById('dec'),
  cont: document.getElementById('cont'),

  render(valor) {
    this.cont.textContent = valor;
  }
};

// Presentador: conecta el modelo y la vista, maneja la lógica
const presenter = {
  init() {
    view.inc.onclick = () => this.updateCount(1);
    view.dec.onclick = () => this.updateCount(-1);
    view.render(numero.cont);
  },
  updateCount(delta) {
    numero.cont += delta;
    view.render(numero.cont);
  }
};

// Arrancamos la aplicación
presenter.init();



