import React, { useRef, useState } from "react";
import Card from "./Card";

function Foreground() {

  const ref= useRef(null);  

  const data = [
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true,  tagTitle:"Download Now", tagColor:"bg-blue-600"},
    },
    {
        description: "Donec fermentum, tortor sagittis rutrum fermentum",
        fileSize: "0.7mb",
        close: true,
        tag: { isOpen: true,  tagTitle:"Download Now", tagColor:"bg-green-600"},
    },
    {
        description: "Mauris elit dolor, blandit eu viverra nec, aliquet id odio",
        fileSize: "0.2mb",
        close: false,
        tag: { isOpen: true,  tagTitle:"Upload Now", tagColor:"bg-red-600"},
    },
    {
    description: "Vestibulum at risus eleifend, gravida erat vel, pellentesque felis",
        fileSize: "0.4mb",
        close: true,
        tag: { isOpen: true,  tagTitle:"Upload Now", tagColor:"bg-cyan-400"},
    }
  ];

  return (
    <div ref={ref} className="fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item,index)=>(
        <Card data={item} reference={ref} />
        ))}
    </div>
  );
}

export default Foreground;
