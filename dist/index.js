"use strict";
((_w, d) => {
    const makeReplacement = () => {
        const replacer = d.createElement('i');
        replacer.textContent = 'removed';
        return replacer;
    };
    const initRemoving = () => {
        d.addEventListener('click', ({ target }) => {
            if (!(target === null || target === void 0 ? void 0 : target.classList.contains('content')))
                return;
            while (target.firstChild)
                target.firstChild.remove();
            target.append(makeReplacement());
        }, { once: true });
    };
    d.addEventListener('keyup', ({ ctrlKey, metaKey, key }) => {
        if (!ctrlKey && !metaKey)
            return;
        const shortcutMap = {
            R: initRemoving,
        };
        return shortcutMap[key.toUpperCase()]();
    });
    d.addEventListener('click', (event) => {
        const { target } = event;
        if (!target || !target.matches('img[src*=logo]'))
            return;
        event.preventDefault();
        return initRemoving();
    });
})(window, document);
