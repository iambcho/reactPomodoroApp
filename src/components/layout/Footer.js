import React from 'react'

export default function Footer() {
    return (

        <footer style={footerStyle}>
             <p> Brittany Cho, 2019 </p>
        </footer>


    )
}

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    bottom: '0',
    position: 'fixed',
    width: '100%'
    
  }
