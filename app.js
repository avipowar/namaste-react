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
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *    - Logo
 *    - Nav Items
 * Body
 *    - Search
 *    - RestaurantContainer
 *        - RestaurantCard
 *          - img
 *          - Name Of Res, Star Rating, cuisine, delivery time
 * Footer
 *    - copyright
 *    - Links
 *    - Address
 *    - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // console.log(props);
  // const { passData } = props;
  const { name, rating } = props.passData;
  console.log(name);
  // console.log(passData);
  // console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/binzeiptfxt3rqbo7lgb"
        alt="res-logo"
      />
      <h3>Meghana foods</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const data = {
  name: "Avi",
  rating: "4.0",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard passData={data} />
      </div>
    </div>
  );
};

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
