import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({children, color, kind, leftIcon, ...props}) => (
  <button className={`btn ${kind} ${color}`} {...props}>
    {leftIcon && <span className="icon">{leftIcon}</span>}
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  leftIcon: PropTypes.node,
}

Button.defaultProps = {
  color: 'default',
  kind: 'primary',
  leftIcon: null,
}

export default Button
