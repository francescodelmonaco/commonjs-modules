import { nameFunction } from "./names.js";
import { hobbiesFunction } from "./hobbies.js";

function peopleFunction() {
    const peopleInfo = {
        fullName: nameFunction("Francesco", "Delmonaco"),
        hobbies: hobbiesFunction("Musica", "Sport", "Informatica")
    };
    return peopleInfo
};

console.log(peopleFunction());