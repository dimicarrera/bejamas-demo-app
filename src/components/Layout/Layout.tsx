import React from 'react';

const Layout = ({children}: {children: React.ReactNode | React.ReactNode[]}) => {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  )
}

export default Layout;