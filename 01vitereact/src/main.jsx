import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank',
//   },
//   children: 'Click me to go to Google',

// }


const AnotherReactElement = (
   <a href='https://www.google.com' target='_blank'>Click me to go to Google</a>
)

const anotherUser = 'motu'

const ReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target:  '_blank',
  },
  'visit Google' ,
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
   ReactElement
 
)
