//create own react library with help of javascript
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)



const anotherUser = "chai aur react"

const reactElement = React.createElement( //inbuild react uses to create element
    'a',//first name of tag
    {href: 'https://google.com',target: '_blank' },//attirubute if not then leave blank
    'click me to visit google',//inner text
    anotherElement//{ } evaluate expression 
)// this is correct format of react 

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
    // <APP />//this will also work
    APP()//this will also work becasue it also exporting function with return html
  
)
//github react library source 
