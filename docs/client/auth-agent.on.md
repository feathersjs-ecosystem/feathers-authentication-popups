@function authentication-popups.authAgent.static.on on
@parent authentication-popups.authAgent.static
@signature `authAgent.on(eventName, handler)`

Adds an event listener to the `authAgent` whose handler runs every time the event with given `eventName` is triggered.
1. **eventName** `{String}`: The name of the event to subscribe to.
2. **handler** `{Function}`: A function to be executed to handle the event.
