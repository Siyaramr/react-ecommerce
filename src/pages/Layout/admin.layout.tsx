import { Outlet } from "react-router-dom"
import AdminSidebar from "../../components/sidebar/admin-sidebar.components"

const AdminLayout = () => {
    return (<>
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
        



            <AdminSidebar />

            <main className="p-4 md:ml-64 h-auto pt-20">
                <Outlet />
            </main>
        </div>
    </>)
}

export default AdminLayout

