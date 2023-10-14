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
        main {
          margin: 0;
          font: 100% / 1.5 Raleway, sans-serif;
          color: hsl(230, 100%, 95%);
          background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
          height: 100vh;
          display: flex;
        }
        h1 {
          margin: auto;
          font-weight: 600;
          animation: lights 5s 750ms linear infinite;
        }


      `}</style>
      <div className="m-4 md:mx-12 flex flex-col md:flex-row gap-5">
        <div className="my-12 flex flex-col md:flex-row justify-center items-start">
          <h1 className="text-[2.5rem] md:text-[5.5rem] flex flex-col items-start  md:mr-4 my-4 md:order-1 order-2">
            Create your Own Imaginations using our tools
          </h1>
        </div>
        <div className="flex flex-center md:order-2 order-1">
          <video width={"auto"} loop autoPlay
          className=" md:w-[400] md:h-[400]">
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
