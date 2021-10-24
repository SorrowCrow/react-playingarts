import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        if (ctx !== undefined) {
            const initialProps = await Document.getInitialProps(ctx);
            return { ...initialProps };
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* <link href="https://fonts.googleapis.com" />
                    <link href="https://fonts.gstatic.com" />
                    <link
                        rel="stylesheet"
                        id="aldrich-font"
                        href="https://fonts.googleapis.com/css2?family=Aldrich&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        id="work-font"
                        href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap"
                        rel="stylesheet"
                        id="aldrich500-font"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@600&display=swap"
                        rel="stylesheet"
                        id="work500-font"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
