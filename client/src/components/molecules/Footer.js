import React from "react";

export default function Footer() {
  return (
      <div >
        <div className="invisible lg:visible">
            <img alt="failed to load" src="https://cdn.discordapp.com/attachments/627267590862929961/794149886026055680/wave.png" width="100%" height="20%"></img>
        </div>
        <div className="absolute bottom-10 ">
            <div className="flex flex-row w-screen justify-center">
                <h1 className="py-1 px-4">Website by nzbasic</h1>
                <a className="flex flex-row" href="https://github.com/nzbasic/osutracker" target="_blank" rel="noreferrer">
                    <img alt="GitHub" src="https://cdn.discordapp.com/attachments/627267590862929961/794140189416357888/GitHub-Mark-32px.png"/>
                    <h1 className="py-1 px-1">View Source</h1>
                </a>
            </div>
        </div>
      </div>
    
  );
}