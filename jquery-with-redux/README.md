# jQuery with Redux


## Why?
This was an exploratory excercise. There are tons of jQuery projects out there and I believe many of us can agree that managing state/data and updating them in all the various places in the views can be extermely painful. This was determining if a library like Redux can reduce the pain and make managing state/data less painful.

## What are the takeaways?

- It isn't that painful. I would actually say that depending on how your `components` are being written it would make it less of a hassle to remember all of the places where you might need to update display data in your view by letting `subscribe` and your component's own `render` or `update` function handle all the work.

- In the example code, the `subscribe` functionality will be called on every `dispatch`. This means that we'll always be updating the DOM with the `render` methods available in each of the widgets. The only way to avoid this would be to implement your own virtual-dom, but that'll require a bit of work.

- This is probably a viable way of making the transition from jQuery to React+Redux a bit more feasible. The only thing is careful architecturing of the codebase.
