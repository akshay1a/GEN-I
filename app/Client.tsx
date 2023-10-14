"use client";

import React from "react";
import Image from "next/image";
export default function Client() {

   


  return (
    <main className="m-4 md:m-20 ">
      <style jsx>{`
        @keyframes lights {
          0% {
            color: hsl(230, 40%, 80%);
            text-shadow:
              0 0 1em hsla(320, 100%, 50%, 0.2),
              0 0 0.125em hsla(320, 100%, 60%, 0.3),
              -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
              1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
          }
          
          30% { 
            color: hsl(230, 80%, 90%);
            text-shadow:
              0 0 1em hsla(320, 100%, 50%, 0.5),
              0 0 0.125em hsla(320, 100%, 60%, 0.5),
              -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
              0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
          }
          
          40% { 
            color: hsl(230, 100%, 95%);
            text-shadow:
              0 0 1em hsla(320, 100%, 50%, 0.5),
              0 0 0.125em hsla(320, 100%, 90%, 0.5),
              -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
              0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
          }
          
          70% {
            color: hsl(230, 80%, 90%);
            text-shadow:
              0 0 1em hsla(320, 100%, 50%, 0.5),
              0 0 0.125em hsla(320, 100%, 60%, 0.5),
              0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
              -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
          }
          
          100% {
            color: hsl(230, 40%, 80%);
            text-shadow:
              0 0 1em hsla(320, 100%, 50%, 0.2),
              0 0 0.125em hsla(320, 100%, 60%, 0.3),
              1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
              -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
          }
          
        }
        
        h1 {
          margin: auto;
          font-size: 5.5rem;
          font-weight: 600;
          animation: lights 5s 750ms linear infinite;
        }


      `}</style>
      <div className="flex flex-row gap-5">
        <div className="flex flex-start">
          <h1 className="">
            Create your Own Imaginations using our tools
          </h1>
        </div>
        <div className="flex flex-start">
          <video width="900" height="900" loop autoPlay>
            <source src="Robo_animated.mp4" type="video/mp4" />
          </video>
          {/* <Image
          src="/robo_animated.gif"
          alt="Robo Animation"
          className=" rounded-lg shadow-md w-[56rem] h-[auto]"
          width={100}
          height={100}
          /> */}
        </div>
      </div>
      
    </main>
  );
}
