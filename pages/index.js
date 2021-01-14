import Head from 'next/head';
import Link from 'next/link';

import {Banner,Layout,Main, Footer} from '../styles'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DB Super Hall of Fame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="wrapper">
          <Banner display="flex" color="orange">
            <h1>Dragonball Super</h1>
            <h2>Hall of Fame</h2>
          </Banner>
          <Main>

          </Main>

          <Footer>
              Powered by{' '}
              <img src="/vercel.svg" alt="Vercel Logo" className="logo" />{' '} 
              Made by KenChi
          </Footer>
        </div>
       
      </Layout>
      
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            color: #333;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

