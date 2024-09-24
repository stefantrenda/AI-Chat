import { Outlet } from "react-router-dom"

const dashboardLayout = () => {
    return (
        <div>
            <div className="menu">MENU</div>
            <div className="contat"><Outlet /></div>
        </div>
    )
}

export default dashboardLayout