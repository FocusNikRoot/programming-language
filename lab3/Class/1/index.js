class Clock {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayInfo() {
        console.log(`Часы: ${this.hours}, Минуты: ${this.minutes}, Секунды: ${this.seconds}`)
    }
}

let clock = new Clock(9, 12, 45);
clock.displayInfo();