import Container from '../../components/Container'
import Head from 'next/head'

export default function Tokens() {
  return (
    <Container id="tokens-page" className="py-4 md:py-8 lg:py-12" maxWidth="full">
      <Head>
        <title>Tokens | BabyOHM</title>
        <meta key="description" name="description" content="BabyOlympus tokens." />
      </Head>
    </Container>
  )
}
