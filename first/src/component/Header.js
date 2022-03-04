import React,{Component,Fragment} from 'react';
import './Header.css'
//WAY TO WRITE A CLASS COMPONENT 


class Header extends Component{
    render() {
        const myStyle={
            
        }
 return(
        <Fragment>
            <header>  
                <div className="logo"> React </div> 
                  <center>
                    <input/>
                       <div className="logo">user input here </div>
                  </center>                
            </header>
             <hr/>
        </Fragment>
    )
}
}


// WAY TO WRITE A FUNCTIONAL COMPONENT 
// const Header = () => {
//   return(
//         <div>
//           <center>
//               <h1>  React  </h1>
//           </center>
//               <hr/>
//         </div>


//   ) 

// }


export default Header
