import React from 'react';
import './MemoryCard.css';
class MemoryCard extends React.Component {
	constructor(props) {
		super(props);
			this.state = { isFlipped: false};
	}

	 clickHandler = () => {
		this.setState({isFlipped: !this.state.isFlipped});
	}
	render() {
		const memoryCardInnerClass = this.props.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";
		return (
			<div className='MemoryCard' onClick={this.props.pickCard}>
			<div className={memoryCardInnerClass}>
			<div className='MemoryCardBack'>
				<img src='dcLogo.jpeg'></img>
			</div>
			<div className='MemoryCardFront'>
				{this.props.symbol}
			</div>
			</div>
			</div>
		);
	}
}

export default MemoryCard;