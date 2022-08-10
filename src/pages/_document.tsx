import Document, { Head, Html, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    render() {
        return (
            <Html className=''>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700&display=swap'
                        rel='stylesheet'
                    />

                    {/* <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'AW-802059455');
                                gtag('event', 'conversion', {'send_to': 'AW-802059455/2mHCCL26_YMBEL_puf4C'});
                                `,
                        }}
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}

export default MyDocument
