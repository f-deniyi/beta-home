import React, { useEffect, useState } from "react";
import CustomerDetails from "./CustomerDetails";
import VendorDetails from "./VendorDetails";
import useGetAllUsersManager from "../controllers/get_all_users_controller";
import Loader from "../../../generalComponents/Loader";
import useGetOrderStatusManager from "../../products/controllers/get_order_statuses";

const UserTable = ({ filter,debouncedSearchValue }) => {
  const { users, pagination, isLoading, refetch } = useGetAllUsersManager({
    filter: filter,
    fullname: debouncedSearchValue
  });

  const [selectedUserDetails, setSelectedUserDetails] = useState(null);

  useEffect(() => {
    refetch();
  }, [filter]);

  useEffect(() => {
    if (users && users.length > 0) {
      setSelectedUserDetails(users[0]);
    }
  }, [users]);

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoDate).toLocaleDateString("en-US", options);
  };

  const {
    isLoading: loadingStatuses,
    data: statuses,
    isSuccess: fetchedStatuses,
  } = useGetOrderStatusManager();
  const [orderStatuses, setOrderStatuses] = useState([{ name: "All", id: "" }]);

  useEffect(() => {
    //console.log("statuses:", statuses);

    if (fetchedStatuses && statuses) {
      let formattedStatuses = statuses.data;
      const newOrderStatus = [{ name: "All", id: "" }];

      newOrderStatus.push(...formattedStatuses);
      //console.log("newOrderStatus:", newOrderStatus);

      setOrderStatuses(newOrderStatus);
    }
  }, [statuses, fetchedStatuses]);

  if (isLoading || loadingStatuses) {
    return <Loader />;
  }

  return (
    <div class=" bg-white sm:py-2 lg:py-3">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <table class="min-w-full lg:divide-gray-200 lg:divide-y">
                <thead class="hidden lg:table-header-group">
                  <tr>
                    <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">
                      #
                    </th>

                    <th class="py-3.5 px-4 text-left  font-medium text-black text-[12px] uppercase tracking-widest">
                      Name
                    </th>

                    <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">
                      Email
                    </th>

                    <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">
                      Date Created
                    </th>
                    <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">
                      No. of O/P/S
                    </th>

                    <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">
                      Role
                    </th>
                    <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.length > 0 &&
                    users.map((user, index) => (
                      <tr key={user.id} class="bg-white">
                        <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                          <div class="flex items-center">{index + 1}</div>
                          <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                            <div class="flex items-center">{user.fullname}</div>

                            <div class="flex items-center">{user.email}</div>

                            <div class="flex items-center">
                              {formatDate(user.createdAt)}
                            </div>

                            <div class="flex items-center">9</div>

                            <div class="flex items-center pt-3 space-x-4">
                              <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                {/* burby is not returning role name. */}
                                {user.isVendor ? "Vendor" : "Customer"}
                              </div>

                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedUserDetails(user);
                                  document
                                    .getElementById("customer_details")
                                    .showModal();
                                }}
                                class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </td>

                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                          <div class="flex items-center">{user.fullname}</div>
                        </td>

                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                          <div class="flex items-center">{user.email}</div>
                        </td>

                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                          <div class="flex items-center">
                            {formatDate(user.createdAt)}
                          </div>
                        </td>

                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                          <div class="flex items-center">34</div>
                        </td>

                        <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                        {
                                                                !user?.isVendor ? <div class="flex items-center justify-center bg-[#00A3FF] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                                    Customer
                                                                </div> : <div class="flex items-center justify-center bg-[#04A701] py-[5px] px-[10px] text-center text-white rounded-[20px]">
                                                                    Vendor
                                                                </div>
                                                            }
                        </td>

                        <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                          <div class="flex items-center space-x-4">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedUserDetails(user);
                                document
                                  .getElementById("customer_details")
                                  .showModal();
                              }}
                              class="bg-brandPrimary inline-flex items-center px-3 py-2 text-[12px] font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                            >
                              View Details
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {selectedUserDetails && (
        <CustomerDetails
          userDetails={selectedUserDetails}
          orderStatuses={orderStatuses}
        />
      )}
      <VendorDetails userDetails={selectedUserDetails} />
    </div>
  );
};

export default UserTable;
