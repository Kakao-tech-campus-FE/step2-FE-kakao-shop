const Badge = ({ children, style }) => {
	const styleObj = {
		red: {
			backgroundColor: 'red',
			color: 'white'
		},
		green: {
			backgroundColor: 'green',
			color: 'white'
		},
	}

	return <div style={styleObj[style]}>{children}</div>;
}