import"./styles/base.css"
import"./styles/footer.css"
import"./styles/form.css"
import"./styles/header.css"
import"./styles/resets.css"

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered successfully with scope: ', registration.scope);
            })
            .catch(error => {
                console.error('ServiceWorker registration failed: ', error);
            });
    });
}
 import { handlers } from "./js/handles"
 export{handlers}

