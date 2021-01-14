import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'

import Card from '../components/cards/Card';
import { Banner, Layout, Main,Grid, CardStyle, Footer } from '../styles'
const bgImage = "/image/dbbg.jpg";

const characters = [
  {
    "id":"1",
    "name": "Kakarroto (Goku)",
    "race": "Saiyan",
    "gender": "Male",
    "currentPlanet":"Earth",
    "status":"Alive",
    "image":"/image/goku.jpeg",
    "class": "Mastered Ultra Instinct",
    "group":"Z Fighters"
  },
  {
    "id":"2",
    "name": "Vegeta",
    "race": "Saiyan",
    "gender": "Male",
    "currentPlanet":"Earth",
    "status":"Alive",
    "image":"/image/vegeta.jpeg",
    "class": "SS Evolution",
    "group":"Ex. Frieza Force"
  },
  {
    "id":"3",
    "name": "Gohan",
    "race": "Half-Saiyan",
    "gender": "Male",
    "currentPlanet":"Earth",
    "status":"Alive",
    "image":"/image/gohan.jpeg",
    "class": "Mystic Gohan",
    "group":"Z Fighters"
  },
  {
    "id":"4",
    "name": "Frieza",
    "race": "Unknown",
    "gender": "Male",
    "currentPlanet":"In Space",
    "status":"Alive",
    "image":"/image/frieza.jpeg",
    "level": "Golden Frieza",
    "group":"Leader of Frieza Force"
  }
]


export default function Home() {
  return (
    <div>
      <Head>
        <title>DB Super Hall of Fame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="wrapper">
          <Banner display="flex" color="#000217" bgImage={bgImage} mode="color-dodge">
            <h1>Dragonball Super</h1>
          </Banner>
          <Main>
            <Grid>
             {
               characters.map(character => <CardStyle>
                <Card 
                  key={character.id} 
                  name={character.name}
                  gender={character.gender}
                  race={character.race}
                  status={character.status}
                  level={character.level}
                  currentPlanet={character.currentPlanet}
                  group={character.group}
                  image={character.image}
                />
              </CardStyle>)
             }
            </Grid>
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
            background-color:#000217;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

