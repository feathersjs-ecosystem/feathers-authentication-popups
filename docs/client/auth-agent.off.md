@function authentication-popups.authAgent.static.off off
@parent authentication-popups.authAgent.static
@signature `authAgent.off(eventName, handler)`

Removes a handler function from the `authAgent`
1. **eventName** `{String}`: The name of the event to unsubscribe from.
2. **handler** `{Function}`: A reference to a previously-subscribed function to be unsubscribed.
