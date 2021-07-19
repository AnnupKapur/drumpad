import SoundBtn from "./SoundBtn"

const Soundpad = ({pack, play}) => {
	return (
		<div className="sound-pad">
			{pack.map((btnObj) => <SoundBtn btnID={btnObj} play={play} />)}
		</div>
	)
}

export default Soundpad
