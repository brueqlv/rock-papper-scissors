
const prompts = require('prompts');

type GameElement = {
    title: string;
    beats: GameElement[];
}

const ELEMENT_PAPER: GameElement = {
    title: 'Paper',
    beats: [],
};
const ELEMENT_ROCK: GameElement = {
    title: 'Rock',
    beats: [],
};
const ELEMENT_SCISSORS: GameElement = {
    title: 'Scissors',
    beats: [],
};
const ELEMENT_LIZARD: GameElement = {
    title: 'Lizard',
    beats: [],
};
const ELEMENT_SPOCK: GameElement = {
    title: 'Spock',
    beats: [],
};
const ELEMENT_DYNAMITE: GameElement = {
    title: 'Dynamite',
    beats: [],
};

ELEMENT_LIZARD.beats.push(ELEMENT_PAPER, ELEMENT_SPOCK);
ELEMENT_SPOCK.beats.push(ELEMENT_ROCK, ELEMENT_SCISSORS);
ELEMENT_ROCK.beats.push(ELEMENT_LIZARD, ELEMENT_SCISSORS);
ELEMENT_PAPER.beats.push(ELEMENT_ROCK, ELEMENT_SPOCK);
ELEMENT_SCISSORS.beats.push(ELEMENT_PAPER, ELEMENT_LIZARD);
ELEMENT_SCISSORS.beats.push(ELEMENT_PAPER, ELEMENT_LIZARD, ELEMENT_ROCK, ELEMENT_SCISSORS, ELEMENT_SPOCK);


const ELEMENTS: GameElement[] = [
    ELEMENT_ROCK,
    ELEMENT_PAPER,
    ELEMENT_SCISSORS,
    ELEMENT_LIZARD,
    ELEMENT_SPOCK,
    ELEMENT_DYNAMITE
];

(async () => {
    const PC_SELECTION: GameElement = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];

    console.log(PC_SELECTION);
    const response = await prompts({
        type: 'select',
        name: 'selectedElement',
        message: 'Select your element: ',
        choices: ELEMENTS,
    });
    const PLAYER_SELECTION = ELEMENTS[response.selectedElement];

    if (PC_SELECTION.title == PLAYER_SELECTION.title) {
        console.log("It's a draw!");
    } else {
        if (PLAYER_SELECTION.beats.includes(PC_SELECTION)) {
            console.log("Player Win!");
        } else {
            console.log("PC Win!");
        }
    }
})();