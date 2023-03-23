class Animal {
    name: string;


    constructor(name: string,) {
        this.name = name;
    }

    animal(): string {
        return `ini hewan ${ this.name} `
    }

    

}


class Sound extends Animal {
    sound: string;
    
    constructor(name: string, sound: string) {
        super(name) 
        this.sound = sound;
    }

    makeSound(): string {
        return `${this.name} suaranya ${this.sound}`
    }
}


let giraffeSound = new Sound ('Jerapah', 'Meow Meow')
console.log(giraffeSound.makeSound());

let crocodileSound = new Sound ('Buaya', 'Kalau aku ngechat kamu ada yang marah ga ?')
console.log(crocodileSound.makeSound());