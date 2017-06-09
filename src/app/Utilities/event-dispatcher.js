var subscription = (function () {
    function subscription(typeToStore, callback) {
        this.callback = callback;
        this.prototypeToMatch = typeToStore.constructor.prototype;
    }
    subscription.prototype.canHandle = function (event) {
        console.log(event.constructor.prototype);
        return event.constructor.prototype === this.prototypeToMatch;
    };
    subscription.prototype.handle = function (event) {
        if (!this.canHandle(event))
            return;
        this.callback(event);
    };
    return subscription;
}());
var Dispatcher = (function () {
    function Dispatcher() {
    }
    Dispatcher.prototype.subscribe = function (event, callback) {
        Dispatcher.subscriptions.push(new subscription(new event(), callback));
    };
    Dispatcher.prototype.emit = function (eventData) {
        for (var _i = 0, _a = Dispatcher.subscriptions; _i < _a.length; _i++) {
            var entry = _a[_i];
            entry.handle(eventData);
        }
    };
    return Dispatcher;
}());
Dispatcher.subscriptions = new Array();
//# sourceMappingURL=event-dispatcher.js.map