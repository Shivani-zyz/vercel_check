import { Link } from "react-router-dom"

function Nav(){

   return(
    <>
    <div className="a">
        
        <ul>
            <li><img style={{position:"relative",right:"5px"}} src="https://www.pinclipart.com/picdir/big/532-5328945_menu-clip-art.png" alt="" />Menu</li>
            <li><img style={{position:"relative",right:"5px"}} src="https://www.pngall.com/wp-content/uploads/13/Search-Button-White-PNG.png" alt="" />Search</li>
        </ul>
        <h1><Link style={{color:"white",textDecoration:"none"}} to="/">Libas</Link></h1>
        <ul >
        <Link to='/contact' style={{textDecoration:"none"}}><li>CONTACT US</li></Link>
        
           <li>MY ACCOUNT</li>
        <Link to="/heart"> <li><img style={{position:"relative",top:"-2px"}} src="https://static-ussite.tineco.com/afd6719f-7bff-405a-a215-6dfd93792d9c.png" alt="" /></li></Link>
        <Link to="/cart"><li><img style={{position:"relative",top:"-2px"}} src="https://icon-library.com/images/white-shopping-cart-icon-png/white-shopping-cart-icon-png-19.jpg" alt="" /></li></Link>   
        </ul>
    </div>

    
    


    
    
    </>
   )

}
export default Nav