import React from "react";
import "./App.css";
import { useState, useEffect } from 'react';

import Audio from "./Component/video/sea-waves-sound-effect.mp3";

function App ()  {

  const initialMinute = 2
  const initialSeconds = 0
  const [ minutes, setMinutes ] = useState(initialMinute);
  const [seconds, setSeconds ] =  useState(initialSeconds);

  useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
      <div className="App">
        <div>
          <img src="/image/logo.png" alt="LOGO" />
        </div>
        <audio controls autoPlay loop >
          <source className="audio" src={Audio} type="audio/ogg" />
        </audio>
        <div className="TITLE">
          {" "}
          <img src="/image/title.png" alt="title" />
        </div>

        <div className="logo">
          <img src="/image/just-relax.png" alt="Relax" />
        </div>
        
        <div className="Minuteur">
        { minutes === 0 && seconds === 0
            ? null
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
      </div>
    );
  }
export default App
