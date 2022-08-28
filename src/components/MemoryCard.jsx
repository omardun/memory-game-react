import React from 'react';
import './MemoryCard.css';
class MemoryCard extends React.Component {
	constructor() {
		super();
			this.state = { isFlipped: false};
	}

	 clickHandler = () => {
		this.setState({isFlipped: !this.state.isFlipped});
	}
	render() {
		const memoryCardInnerClass = this.state.isFlipped ? "MemoryCardInner flipped" : "MemoryCardInner";
		return (
			<div className='MemoryCard' onClick={this.clickHandler.bind(this)}>
			<div className={memoryCardInnerClass}>
			<div className='MemoryCardBack'>
				<img src='dcLogo.jpeg'></img>
			</div>
			<div className='MemoryCardFront'>
				∆
			</div>
			</div>
			</div>
		);
	}
}

export default MemoryCard;