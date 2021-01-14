import styled from "@emotion/styled";

export const Banner = styled("div")`
    background-image : url(${(props) => props.bgImage || ""});
    background-color: ${(props) => props.color || "none"};
    background-blend-mode: ${(props) => props.blend || "normal"};


    height : 300px;
    min-height : 250px;
    width : 100%;
  
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    line-height:0.7;
    display:${(props)=> props.display || 'flex'}
`

export const Layout = styled("div")`
    width: 100%;
    .logo {
        height: 1em;
    }

    .description {
        line-height: 1.5;
        font-size: 1.5rem;
    }

    .title, .subTitle,
    .description {
      text-align: center;
    }

    @media (min-width: 600px) {
     div{
        width: 100%;
        }
      }

      @media (min-width: 768px) {
        div{
            width: 85%;
        }
      }

      @media (min-width: 1024px) {
        div{
            width: 75%;
        }
      }

      @media (min-width: 1024px) {
        .wrapper{
            width: 800px; 
        }
      }
`

export const Main = styled("main")`
padding: 5rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Grid = styled("div")`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1024px;
margin-top: 3rem;

    @media (max-width: 600px) {
        .grid {
        width: 100%;
        flex-direction: column;
        }
    }
`

export const Card = styled("div")`
margin: 1rem;
flex-basis: 45%;
padding: 1.5rem;
text-align: left;
color: inherit;
text-decoration: none;
border: 1px solid #eaeaea;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
cursor: pointer;

    :hover,
    :focus,
    :active {
            color: orange;
            border-color: darkorange;
    }

    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

    @media (max-width: 600px) {
          width: 100%;
          padding:2rem;

    }

      @media (max-width: 768px) {
          width: 85%;
          padding:3rem;   

      }
`

export const Title = styled("h1")`
margin: 0;
line-height: 1.15;
font-size: 4rem;
color: darkorange;
`

export const SubTitle = styled("h2")`
font-size: 3rem;
line-height: 1;
background-color: #333;
color:#fff;
padding: 1rem;
`

export const Footer = styled("footer")`
width: 100%;
height: 100px;
border-top: 1px solid #eaeaea;
display: flex;
justify-content: center;
align-items: center;
    img {
        margin: 0 0.5rem;
    }
`