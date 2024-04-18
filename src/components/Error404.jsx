import React from "react";
import "../index.css";

function Error404() {
  return (
<>
    <div className="flex justify-center items-center h-3/4  font-shadows">
        <div className="md:mb-0">
            <img className="w-full" src= "/error2.jpg" alt="Error Image"></img>
        </div>
      {/* <div className="text-center text-4xl font-medium text-black-700">
        This page
        <br />
        does not
        <br />
        exist.
      </div> */}
      <div>
        <div className="text-center text-8xl text-gray-500 error1">404</div>
      </div>
      {"//"}
      <div className="mt-4 text-6xl text-black-500 error2">
         {"//"} 404 {"//"} 
      </div>
      {"//"}
    </div>
    <div className="text-center font-shadows text-4xl font-medium text-black-700">This page does not exist!</div>
    </>
  );
}
export default Error404;
