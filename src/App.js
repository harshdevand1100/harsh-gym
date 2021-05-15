// import './styles/home.css'
// import React from 'react'
// import Home from './components/home'
// import Text from "./components/Text.jsx";
// import Gallery from "./components/gallery";
// import About from "./components/about"
// import Calculator from "./components/fitnessCalculator";
// import {Link,BrowserRouter as Router} from 'react-router-dom'
// import {Switch,Route} from 'react-router'
// // import TextTwo from "./TextTwo.jsx";
// // const myUrl = new URL('/home/shubham/learning/harsh-gym/src/img/bg.jpg')
// const App = () =>{
//     return(
//         <Router>
//             <body style={{backgroundImage: "url(" + "../img/bg.jpg" + ")",height:'100vh'}}>
//
//             <header className="header">
//                 <div className="left">
//                     <img src={'../img/h.jpg'}/>
//                     <div>HARSH FITNESS</div>
//                 </div>
//                 <div class="mid">
//                     <ul class="navbar">
//                         <>
//                             <li><Link to="/"  className="active">Home</Link></li>
//                             <li><Link to="/gallery" >Gallery</Link></li>
//                             <li><Link to="/calculator"  >Fitness Calculator</Link></li>
//                             <li><Link to="/about"  >About us</Link></li>
//                             <Switch>
//                                 <Route exact path="/"><Home /></Route>
//                                 <Route exact path="/gallery"><Gallery /></Route>
//                                 <Route exact path="/calculator"><Calculator /></Route>
//                                 <Route exact path="/about"><About /></Route>
//                             </Switch>
//                         </>
//
//
//
//                     </ul>
//
//                 </div>
//                 <div className="right">
//                     <button className="btn">Sign Up </button>
//                     <button className="btn">Email Us</button>
//                 </div>
//             </header>
//             <Text />
//             </body>
//         </Router>
//     )
// }
//
// export default App
//
// // const style = {
// //
// //
// // .left {
// //     display: inline;
// //     /* border: 2px solid red; */
// //     color: white;
// //     position: absolute;
// //     left: 38px;
// //     top: 18px
// // }
// //
// // .left img {
// //     width: 55px;
// // }
// //
// // .left div {
// //     text-align: center;
// //     font-family: 'Times New Roman', Times, serif;
// //     line-height: 1px;
// //     font-family: 'Baloo Tamma 2', cursive;
// //
// // }
// //
// // .mid {
// //     border: 5px solid green;
// //     border-radius: 20px;
// //     color: white;
// //     display: block;
// //     width: 36%;
// //     margin: 18px auto;
// // }
// //
// // .right {
// //     /* border: 2px solid yellow; */
// //     color: white;
// //     display: inline;
// //     position: absolute;
// //     right: 38px;
// //     top: 18px;
// // }
// //
// // .navbar {
// //     display: inline-block;
// // }
// //
// // .navbar li {
// //     color: white;
// //     display: inline-block;
// //     font-size: 20px;
// // }
// //
// // .navbar li a {
// //     color: white;
// //     text-decoration: none;
// //     padding: 56px 12px;
// //
// // }
// //
// // .navbar li a:hover,
// // .navbar li a.active {
// //     color: rgb(120, 115, 115);
// //     text-decoration: undreline;
// //
// //
// // }
// //
// // .btn {
// //     margin: 0px 8px;
// //     background-color: black;
// //     color: white;
// //     padding: 4px 13px;
// //     border-radius: 10px;
// //     font-size: 18px;
// //     cursor: pointer;
// //     font-family: 'Baloo Tamma 2', cursive;
// // }
// //
// // .btn:hover {
// //     background-color: rgb(76, 74, 74);
// // }
// //
// // .container {
// //
// //     margin: 86px 45px;
// //     padding: 56;
// //     width: 32%;
// //     border-radius: 22px;
// //     text-emphasis-color: white;
// // }
// //
// // .form-group input {
// //     font-family: 'Baloo Tamma 2', cursive;
// //     text-align: center;
// //     display: block;
// //     border: 2px solid rgb(9, 71, 19);
// //     width: 378px;
// //     padding: 1px;
// //     margin: 11px auto;
// //     border-radius: 8px;
// //     font-size: 17px;
// //
// // }
// //
// // .container h1 {
// //     text-align: center;
// // }
// //
// // .container button {
// //     display: block;
// //     margin: auto;
// //     width: 44%;
// //     display: block;
// //     margin: auto;
// //     width: 44%;
// //     font-family: 'Baloo Tamma 2', cursive;
// //     text-align: center;
// //     display: block;
// //     border: 2px solid rgb(10, 1, 1);
// //     width: 378px;
// //     padding: 1px;
// //     margin: 11px auto;
// //     border-radius: 8px;
// //     font-size: 17px;
// //     background-color: rgb(223, 149, 149);
// //
// // }
// //
// //
// //
// //
// //
// // }

import React from 'react'
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from './components/Home'
import About from "./components/About"
import Contact from "./components/ContactUs";
import Gallery from "./components/Gallery";
import Calculator from "./components/FitnessCalculator";
// import Equipment from "./components/Equipment"
const App = () =>{
    return(

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/calculator" exact component={Calculator} />

                {/*<Route path="/equipments" exact component={Equipment} />*/}
                {/*<Route path="/equipments/:id" exact component={Equipment} />*/}
                <Route path='*' render={() =><div style={{color:'white'}}>404 not found</div> } />

            </Switch>
        </BrowserRouter>
    )
}

export default App