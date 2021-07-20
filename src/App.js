import { useState } from 'react';
import './styles/App.css'
import Soundpad from './components/Soundpad';
import Controlpad from './components/Controlpad';


function App() {


/* -----------------------------------
  STATE: SOUND PACKS REFERENCE
----------------------------------- */

  const [allSoundPacks] = useState([
    {
      id:'A',
      name:'Drums'
    },
    {
      id:'B',
      name:'Synth'
    }
  ]);


/* -----------------------------------
  STATE: SOUND PACK A
----------------------------------- */

  const [soundsA] = useState([
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ]);


/* -----------------------------------
  STATE: SOUND PACK B
----------------------------------- */

  const [soundsB] = useState([
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    } 
  ]);


/* -----------------------------------
  STATE: SOUND PACK SELECTED
----------------------------------- */

  const [soundPack, setSoundPack] = useState('A');


/* -----------------------------------
  STATE: CURRENT SOUND PLAY
----------------------------------- */

  const [sound, setSound] = useState(
    {
      soundPack:'A',
      keyCode:0
    }
  )


/* -----------------------------------
  STATE: POWER STATE
----------------------------------- */

  const [powerState, setPowerState] = useState(true);


/* -----------------------------------
  STATE: VOLUME
 ----------------------------------- */

  const [volume, setVolume] = useState(50);






/* -----------------------------------
  CHANGE: SOUND PACK
----------------------------------- */

  const toggleSoundPack = (evt) => {
    console.log(evt.target.value)
    switch(evt.target.value){
      case 'A':
        setSoundPack('A');
        setSound(
          {
            soundPack:'A',
            id:sound.keyCode
          }
        )
        break;
      case 'B':
        setSoundPack('B');
        setSound(
          {
            soundPack:'B',
            id:sound.keyCode
          }
        )
        break;
      default:
        setSoundPack('A');
        break;
    }
  }


/* -----------------------------------
  CHANGE: POWER ON/OFF
----------------------------------- */

  const powerToggle = () => {
    setPowerState(!powerState);
  }


/* -----------------------------------
  CHANGE: VOLUME CONTROL
----------------------------------- */

  const volumeChange = (e) =>{
    setVolume(e.target.value)
  }





/* -----------------------------------
  OUTPUT : PLAY SOUND ON-SCREEN CLICK
----------------------------------- */

  const playSound = (evt) => {

    // Button Press Event
    var a = parseInt(evt.target.value);

    // Grab sound from correct sound pack
    const f = selectPack(soundPack).find(
      ({keyCode}) => keyCode === a
    );
  
    //Set current sound as state
    setSound({
      soundPack:soundPack,
      keyCode:a
    })

    // Create and deploy audio object
    var audio = new Audio(f.url);
    audio.volume = volume/100;
    audio.play();
  }


/* -----------------------------------
  OUTPUT : PLAY SOUND KEYBOARD PRESS
----------------------------------- */

  document.onkeydown = (event) => {
    var name = event.key;
    var code = event.code;

    const f = selectPack(soundPack).find(
      ({keyTrigger}) => keyTrigger == name.toUpperCase()
    );
    
    console.log(f);

    if(f==undefined){
    }else{
      //Set current sound as state
      setSound({
        soundPack:soundPack,
        keyCode:event.keyCode
      })

      // Create and deploy audio object
      var audio = new Audio(f.url);
      audio.volume = volume/100;
      audio.play();
    }
  };


  
/* -----------------------------------
  FUNCTION : SOUND PACK SELECTION
----------------------------------- */
  const selectPack = (packName) => {
    switch (packName)
    {
      case 'A':
        return soundsA;
      case 'B':
        return soundsB;
      default:
        return soundsA;
    }
  }


  





  return (
    <div className="App">
      
      <h1>Drum Machine</h1>

      <div className="drum-pad-container" id="drum-machine">

        <Soundpad pack={selectPack(sound.soundPack)} play={playSound} />


        {/* 
        Controlpad component variables reference:
          
          :OBJECT: CURRENT SOUND PLAYING
            soundPlaying={sound}

          :ARRAY: CURRENT SOUND PACK SELECTED
            packPlaying={selectPack(sound.soundPack)} 
          
          :ARRAY: ALL PACKS REFERENCE FOR PACK NAME
            packReference={allSoundPacks}
          
          :INTEGER: CURRENT VOLUME
            volume={volume}

          :FUNCTION: CHANGE VOLUME
            volumeChange={volumeChange}
          
          :FUNCTION: CHANGE PACK
            packChoose={toggleSoundPack}

        */}
        
        <Controlpad
          soundPlaying={sound}
          packPlaying={selectPack(sound.soundPack)} 
          packReference={allSoundPacks}
          volume={volume}
          volumeChange={volumeChange}
          packChoose={toggleSoundPack}
          />
          
      </div>



        
    </div>
  );
}

export default App;