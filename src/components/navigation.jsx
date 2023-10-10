export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll logo_anch' href='#page-top'>
          {/* <span style={{color:'#531c4c'}}>NAKAD</span> */}
          <img src="https://app-test.nakad.co/static/media/NAKAD_FINAL%20(1).3017dcc623651a172760.png" alt=""  className="logo_width"/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right vertical_center'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
              Features
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Pricing
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
              Client
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <a href='https://magic.nakad.co/' className='page-scroll try_for_free' target="_blank">
              Try For Free
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
