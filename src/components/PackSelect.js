const PackSelect = ({packChoose, packRef}) => {
	return (
		<button className="packBtn" value={packRef.id} onClick={packChoose}>

			{packRef.name}
		</button>
	)
}

export default PackSelect
