import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/home.pages";
import BestSellerPage from "../pages/best-seller/best-seller.pages";
import NotFoundPage from "../pages/errors/not-found.pages";
import CategoryDetail from "../pages/category/category-detail";
import HomePageLayout from "../pages/Layout/home-layouts";
import AdminLayout from "../pages/Layout/admin.layout";
import AdminDashBoardPage from "../pages/dashboard/admin-dashboard.page";
import { LoginPage,RegisterPage } from "../pages/auth";


const RoutingConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePageLayout/>}>
                        <Route index element={<HomePage/>}></Route>
                        
                        <Route path="best-seller" element={<BestSellerPage/>}></Route>
                        <Route path="category-detail/:slug" element={<CategoryDetail/>}></Route>
                        <Route path="login" element={<LoginPage/>}></Route>
                        <Route path="register" element={<RegisterPage/>}></Route> 
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                    <Route path="/admin" element={<AdminLayout/>}>
                        <Route index element={<AdminDashBoardPage/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RoutingConfig;
