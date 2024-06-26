import Link from 'next/link'

const NavBar = () => {
  return (
    <div className='hidden lg:block'>
        <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blacklish">
                
                    <Link className='navbar_link relative' href='#'>HOME</Link>
                    <Link className='navbar_link relative' href='#'>CATEGORIES</Link>
                    <Link className='navbar_link relative' href='#'>MEN</Link>
                    <Link className='navbar_link relative' href='#'>WOMEN</Link>
                    <Link className='navbar_link relative' href='#'>BLOG</Link>
                    <Link className='navbar_link relative' href='#'>HOT OFFERS</Link>
                
            </div>
        </div>
    </div>
  )
}

export default NavBar