const SoundBtn = ({btnID, play}) => {
	return (
		<button id={btnID.keyTrigger} value={btnID.keyCode} onClick={play}>{btnID.keyTrigger}</button>
	)
}

export default SoundBtn