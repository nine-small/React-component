import React from "react";

export default function Circle(props) {
  const len = props.images.length;
  const liList = props.images.map((el, i) => {
    return <li 
    className={i === props.index%len ? "active" : ""} 
    key={i}
    onClick={()=>{
      props.move(i)
    }}
    ></li>;
  });

  return <ul className="circle">{liList}</ul>;
}
