@function authentication-popups.authAgent.static.emit emit
@parent authentication-popups.authAgent.static
@signature `authAgent.emit(eventName, args)`

Triggers the event attached to the provided `eventName` and calls the subscribed handlers with the `args`.
1. **eventName** `{String}`: The name of the event to trigger.
2. **args** `{any}`: arguments to be passed to event handlers, usually authentication-related information (like a JSON Web Token).
