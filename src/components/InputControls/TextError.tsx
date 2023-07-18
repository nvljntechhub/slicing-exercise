import React from "react";

function TextError(props: any) {
  return (
    <div
      style={{
        textAlign: "left",
        fontWeight: "bold",
      }}
    >
      {props.children}
    </div>
  );
}

export default TextError;
