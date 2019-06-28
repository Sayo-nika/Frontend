import React, { Component } from 'react';

interface CreateReviewProps {
	id: string
}

interface CreateReviewState {
	rating: number;
	title: string;
	body: string;
	loading: boolean;
	formValid: boolean;
}

class CreateReview extends Component<CreateReviewProps, CreateReviewState> {

	state = {
		rating: 0,
		title: "",
		body: "",
		loading: false,
		formValid: false
	}

	submitDisabled(): boolean {
		return !(
			this.state.rating &&
			this.state.title &&
			this.state.body &&
			this.state.formValid
		)
	}

	// TODO: Implement function
	async submit() {

	}

	// TODO: Implement function
	close() {

	}

	render() {
		return (
			<div>
			</div>
		)
	}

}

export default CreateReview;