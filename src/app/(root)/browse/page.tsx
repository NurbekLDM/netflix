'use client'
import LoginComponent from "@/components/shared/login";
// import { useGlobalContext } from "@/context";
import React from "react";
import { useSession } from "next-auth/react";
export default function BrowsePage() {
    // const {account} = useGlobalContext();
    const {data: session, status} = useSession();
    console.log(session);
    
    if (status === "loading") {
        return (
          <div className="flex justify-center mt-8 sm:mt-48 items-center min-h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        );
      }

    if (!session){
        return <LoginComponent />;
    }
    return (
        <div>
        <h1>Browse Page</h1>
        </div>
    );
}