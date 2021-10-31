import bgimage from "./images/bg7.jpg";




const Header = {
    padding: "10px 20px",
    textAlign: "left",

  }

  const HeaderIcons = {
    padding: "10px 20px",
    textAlign: "center",
    ml: 3,
    fontSize: 16,
  }
  
  const ErrorMessage = {
    color: "white",
    fontSize: "13px"
  }


  const HomeBackground = {
    backgroundImage: `url(${bgimage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'Red',

}

const HomeContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}


  
  const styles = {
    Header: Header,
    ErrorMessage: ErrorMessage,
    HeaderIcons: HeaderIcons,
    HomeBackground:HomeBackground,
    HomeContainer:HomeContainer
  }

  export default styles
  