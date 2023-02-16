import './App.css';
import {Komponenta1,Komponenta2,Komponenta3} from './utilities' //pazi, ovdje se ne referenciraš na file index.js, nego na folder
//ako on u pretrazi tog foldera ne nađe index.js, kod neće raditi, ako ima, onda zna što treba raditi...možemo primijetiti da se u index.js - u exporta kao default, 
// a u App.js se importa kao named import  -- index.js u utilities nije isti kao onaj u src!!!
import { Route,Routes} from 'react-router-dom'
import {Home,AboutUs,Menu1,Menu2} from './pages'
import{Navbar,Nav,Container} from 'react-bootstrap'







function App() {
   
    return (
        <>

<Navbar bg="dark" expand="xxl">
      <Container>
     
    
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">AboutUs</Nav.Link>
            <Nav.Link href="/menu1">Menu1</Nav.Link>
            <Nav.Link href="/aboutus">Menu2</Nav.Link>
          </Nav>
       
      </Container>
    </Navbar>


      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/aboutus'>AboutUs</Link></li>
        <li><Link to='/menu1'>Menu1</Link></li>
        <li><Link to='/menu2'>Menu2</Link></li>
    </ul>  */}
     
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/menu1" element={<Menu1/>} />
            <Route path="/menu2" element={<Menu2/>}/>
        </Routes>
        <div> <h1>naslov</h1>
        <div>  <Komponenta1/></div>
        <div>  <Komponenta2/></div>
        <div>  <Komponenta3/></div>
       
         </div>
       
         </>
    );
}

export default App;
