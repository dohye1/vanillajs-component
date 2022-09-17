import { Component } from "./core/Component.js";
import { store } from "./store.js";

const InputA = () => `<input id="stateA" value="${store.state.a}"/>`;

const InputB = () => `<input id="stateB" value="${store.state.b}"/>`;

const Calculator = () => `<p>a+b = ${store.state.a + store.state.b}</p>`;

export class App extends Component {
  initState() {
    return { a: 10, b: 20 };
  }

  template() {
    return `${InputA()}${InputB()}${Calculator()}`;
  }

  setEvent() {
    const { $el } = this;

    $el.querySelector("#stateA").addEventListener("change", ({ target }) => {
      store.setState({ a: Number(target.value) });
    });

    $el.querySelector("#stateB").addEventListener("change", ({ target }) => {
      store.setState({ b: Number(target.value) });
    });
  }
}
