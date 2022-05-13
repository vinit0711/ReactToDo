import React, { useState } from "react";

// let count = 0;

// const IncNum = (count) => {
//   count = count + 1;
//   return count;
// };

// const App = () => {
//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={IncNum}>Click me</button>
//     </>
//   );
// };

// export default App;

// const youtuber = "thapa techincal";

// const favrprog = "React js";

// // function myName() {
// //   return (version = "vinod");
// // }

// export default youtuber;
// export { favrprog };

// const [count, setCount] = useState(5);

// const App = () => {
//   // let count = 0;

//   const [count, setCount] = useState(1);
//   // console.log(state);
//   // setCount(count++);

//   return (
//     <>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Click Me
//       </button>
//     </>
//   );
// };
// const IncNum = () => {
//   console.log("clicked");
//   // count++;
//   setCount(10);
//   // console.log("count==", count);
// };

const App = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  const inputEvent = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    const name = e.target.name;
    const value = e.target.value;
    setFullName((preValue) => {
      console.log(preValue);
      console.log([name]);
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "fname") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //   };
      // } else if (name === "lname") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //   };
      // }
    });
  };
  return (
    <>
      <div>
        <h1>
          Hello World {fullName.fname} {fullName.lname}
        </h1>
        <form onSubmit={onFormSubmit}>
          <input
            type="text"
            placeholder="Enter Your name"
            name="fname"
            onChange={inputEvent}
            value={fullName.fname}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lname"
            onChange={inputEvent}
            value={fullName.lname}
          />
          <button>Click me</button>
        </form>
      </div>
    </>
  );
};

export default App;
