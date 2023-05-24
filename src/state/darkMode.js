var darkMode = true;

export function DarkModeState() {
    this.state = true;
    this.subscribers = [];

    this.subscribe = function (fn) {
        console.log(this.subscribers);
        if (!this.subscribers.includes(fn)) { this.subscribers.push(fn); } // Poprawić - przekazywać obiekt iSubscriber z identyfikatorem
    }

    this.unsubscribe = function (fn) {
        this.subscribers = this.subscribers.filter((subscriberFunction) => subscriberFunction !== fn);
    }

    this.emit = function () {
        this.subscribers.forEach((subscriberFunction) => subscriberFunction());
    }

    this.toggle = function () {
        this.state = !this.state;
        this.emit();
    }
}

var darkModeState = new DarkModeState();