import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Heading from "./Heading";
// import App from "./App";

// import Card from "./Card"
// // import youtuber, { favrprog } from "./App";
// import Sdata from "./Sdata";


// ReactDOM.render(
//   <>
//     <h1>Top netflix Series</h1>,
//     {Sdata.map((val) => {
//       return (
//         <Card
//           imgsrc={val.imgsrc}
//           title={val.title}
//           sname={val.sname}
//           link={val.link}
//         />
//       )
//     })}
//   </>,
//   document.getElementById("root")
// );


ReactDOM.render(
  <App />
  , document.getElementById("root")
)