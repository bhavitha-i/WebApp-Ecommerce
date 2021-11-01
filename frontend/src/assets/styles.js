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

  const Avatar ={
    height: "40px",
    width: "40px",
    m: 2
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
    HomeContainer:HomeContainer,
    Avatar:Avatar
  }

  export default styles
  