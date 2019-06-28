import React, { Component } from 'react';

interface AiCarouselItemProps {
	background: string;
	color: string;
	to: string;
}

interface AiCarouselItemState {
	background: string;
	color: string;
	to: string;
}

class AiCaourselItem extends Component<AiCarouselItemProps, AiCarouselItemState> {

	state = {
		background: this.props.background,
		color: this.props.color,
		to: this.props.to
	}

	render() {
		return (
			<div>
			</div>
		)
	}
}

export default AiCaourselItem;