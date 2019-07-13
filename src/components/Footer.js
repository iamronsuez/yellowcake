import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Siguenos en{' '}
      <a href="https://instagram.com/just4lunch/">@just4lunch</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://lloviznalabs.co/">llovizna labs</a>.
        </span>
      </div>
    </footer>
  </div>
)
