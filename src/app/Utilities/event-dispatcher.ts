class subscription<T>{
    prototypeToMatch: T
    callback: (event: any) => any

    constructor(typeToStore: T, callback: (event: any) => any) {
        this.callback = callback;
        this.prototypeToMatch = typeToStore.constructor.prototype;
    }

    canHandle(event: any) {
        console.log(event.constructor.prototype)
        return event.constructor.prototype === this.prototypeToMatch;
    }

    handle(event: any) {
        if (!this.canHandle(event))
            return;
        this.callback(event)
    }
}

class Dispatcher {
    private static subscriptions = new Array<subscription<any>>();
    subscribe<T>(event: { new(): T;}, callback: (eventData: T) => any) {
        Dispatcher.subscriptions.push(new subscription(new event(), callback));
    }

    emit(eventData: any) {
        for (let entry of Dispatcher.subscriptions) {
            entry.handle(eventData)
        }
    }
}