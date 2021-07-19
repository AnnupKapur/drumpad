const PackSelect = ({packChoose, packRef}) => {
	return (
		<button className="packBtn" value={packRef.id} onClick={packChoose}></button>
	)
}

export default PackSelect
