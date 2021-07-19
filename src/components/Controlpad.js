import PackSelect from "./PackSelect";

const Controlpad = ({soundPlaying, packPlaying, packReference, volume, volumeChange, packChoose}) => {

	//SCREEN OUTPUT : SOUND SELECTED
	let soundSelected = packPlaying.find(
		({keyCode}) => keyCode === soundPlaying.keyCode);

	let packName = packReference.find(
		({id}) => id === soundPlaying.soundPack);

	return (
		<div className="control-pad">



			{/* SCREEN */}
			<div className="screen">
				<div className="screen-sound">
					{soundSelected===undefined ? '' : soundSelected.id}
				</div>
				<div className="screen-pack">
					{packName.name}
				</div>
				<div className="screen-volume">
					Volume: {volume}
				</div>
			</div>



			{/* VOLUME CONTROL */}
			<div className="volumeControl">
				<input type="range" className="volumeSlider" onChange={volumeChange} />
			</div>



			{/* BUTTON : MAP FOR ALL PACKS IN PACK REFERENCE */}
			{packReference.map((packObj) => <PackSelect packChoose={packChoose} packRef={packObj} />)}
			

		</div>
	)
}

export default Controlpad
