import bgimage from "./images/bg7.jpg";




const Header = {
    padding: "10px 20px",
    textAlign: "left",
    height: "60px",
  }

  const Toolbar = {
    minHeight:"45px",
  }

  const HeaderIcons = {
    padding: "10px 20px",
    textAlign: "center",
    ml: 3,
    fontSize: 16,
    textTransform: "none",
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

const ProductPrice = {
  // fontSize: '22px',
  fontFamily: "Trirong",
  fontWeight: "Bold",
}
  
const CardButton = {
    flex: 1,
    justifyContent: 'center'
}

  const styles = {
    Header: Header,
    ErrorMessage: ErrorMessage,
    HeaderIcons: HeaderIcons,
    HomeBackground:HomeBackground,
    HomeContainer:HomeContainer,
    Avatar:Avatar,
    ProductPrice:ProductPrice,
    CardButton:CardButton,
    Toolbar:Toolbar
  }

  export default styles
  