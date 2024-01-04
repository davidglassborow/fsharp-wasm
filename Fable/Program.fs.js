import { createAtom } from "./fable_modules/fable-library.4.9.0/Util.js";
import { run } from "../SharedProblem/Prime.fs.js";

export let count = createAtom(0);

export const myButton = document.querySelector(".my-button");

myButton.onclick = ((_arg) => {
    const answer = run();
    myButton.innerText = answer;
});

