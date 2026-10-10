import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          defer
          src="https://omnivisor.vercel.app/script.js"
          data-site="6ac9cbf80009d91977082ff7"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
