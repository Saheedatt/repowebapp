import React, { useEffect } from "react";

function Random() {
  useEffect(() => {
    getRepo();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <p>I would have been a functional page but here we are...</p>
    </div>
  );
}
export default Random;
