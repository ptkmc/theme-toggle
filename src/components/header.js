import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Switch from "react-switch"
import sunIcon from "../images/sun-icon.svg"
import moonIcon from "../images/moon-icon.svg"


const Header = ({ siteTitle }) => {
  const [toggled, setToggled] = useState(null)

  useEffect(() => {
    setToggled(window.__theme)
    window.__onThemeChange = () => {
      setToggled(window.__theme)
    };
  }, [])

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>

        </h1>
        {toggled !== null ? (
          <div style={{ marginTop: '1em', marginBottom: '1em', height: '1em' }}>
            <Switch
              onChange={
                e => (
                  window.__setPreferredTheme(
                    e ? 'dark' : 'light'
                  )
                )
              }
              checked={toggled === "dark"}
              onColor="#222"
              offColor="#333"
              checkedIcon={<img src={moonIcon} alt="moon icon" />}
              uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
              boxShadow="0 0 2px 3px #B38CD9"
              activeBoxShadow="0 0 2px 3px #dfb3e6"
            />
          </div>
        ) : (<div style={{ marginTop: '1em', marginBottom: '1em', height: '1em' }} />
          )}
      </div>
    </header >
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
