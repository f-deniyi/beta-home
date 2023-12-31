import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./modules/authentication/view/LoginPage";
import Dashboard from "./modules/dashboard/view/Dashboard";
import AdminDashboard from "./modules/admin/AdminDashboard";
import AdminLoginPage from "./modules/authentication/view/AdminLoginPage";
import AdminLoginVerification from "./modules/authentication/view/AdminLoginVerification";
import ForgotPasswordPage from "./modules/authentication/view/ForgotPasswordPage";
import ResetPasswordPage from "./modules/authentication/view/ResetPasswordPage";
import AccountVerification from "./modules/authentication/view/AccountVerificationPage";
import CreateAccountPage from "./modules/authentication/view/CreateAccountPage";
import ProductsManagement from "./modules/products/view";
import ServiceManagement from "./modules/services/view";
import Wallet from "./modules/wallet/view";
import Profile from "./modules/profile/view";
import UsersManagement from "./modules/UsersManagament";
import VendorRequest from "./modules/vendorRequest";
import ShopManagement from "./modules/shopManagement";
import ReferralManagement from "./modules/referralManagement";
import PromotionManagement from "./modules/promotionManagement";
import RepaymentManagement from "./modules/repaymentManagement";
import WalletManagement from "./modules/usersWallet";
import PackageManagement from "./modules/packageManagement";
import PaymentVerification from "./modules/paymentVerification/view";
import AdminSettingsPage from "./modules/admin/view/AdminSettingsPage";
import ShopDetails from "./modules/shopManagement/ShopDetails";
import Referral from "./modules/referral";
import VendorShopManagement from "./modules/shopManagement/vendor";
import Messages from './modules/messages'
import SupportManagement from "./modules/supportManagement";
import SupportDetails from "./modules/supportManagement/Details";
import Support from "./modules/support";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products-management" element={<ProductsManagement />} />
          <Route path="/services-management" element={<ServiceManagement />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/referral" element={<Referral />} />
          <Route path='/messages' element={<Messages />} />

          <Route
            path="/payment/confirmation"
            element={<PaymentVerification />}
          />
          <Route
            path="/promotion-management"
            element={<PromotionManagement />}
          />

          {/* <Route
            path="/dashboard/user-details/:userId"
            element={<UserDetailsPage />}
          /> */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<LoginPage />} />
          <Route path="/admin/users-management" element={<UsersManagement />} />
          <Route path="/admin/vendor-request" element={<VendorRequest />} />
          <Route path="/admin/shop-management" element={<ShopManagement />} />
          <Route
            path="/admin/products-management"
            element={<ProductsManagement />}
          />
          <Route
            path="/admin/support-management"
            element={<SupportManagement />}
          />
          <Route
            path="/support-management"
            element={<SupportManagement />}
          />
          <Route
            path="/support-management/:ticketId"
            element={<SupportDetails />}
          />
          <Route
            path="/admin/referral-management"
            element={<ReferralManagement />}
          />
          <Route
            path="/admin/promotion-management"
            element={<PromotionManagement />}
          />
          <Route
            path="/admin/repayment-management"
            element={<RepaymentManagement />}
          />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/wallet" element={<WalletManagement />} />
          <Route
            path="/admin/package-management"
            element={<PackageManagement />}
          />

          <Route
            path="/admin/verification"
            element={<AdminLoginVerification />}
          />
          {/* <Route path="/admin/user-management" element={<UserManagement />} /> */}
          <Route path="/admin/settings" element={<AdminSettingsPage />} />
          {/* <Route path="/dashboard/settings" element={<SettingsPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/vendorshop-settings"
            element={<VendorShopManagement />}
          />
          <Route
            path="/account-verification"
            element={<AccountVerification />}
          />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/admin/shop-details/:shopId" element={<ShopDetails />} />
          <Route path='/support' element={<Support />} />

          {/* <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route
            path="/terms-and-condition"
            element={<TermsAndConditionsPage />}
          /> */}
          {/* <Route path="/support" element={<SupportPage />} /> */}
          {/* <Route path="/faq" element={<FAQPage />} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
