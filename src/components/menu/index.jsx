import { forwardRef } from 'react'
import './menu.css'

const Menu = forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={`menu ${className}`}>
      <ul>{children}</ul>
    </div>
  )
})

export default Menu
