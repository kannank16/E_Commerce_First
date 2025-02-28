import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import UserProfilePage from "./User/UserProfilePage";
import UserOrdersPage from "./User/UserOrdersPage";
import UserOrderDetailsPage from "./User/UserOrderDetailsPage";
import UserCartDetailsPage from "./User/UserCartDetailsPage";
import ProtectedRouteComponent from "./components/ProtectedRouteComponent";

import AdminUserPage from "./admin/AdminUserPage";
import AdminEditUserPage from "./admin/AdminEditUserPage";
import AdminOrdersPage from "./admin/AdminOrdersPage";
import AdminOrdersDetailsPage from "./admin/AdminOrdersDetailPage";
import AdminProductPage from "./admin/AdminProductPage";
import AdminCreateProductPage from "./admin/AdminCreateProductPage";
import AdminEditProductPage from "./admin/AdminEditProductPage";
import AdminChatPage from "./admin/AdminChatPage";
import AdminAnalyticsPage from "./admin/AdminAnalyticsPage";

import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route element={<RoutesWithUserChatComponent />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/product-details/:id"
              element={<ProductDetailsPage />}
            />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* user protected Routes */}

          <Route element={<ProtectedRouteComponent admin={false} />}>
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/user/my-order" element={<UserOrdersPage />} />
            <Route
              path="/user/order-details"
              element={<UserOrderDetailsPage />}
            />
            <Route
              path="/user/cart-details"
              element={<UserCartDetailsPage />}
            />
          </Route>

          {/* admin protected Routes */}

          <Route element={<ProtectedRouteComponent admin={true} />}>
            <Route path="/admin/user" element={<AdminUserPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route
              path="/admin/order-details"
              element={<AdminOrdersDetailsPage />}
            />
            <Route path="/admin/product" element={<AdminProductPage />} />
            <Route
              path="/admin/create-product"
              element={<AdminCreateProductPage />}
            />
            <Route
              path="/admin/edit-product"
              element={<AdminEditProductPage />}
            />
            <Route path="/admin/chat" element={<AdminChatPage />} />
            <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          </Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
