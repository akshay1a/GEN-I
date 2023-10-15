"use client";

import React from "react";
import Image from "next/image";
export default function Client() {

   


  return (
    <main className="m-4 md:m-8 ">
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
        .main {
          font: 100% / 1.5 Raleway, sans-serif;
          color: hsl(230, 100%, 95%);
          background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
        }
        
        h1 {
          margin: auto;
          font-weight: 600;
          animation: lights 5s 750ms linear infinite;
        }


      `}</style>
      <div className="main h-[90vh] md:h-[80vh] rounded-[3rem] md:rounded-[7rem] p-8 md:p-20 flex flex-col md:flex-row gap-12">
        <div className=" flex flex-col md:flex-row justify-center items-start">
          <h1 className="text-[2.5rem] md:text-[5.5rem] flex flex-col items-start  md:mr-4 my-4 md:order-1 order-2">
            Create your Own Imaginations using our tools
          </h1>
        </div>
        <div className="flex flex-center md:order-2 order-1">
          {/* <video width="800" height="800" loop autoPlay
          >
            <source src="Robo_animated.mp4" type="video/mp4" />
          </video> */}
          <Image
          src="/robo_animated.gif"
          alt="Robo Animation"
          className=" rounded-3xl shadow-md "
          width={900}
          height={900}
          unoptimized={true}
          />
        </div>
      </div>
      
    </main>
  );
}
