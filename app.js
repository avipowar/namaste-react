import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";

const AppLayout = () => {
  // in applayout all the component init
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// // Recat Element
// const num = 10000;

// // React Component Compostions
// const HeadingComponent = () =>
//   (<div id="container">
//     {/* {heading} */}
//     <h1 className="heading">Namsate React Functional Component</h1>
//   </div>)(
//     <div id="container">
//       {/* {heading} */}
//       <h1 className="heading">Namsate React Functional Component</h1>
//     </div>
//   );

// const heading =
//   // ((<HeadingComponent />),
//   ((
//     <h1 className="head" tabIndex="5">
//       <h1>{num}</h1>
//       Hiii I am Avinash
//     </h1>
//   ),
//   (
//     <h1 className="head" tabIndex="5">
//       <h1>{num}</h1>
//       Hiii I am Avinash
//     </h1>
//   ));

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const heading = React.createElement("h1", { id: "heaing" }, "This is Avinash");
// // console.log("heading");

// // use jsx to create react element
// const jsxHeading = <h1 className="head"> Hiii I am Avinash </h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I AM AVINASH   "),

//     React.createElement("h1", {}, "I'm h2 vaibhav"),
//   ]),

//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),

//     React.createElement("h1", {}, "I'm h2 tag"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

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
