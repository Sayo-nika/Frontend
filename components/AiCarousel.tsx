import React, { Component } from 'react';

interface AiCarouselProps {
	tile: boolean;
	color: string;
	numberOfSlides: number;
}

interface AiCarouselState {
	shouldTile: boolean;
	slideColor: string;
	slideCount: number;
	currentPoisition: number;
}

class AiCarousel extends Component<AiCarouselProps, AiCarouselState> {

	constructor(props: AiCarouselProps) {
		super(props);

		this.state = {
			shouldTile: this.props.tile,
			slideColor: this.props.color,
			slideCount: this.props.numberOfSlides,
			currentPoisition: 0
		}
	}

	render() {
		return (
			<div>
			</div>
		)
	}
}

export default AiCarousel;