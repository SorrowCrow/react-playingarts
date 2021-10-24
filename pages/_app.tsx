import React from "react";
import Head from "next/head";

import "../public/css/Index.module.css";
import "../public/scss/index.scss";
import "../public/scss/main.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>React App</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Web site created using create-react-app" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
