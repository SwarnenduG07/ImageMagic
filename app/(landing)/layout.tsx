
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-screen bg-gradient-to-tr from-purple-800 from-10% via-purple-900 to-zinc-800 to-90%'>
         <div>
            {children}
          </div>
    </div>
  )
}


export default Layout