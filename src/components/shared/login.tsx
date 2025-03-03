import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {AiFillGithub} from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { signIn } from 'next-auth/react';

export default function LoginComponent() {
  return (
    <div className={"w-full  h-screen relative"}>

      <div className="absolute inset-0 top-0 left-0 w-full h-full">
        <Image 
          src={"/images/bg-image.jpg"} 
          alt={"Login"}
          fill
          className={"object-cover  "}
          unoptimized
        />
      </div>


      <div className={"relative z-10 flex justify-center flex-col gap-4 items-center rounded-lg bg-slate-800  w-[500px] h-[50vh] left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  px-8 py-2"}>
       
       <Button 
       onClick={() => signIn("github")}
        className={" mt-4 hover:bg-red-700 border-none p-2 flex bg-red-500 rounded-md items-center gap-2 w-full  h-[40px] !text-white hover:cursor-pointer"} >
        <AiFillGithub className={"w-8 h-8"} />
          Sign in with Github
          </Button>
          <Button onClick={()=> signIn("google")}  className={" mt-4 hover:bg-red-700 border-none p-2 flex bg-red-500 rounded-md items-center gap-2 w-full  h-[40px] !text-white hover:cursor-pointer"} >
        <FaGoogle className={"w-8 h-8"} />
          Sign in with Google
          </Button>
      </div>
    </div>
  );
}
