export const TYPED_KEY = "typed";
export const TYPING_CLASS = "typing";

/**
 * Runs in <head> before first paint. Marks the page for the typewriter intro so the text to be typed
 * starts hidden instead of flashing in full first. It plays once per browser session and never for
 * reduced-motion users. If the script fails to load, the class is removed after 4s so the text still shows.
 */
export const typingInitScript = `(function(){try{if(sessionStorage.getItem("${TYPED_KEY}")||matchMedia("(prefers-reduced-motion: reduce)").matches)return;var d=document.documentElement;d.classList.add("${TYPING_CLASS}");setTimeout(function(){d.classList.remove("${TYPING_CLASS}")},4000)}catch(e){}})()`;
