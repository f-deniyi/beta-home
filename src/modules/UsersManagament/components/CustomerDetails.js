import React, { useState, useEffect } from "react";
import ModalManagement from "../../../generalComponents/ModalManagement";
import { close, user } from "../../../assets/icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import CustomButton from "../../../generalComponents/Button";
import ProductOrders from "../../products/view/orders";
import ServicesOrder from "../../services/components/ServicesOrder";
import useGetProductOrdersManager from "../../products/controllers/get_product_orders_controller";
import useGetOrderStatusManager from "../../products/controllers/get_order_statuses";
import Loader from "../../../generalComponents/Loader";
import useGetProviderServiceRequest from "../../services/controller.js/get_service_request";
import useGetCustomerServiceRequests from "../../services/controller.js/get_customer_service_requests";
import { SuspendUnsuspendUserManager } from "../controllers/suspendUnsuspend_user_controller";
import { DeleteUserManager } from "../controllers/delete_user_controller";
import { MakeUserVendorManager } from "../controllers/make_user_vendor";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CustomerDetails = ({ userDetails, orderStatuses }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const navigate = useNavigate();
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newImage = { url: reader.result, file };
        setUploadedImages([...uploadedImages, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(updatedImages);
  };

  const {
    isLoading,
    data: orders,
    pagination,
    refetch,
  } = useGetProductOrdersManager({
    filter: userDetails._id,
    enable: Boolean(userDetails._id),
  });

  const {
    data: serviceRequests,
    isLoading: loadingRequests,
    refetch: refetchServices,
  } = useGetCustomerServiceRequests({
    filter: userDetails._id,
    enabled: Boolean(userDetails._id),
  });

  const { suspendUnsuspendUserController, isLoading: suspending } =
    SuspendUnsuspendUserManager(userDetails._id);
  const { deleteUserController, isLoading: deleting } = DeleteUserManager(
    userDetails._id
  );
  const { makeUserVendorController, isLoading: updating } =
    MakeUserVendorManager(userDetails._id);

  if (isLoading || loadingRequests) {
    return <Loader />;
  }

  return (
    <>
      {userDetails && (
        <ModalManagement id={"customer_details"} hideCancel={true}>
          <div className="flex items-center justify-between mb-6">
            <p className="text-[18px] font-medium ">Customer Details</p>
            <div
              onClick={() =>
                document.getElementById("customer_details").close()
              }
              role="button"
            >
              <img src={close} alt="close-icon" className="h-[23px] w-[23px]" />
            </div>
          </div>
          <div className="flex itens-center justify-center mb-[26px]">
            <div className="flex flex-col items-center">
              <div className="border-2 border-brandPrimary h-[135px] w-[135px] rounded-full flex items-center justify-center mb-1">
                <img
                  className="w-full h-full object-cover relative rounded-full"
                  src={userDetails.profile_picture ?? user}
                  alt="icon"
                />
              </div>
              <div className="text-center">
                <h3 className="text-[20px] font-bold ">
                  {userDetails.fullname}
                </h3>
                <p className="text-[12px] font-medium">{userDetails.email}</p>
              </div>
            </div>
          </div>
          <div className="mb-[17.5px] ">
            <div className="flex w-full">
              <div className="grid  flex-grow text-center">
                <p className="mb-0 text-[#696969] text-[12px] font-semibold">
                  Gender
                </p>
                <h3 className="text-[18px] font-medium ">
                  {userDetails.gender ?? "No Gender"}
                </h3>
              </div>
              <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
              <div className="grid  flex-grow text-center">
                <p className="mb-0 text-[#696969] text-[12px] font-semibold">
                  Phone No.
                </p>
                <h3 className="text-[18px] font-medium ">
                  {userDetails.phone ?? "No phone"}
                </h3>
              </div>
              <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
              <div className="grid  flex-grow text-center">
                <p className="mb-0 text-[#696969] text-[12px] font-semibold">
                  Status
                </p>
                <h3 className="text-[18px] font-medium ">
                  {userDetails.isVendor ? "Vendor" : "Customer"}
                </h3>
              </div>
            </div>
          </div>
          <div>
            <p
              className={`text-[15px] font-medium mb-3 ${
                userDetails.enrollments.length > 0
                  ? ""
                  : "my-10 text-center mb-12"
              }`}
            >
              {userDetails.enrollments.length > 0
                ? "Package"
                : "Not currently Subscribed to any package"}
            </p>
            {userDetails.enrollments.length > 0 && (
              <div className="bg-brandPrimary rounded-[10px] px-[18px] py-[15px] flex items-center justify-between shadow-lg mb-[30px]">
                <div>
                  <h3 className="text-[22px] font-medium mb-0">Beta</h3>
                  <h3 className="text-[29px] font-semibold mb-0 -mt-3">
                    Basic
                  </h3>
                  <p className="text-[13px] font-normal mb-0 -mt-2">
                    Daily Payment Plan
                  </p>
                </div>
                <div>
                  <MdOutlineArrowForwardIos size="19" />
                </div>
              </div>
            )}
          </div>
          <div className="flex w-full">
            <div className="grid  flex-grow text-center">
              <p className="mb-0 text-[#696969] text-[15px] font-medium mb-2">
                Customer Products Order
              </p>
              <h3 className="text-[30px] font-semibold ">{`${
                orders && orders.orders.length
              } Orders`}</h3>
              <div classNmw="w-1/3 mx-auto">
                <button
                  type="button"
                  onClick={async () => {
                    // setEnableLoad(true);
                    refetch();
                    document.getElementById("product_orders").showModal();
                    document.getElementById("customer_details").close();
                  }}
                  class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                >
                  View Details
                </button>
              </div>
            </div>
            <div className="divider divider-horizontal w-[0.3px] bg-[#A5A5A5]" />
            <div className="grid  flex-grow text-center">
              <p className="mb-0 text-[#696969] text-[15px] font-medium mb-2">
                Customer Service Order
              </p>
              <h3 className="text-[30px] font-semibold ">
                {serviceRequests.requests.length} Requests
              </h3>
              <div classNmw="w-1/3 mx-auto">
                <button
                  type="button"
                  onClick={async () => {
                    refetchServices();
                    document.getElementById("customer_details").close();
                    document.getElementById("services_request").showModal();
                  }}
                  class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div>
            <CustomButton
              isLoading={updating}
              onClick={async () => {
                if (userDetails.isVendor) {
                  // navigate to the shop
                  if (userDetails.shops.length > 0) {
                    navigate(`/admin/shop-details/${userDetails.shops[0]}`);
                  } else {
                    document.getElementById("customer_details").close();
                    toast.warn(
                      `${userDetails.fullname} has not created a shop yet`
                    );
                  }
                } else {
                  // make the user a vendor

                  await makeUserVendorController({ isVendor: true });
                }
              }}
              buttonText={
                userDetails.isVendor
                  ? "View Shop"
                  : "Make the customer a Vendor"
              }
              className={
                "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] bg-brandPrimary !py-[15px]"
              }
            />
          </div>

          <div className="flex gap-x-2">
            <CustomButton
              isLoading={suspending}
              onClick={async () => {
                await suspendUnsuspendUserController();
              }}
              buttonText={
                userDetails.isSuspended ? "Activate User" : "Suspend User"
              }
              className={
                "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandGrey !py-[15px]"
              }
            />
            <CustomButton
              isLoading={deleting}
              buttonText={"Delete User"}
              onClick={async () => {
                await deleteUserController();
                document.getElementById("customer_details").close();
              }}
              className={
                "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandRed text-white !py-[15px]"
              }
            />
          </div>
        </ModalManagement>
      )}

      {orders && (
        <ProductOrders
          orders={orders.orders}
          pagination={pagination}
          orderStatuses={orderStatuses}
          refetch={() => {
            refetch();
          }}
        />
      )}
      {serviceRequests && (
        <ServicesOrder
          pagination={serviceRequests.pagination}
          requests={serviceRequests.requests}
        />
      )}
    </>
  );
};

export default CustomerDetails;
