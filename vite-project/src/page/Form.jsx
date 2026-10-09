// import {  useState } from 'react';

// export default function Form(){
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
      
// function handLeSubmit(e){
//    e.preventDefault();  
//    console.log("Form submitted");

//    if(email.trim()=== ""){
//     alert("Please enter your email");
//     return;
//    }
//    if(password.length < 6){
//     alert("password must be at least 6 characters");
//     return;   
// }
// console.log("Form submitted successfully");}
//     return(
//         <div>
//         <form onSubmit={handLeSubmit}>

       
//         <input type="text"
//         value={name}
//         placeholder="enter your name"
//          onChange={(e) => setName(e.target.value)} /> 

//          <input type="email"
//         value={email}
//         placeholder="enter your email"
//          onChange={(e) => setEmail(e.target.value)} /> 

//          <input type="password"
//         value={password}
//         placeholder="enter your password"
//          onChange={(e) => setPassword(e.target.value)} /> 
//          <button type="submit">Register</button>
//           </form>
//         <h1>Name: {name} </h1>
//         <h1>{email} </h1>
//         <h1>{password} </h1>
//         </div>
//     )
// }
