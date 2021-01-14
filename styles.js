import styled from "@emotion/styled";

export const Banner = styled("div")`
    background-image : url(${(props) => props.bgImage || ""});
    background-color: ${(props) => props.color || "none"};
    background-blend-mode: ${(props) => props.mode || "normal"};
    background-repeat: no-repeat;
    background-position: center center;
    background-size:cover;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%);
    height : 300px;
    min-height : 250px;
    width : 100%;
    margin-bottom:2rem;
    display:${(props) => props.display || 'flex'};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #fff;
    font-size: 1.5rem;
    text-align:center;
    font-weight: bold;
    line-height:1;
    padding: 1rem;
    transition: background-color 5s ease;
  

    @media (min-width: 600px) {
        font-size:1.7rem;
   }
   
   @media (min-width: 768px) {
    font-size:2rem;
   }
   
   @media (min-width: 1024px) {
    font-size:3rem;
   }
`

export const Layout = styled("div")`
    width: 100%;
    .logo {
        height: 1em;
    }

    .wrapper{
        width: 100%;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
    }
`

export const Main = styled("main")`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem 1rem;
margin: 0 auto 2rem auto;
width:100%;

@media (min-width: 600px) {
     padding:2rem;
}

@media (min-width: 768px) {
 width: 85%;
}

@media (min-width: 1024px) {
  width: 1024px;
}
`
export const Grid = styled("div")`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
max-width: 1024px;
margin-top: 2rem;

    @media (max-width: 600px) {
        .grid {
        width: 100%;
        flex-direction: column;
        }
    }
`

export const CardStyle = styled("div")`
width:100%;
min-height: 200px;
margin: 1rem;
background-color:#101229;
padding: 1.5rem;
text-align: left;
color: inherit;
text-decoration: none;
border: none;
border-radius: 10px;
transition: color 0.15s ease, border-color 0.15s ease;
cursor: pointer;

    :hover,
    :focus ,
    :active {
            color: #111;
            background-color: #099e7b;
    }
    h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        color:#777;
      }

    :hover h3{
        color: #222;
    }
      

    p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (min-width: 768px) {
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
bottom:0;
color:#555;
border-top: 1px solid #464b7d;
display: flex;
justify-content: center;
align-items: center;
    img {
        margin: 0 0.5rem;
        filter: invert(100)
    }
`