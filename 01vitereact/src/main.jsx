import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp(){
    return(
        <div>
            <h1>Billa Badmos</h1>
        </div>
    )
}

// const ReactElement={
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target:'_blank'
//     },
//     Children: 'click me to visit google' 
// }

// the above object doesnt work bcoz of the syntax is not correct this is custom made react element

const anotherUser="Bulla"

const another_element=(
    <a href="https://google.com" target="_blank">Visit Google</a>
)


const ReactElement=React.createElement(
    'a',
    {href:'https://google.com',target:"_blank"},
    'click me to visit google', 
    anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    ReactElement
  
  
);
