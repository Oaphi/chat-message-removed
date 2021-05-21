interface MouseEvent {
  readonly target: HTMLElement | null;
}

((_w, d) => {
    const makeReplacement = () => {
        const replacer = d.createElement('i');
        replacer.textContent = 'removed';
        return replacer;
    };

    const initRemoving = () => {
        d.addEventListener(
            'click',
            ({ target }) => {
                if (!target?.classList.contains('content')) return;
                while (target.firstChild) target.firstChild.remove();
                target.append(makeReplacement());
            },
            { once: true }
        );
    };

    d.addEventListener('keyup', (event) => {
        const { ctrlKey, metaKey, shiftKey, key } = event;

        if (shiftKey || ctrlKey || metaKey) return;

        const shortcutMap: { [x: string]: () => void } = {
            DELETE: initRemoving,
        };

        return shortcutMap[key.toUpperCase()]();
    });

    d.addEventListener('click', (event) => {
        const { target } = event;
        if (!target || !target.matches('img[src*=logo]')) return;
        event.preventDefault();
        return initRemoving();
    });
})(window, document);
