import React from "react";

const RendParag = (props) => {
  console.log(props.par);
  return (
    <div>
      {props.par.map((item) => (
        <p key={item.id}>{item.par}</p>
      ))}
    </div>
  );
};

export default RendParag;
