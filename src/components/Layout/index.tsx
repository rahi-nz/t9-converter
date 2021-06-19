import Head from 'next/head';
import { Container, Content } from './style';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>T9 converter</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="shortcut icon" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon/favicon-96x96.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Content>{children}</Content>
      </Container>
    </>
  );
};
export default Layout;
