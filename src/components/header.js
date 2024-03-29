import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useDarkMode from 'use-dark-mode'
import Switch from "react-switch"
import sunIcon from "../images/sun-icon.svg"
import moonIcon from "../images/moon-icon.svg"

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false)

  return (
    <Switch
      onChange={darkMode.toggle}
      checked={darkMode.value}
      onColor="#222"
      offColor="#333"
      checkedIcon={<img src={moonIcon} alt="moon icon" />}
      uncheckedIcon={<img src={sunIcon} alt="sun icon" />}
      boxShadow="0 0 2px 3px #B38CD9"
      activeBoxShadow="0 0 2px 3px #dfb3e6"
    />
  )
}

const Header = ({ siteTitle }) => (
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
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
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
      <DarkModeToggle />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
