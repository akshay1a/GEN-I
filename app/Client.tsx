"use client";

import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Tags from '@/components/Tags';

const availableTags = ['4k high res', 'ultra hd', 'blurry', 
'dynamic lighting', 'neon', 'animated', 'realistic', 'cartoon',
'3d animated', 'cyberpunk', 'grayscale', 'nostalgic', 'streets',
'foggy', 'rainy', 'mountains', 'public', 'crowded', 'quiet']; 

export default function Client() {
  const [prompt, setPrompt] = useState(
    "Tokyo streets, 4k high res, ultra hd, dynamic lighting"
  );
  const handleTagClick = (selectedTags) => {
    setPrompt(selectedTags);
  };
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
    <main className="m-4 md:m-10 ">
      <div className="flex flex-col gap-4 md:gap-12">
        <div className="text-2xl md:text-4xl font-bold flex flex-col justify-start items-center mt-8">
          Image Generator
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="flex flex-col items-start  md:mr-4 mt-4 md:order-1 order-2">
            <div className="">
              <form
                onSubmit={generateImage}
                className="p-1 flex flex-col h-full gap-5 items-start h-[40rem] md:max-w-[50rem] "
              >
                <Label htmlFor="label">Your Prompt!</Label>
                <Textarea
                  className="text-sm  min-h-[10rem] md:text-md bg-zinc-900/10 dark:bg-zinc-50/10"
                  placeholder="Type your prompt here to generate image."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-fit px-5 py-2 bg-green-600 hover:opacity-70 rounded-full "
                >
                  Generate Image
                </button>
                <div>
                  <Tags text={prompt} availableTags={availableTags} onTagClick={handleTagClick} />
                </div>
              </form>
            </div>
          </div>
          <div className=" flex justify-center md:order-2 order-1">
            {loading ? (
              <Skeleton className="w-[450px] h-[450px] rounded-lg" />
            ) : (
              <div>
                  <img 
                  src={image} 
                  alt={prompt} 
                  className="rounded-lg border-4 border-white"
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
