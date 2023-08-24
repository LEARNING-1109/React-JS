export default class Computer {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log("The Computer is now Running");
    }
}

const Computer_obj = new Computer('Ayush');
Computer_obj.run();
