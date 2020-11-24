export const intersectionObserver = (ref, callBack, disconnect = true) => {
    const observer = new IntersectionObserver((entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            callBack(entry.boundingClientRect.y);
            disconnect && observer.disconnect();
        }
    });

    observer.observe(ref);

    return observer;
};
