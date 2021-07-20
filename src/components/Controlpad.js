import PackSelect from "./PackSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMusic, faVolumeDown, faVolumeMute, faVolumeOff, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Controlpad = ({soundPlaying, packPlaying, packReference, volume, volumeChange, packChoose}) => {



	//SCREEN OUTPUT : SOUND SELECTED
	let soundSelected = packPlaying.find(
		({keyCode}) => keyCode === soundPlaying.keyCode);

	let packName = packReference.find(
		({id}) => id === soundPlaying.soundPack);



	//function switch
	const volIcon = () => {
		if(volume===0){
			return <FontAwesomeIcon icon={faVolumeMute} />;
		} else if(volume>0 && volume<20){
			return <FontAwesomeIcon icon={faVolumeOff} />;
		} else if(volume>19 && volume<60){
			return <FontAwesomeIcon icon={faVolumeDown} />;
		} else {
			return <FontAwesomeIcon icon={faVolumeUp} />;		
		}
	}



	return (
		<div className="control-pad">



			{/* SCREEN */}
			<div className="screen" id="display">
				<div className="screen-sound">
					{soundSelected===undefined ? <FontAwesomeIcon icon={faMusic} /> : soundSelected.id}
				</div>
			<div className="screen-lower-wrapper">
				<div className="screen-pack">
					{packName.name}
				</div>
				<div className="screen-volume">
					{volIcon()}<br/>{volume}%
				</div>
			</div>
			</div>



			{/* VOLUME CONTROL */}
			<div className="volume-control">
				<input type="range" value={volume} className="volume-slider" onChange={volumeChange} />
			</div>



			{/* BUTTON : MAP FOR ALL PACKS IN PACK REFERENCE */}
			<div className="packBtn-wrapper">
				{packReference.map((packObj) => <PackSelect packChoose={packChoose} packRef={packObj} />)}
			</div>

		</div>
	)
}

export default Controlpad
