import React from "react";
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();

        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );

        const styleTags = sheet.getStyleElement();

        return {...page, styleTags};
    }

    render() {
        return (
            <html>
            <Head>
                <title>My page</title>
                {this.props.styleTags}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Jost&display=swap"
                />
            </Head>
            <body style={{margin:0}}>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}