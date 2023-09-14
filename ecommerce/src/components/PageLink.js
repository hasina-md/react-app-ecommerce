import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function PageLink({children, ...props}) {
  return (
    <Link className="border-solid border-2 border-indigo-600 rounded-lg shadow-lg p-1 hover:text-emerald-500" {...props}>
        {children}
    </Link>
  )
}

export default PageLink