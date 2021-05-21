interface MouseEvent {
  readonly target: HTMLElement | null;
}

((_w, d) => {
  const makeReplacement = () => {
    const replacer = d.createElement("i");
    replacer.textContent = "removed";
    return replacer;
  };

  const initRemoving = () => {
    d.addEventListener(
      "click",
      ({ target }) => {
        if (!target?.classList.contains("content")) return;
        while (target.firstElementChild) target.firstElementChild.remove();
        target.append(makeReplacement());
      },
      { once: true }
    );
  };

  d.addEventListener("keyup", ({ ctrlKey, metaKey, key }) => {
    if (!ctrlKey && !metaKey) return;

    const shortcutMap: { [x: string]: () => void } = {
      R: initRemoving,
    };

    return shortcutMap[key.toUpperCase()]();
  });

  d.addEventListener("click", (event) => {
    const { target } = event;
    if (!target || target.id !== "footer-logo") return;
    event.preventDefault();
    return initRemoving();
  });
})(window, document);
