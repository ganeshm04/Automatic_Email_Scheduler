import React from "react";
import FlowChart from "./components/FlowChart";
import "./App.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <div className="ml-20 text-[#153448] mt-5 ">
      <div className="w-full md:w-[1000px] h-[500px] mx-auto">
        <div className="flex items-center justify-between gap-4 mt-4">
          <h1 className="text-xl md:text-3xl ml-10 text-center font-bold">
            Automated Email Sequencer
          </h1>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
        
        <SignedOut>
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <h2 className="text-2xl font-bold mb-4">Please Sign In</h2>
            <p className="mb-4">You need to be signed in to use the Email Sequencer</p>
            <SignInButton mode="modal" />
          </div>
        </SignedOut>
        
        <SignedIn>
          <FlowChart />
        </SignedIn>
      </div>
    </div>
  );
}

export default App;
