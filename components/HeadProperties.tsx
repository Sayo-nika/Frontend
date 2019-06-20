import React, { Component } from 'react';
import Head from 'next/head';

interface IHeadPropertiesProps {
	title: string;
}

/**
	Base component that store head properties such as meta, stylesheets, and viewports.
 */
class HeadProperties extends Component<IHeadPropertiesProps, any> {
	render() {
		const { title } = this.props;
		return (
		<Head>
	    	<title>{ title }</title>
	    	<meta charSet="utf-8" />
	    	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
	    	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:100,300,400,500,700,900&display=swap"/>
	    </Head>
		);
	}
}

export default HeadProperties;