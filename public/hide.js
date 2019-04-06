function hide_related_keys(trigger, key) {
    let hider = generate_hider(trigger, key);
    trigger.addEventListener('change', hider, { passive: true });
    hider();
}

function generate_hider(trigger, key) {
    return function() {
        let es = document.getElementsByClassName(key);
        if (trigger.checked) {
            for (let e of es) {
                e.style.display = '';
            }
        } else {
            for (let e of es) {
                e.style.display = 'none';
            }
        }
    }
}
