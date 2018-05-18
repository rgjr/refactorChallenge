## General Notes

- Started out by moving all the different components inside the original App.js into their own `/components` location, then each separate component got their own folder as well
- Originally I was going to keep each Component and Style together inside the same folder but opted for the easier route of just sticking the css files inside `/Styles`
- Cleaned up code styling by using the VSCode plugin Prettier in default settings
- Changed usages of `var` to use `let` or `const` where needed for scoping
- Imported `Component` from `react` to use instead of `React.Component`

## App
- Not much changed here aside from moving out into its own separate Component

## Timer
- Added constructor to hold state
- Bound `updateTimer` to be able to use `this` correctly
- Added `componentWillUnmount` lifecycle method to remove timer tick

## TodoForm
- Added state object to hold onto new Todo item values
- Bound `handleChange` to use `this`
- Removed references to jQuery DOM calls
- Removed `componentDidMount` lifecycle method and simply added `autofocus` to `<input>`
- Changed `onSubmit` to grab the value from state, trimmed for extraneous whitespace
- Removed string `ref` usage since, if I remmeber correctly, it is deprecated and not recommended as of React >16.0

## TodoHeader
- Refactored into a pure (stateless) functional component since state was not being used
- Removed superfluous `constructor` usage

## TodoList
- Refactored into a pure functional component

## TodoListItem
- Nothing really changed in here