import { Link, Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <header>
                <Link to="/">
                    <img src='/logo.png' alt='' />
                    <span>STEPH AI</span>
                </Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout