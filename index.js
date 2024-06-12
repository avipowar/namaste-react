/**
 * <div id="parent">
 *      <div id = "child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id = "child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),

    React.createElement("h1", {}, "I'm h2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),

    React.createElement("h1", {}, "I'm h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc"},
//     "Hello world from React!"
// );

// console.log(heading) // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
// root.render(heading);

// BDHDJAVDAVAJHDBDBKADBDVK
