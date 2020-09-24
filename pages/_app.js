import React from 'react'
import Head from 'next/head'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>My new app</title>
            </Head>
            <Component {...pageProps} />
            <style jsx global>
                {`
                    body{
                        font-family: 'Jost', sans-serif;
                    }
                `
                }
            </style>
        </>
    )
}

export default MyApp