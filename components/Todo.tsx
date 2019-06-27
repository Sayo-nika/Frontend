import React, { FC } from 'react';

interface TodoProps {
	reason?: string;
}

const Todo: FC<TodoProps> = (props) => {
	return (
		<div title={ props.reason }>
			<img src="https://thumbs.gfycat.com/QuaintTenderAmericanindianhorse-small.gif" alt="dancing arthur gif" height="75"/>
		</div>
	)
}

export default Todo;