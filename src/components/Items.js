import Component from "../core/Component.js";

export default class Items extends Component {
  template() {
    if (!this.$props?.filteredItems?.length) {
      return "투두없음";
    }

    const { filteredItems } = this.$props;

    return `<ul>
    ${filteredItems
      .map(
        ({ contents, active, seq }, key) =>
          `<li data-seq="${seq}">${contents}<button class="toggleBtn" style="${
            active ? "#09f" : "#f09"
          }">${
            active ? "활성" : "비활성"
          }</button><button class="deleteBtn" data-index="${key}">삭제</button></li>`
      )
      .join("")}
    </ul>`;
  }

  setEvent() {
    const { deleteItem, toggleItem } = this.$props;

    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const deleteTarget = Number(target.closest("[data-seq]").dataset.seq);
      deleteItem(deleteTarget);
    });

    this.addEvent("click", ".toggleBtn", ({ target }) => {
      const toggleTarget = Number(target.closest("[data-seq]").dataset.seq);
      toggleItem(toggleTarget);
    });
  }
}
