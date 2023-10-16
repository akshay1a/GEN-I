"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Tags from '@/components/Tags';



export default function Client() {
  const [prompt, setPrompt] = useState(
    "Tokyo streets, 4k high res, ultra hd, dynamic lighting"
  );
  const availableTags = ['4k high res', 'ultra hd', 'blurry', 
'dynamic lighting', 'neon', 'animated', 'realistic', 'cartoon',
'3d animated', 'cyberpunk', 'grayscale', 'nostalgic', 'streets',
'foggy', 'rainy', 'mountains', 'public', 'crowded', 'quiet'
]; 

  const handleTagClick = (selectedTags) => {
    setPrompt(selectedTags);
  };
  const handleOnChange = (e) => {
    setPrompt(e.target.value);
  }
  // Japanese mountains, 4k high res, ultra hd, dynamic lighting
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("/default.jpg");
  
  const API_TOKEN = "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";

  const generateImage = async (e) => {
    e.preventDefault();
    setImage("/default.jpg");
    setLoading(true);
    const res = await fetch(
      "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );
    const blob = await res.blob();
    setImage(URL.createObjectURL(blob));
    setLoading(false);
  };

  return (
    <main className="m-4 md:m-4 ">
      <style jsx>{`
      .main {
        font: 100% / 1.5 Raleway, sans-serif;
        color: hsl(230, 100%, 95%);
        background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
      }
      `}</style>
      <div className="main rounded-xl p-6 flex flex-col gap-4 md:gap-8 md:mx-20 mt-8">
        <div className="text-2xl md:text-3xl font-bold flex flex-col justify-start items-center ">
          AI Image Generator
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="flex flex-col items-start  md:mr-4 mt-4 md:order-1 order-2">
            <div>
              <form
                onSubmit={generateImage}
                className="p-1 flex flex-col h-full gap-5 items-start h-[40rem] md:max-w-[50rem] "
              >
                <Label htmlFor="label">Write your Prompt!</Label>
                <Textarea
                  className="text-sm dark:border-white min-h-[8rem] min-w-[20rem] md:min-w-[45rem] md:text-md bg-zinc-900/10 dark:bg-zinc-50/10"
                  placeholder="Type your prompt here to generate image."
                  value={prompt}
                  onChange={handleOnChange}
                />
                
                <button
                  type="submit"
                  className="w-fit px-5 py-2 bg-green-600 hover:opacity-70 rounded-full "
                >
                  Generate
                </button>
                <div>
                  {/* <Tags value={prompt} availableTags={availableTags} onTagClick={handleTagClick} /> */}
                </div>
              </form>
            </div>
          </div>
          <div className=" flex justify-center md:order-2 order-1">
            {loading ? (
              <Skeleton className="w-[330px] h-[330px] md:w-[450px] md:h-[450px] rounded-lg" />
            ) : (
              <div>
                  <img 
                  src={image} 
                  alt={prompt} 
                  className="rounded-lg border-2 border-zinc-950 border-white"
                  height= '450px'
                  width='450px'  
                  />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
