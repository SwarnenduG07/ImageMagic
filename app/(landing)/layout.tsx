
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen bg-white'>
         <div>
            {children}
          </div>
    </div>
  )
}


export default Layout