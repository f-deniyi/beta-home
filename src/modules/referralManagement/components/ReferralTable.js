import React, { useState } from "react";
import LeadDetails from "./LeadDetails";
import useGetSalesRep from "../controller/get_sales_rep";
import moment from "moment";
import PaginationRounded from "../../../generalComponents/Pagination";
import Loader from "../../../generalComponents/Loader";
import CustomButton from "../../../generalComponents/Button";
import { UpdateSalesRepRequestsMutation } from "../controller/update_sales_rep_request";
import EmptyContent from "../../../generalComponents/EmptyContent";

const ReferralTable = () => {
  const [activePage, setActivePage] = useState(1);
  const salesType = ["Active", "Pending Requests"];

  const [status, setStatus] = useState("Active");

  const { requests, pagination, isLoading } = useGetSalesRep({
    status: status === "Active" ? "true" : "false",
    page: activePage,
  });

  const handlePage = (page) => {
    setActivePage(page);
  };

  const { updateSalesRepRequests, isLoading: updating } =
    UpdateSalesRepRequestsMutation();
  const [selectedUser, setSelectedUser] = useState(null);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div class=" bg-white sm:py-2 lg:py-3 rounded-lg">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-5 mt-2">
            {salesType.map((el) => (
              <p
                onClick={() => {
                  setStatus(el);
                }}
                className={`py-[10px] px-[20px] text-[#696969] font-medium text-[12px] cursor-pointer ${
                  status !== el ? "bg-[#F2F2F2]" : "bg-brandPrimary text-black"
                } rounded-[20px] `}
              >
                {el}
              </p>
            ))}
          </div>
          {requests?.length > 0 ? (
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
                          No. of Leads
                        </th>

                        <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">
                          Referral Code
                        </th>
                        <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-medium text-black text-[12px]">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {requests?.map((el, index) => (
                        <tr class="bg-white" key={index}>
                          <td class="px-4 py-4 text-sm font-bold text-gray-900 align-top lg:align-middle whitespace-nowrap">
                            <div class="flex items-center">{index + 1}</div>
                            <div class="mt-1 space-y-2 font-medium pl-11 lg:hidden">
                              <div class="flex items-center">
                                {el?.user?.fullname}
                              </div>

                              <div class="flex items-center">
                                {el?.user?.email}
                              </div>

                              <div class="flex items-center">
                                {moment(el?.created_at).format("ll")}
                              </div>

                              <div class="flex items-center">9</div>

                              <div class="flex items-center pt-3 space-x-4">
                                <p className="text-[12px] font-medium">
                                  {el?.code}
                                </p>

                                {status === "Active" ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      document
                                        .getElementById("lead_details")
                                        .showModal()
                                    }
                                    class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                                  >
                                    View Leads
                                  </button>
                                ) : (
                                  <CustomButton
                                    buttonText={"Accept"}
                                    isLoading={updating}
                                    disabled={updating}
                                    onClick={() => {
                                      const data = {
                                        request: el?._id,
                                        approved: true,
                                      };
                                      updateSalesRepRequests(data);
                                    }}
                                    className={
                                      "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-brandPrimary !py-[15px]"
                                    }
                                  />
                                )}
                              </div>
                            </div>
                          </td>

                          <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div class="flex items-center">
                              {el?.user?.fullname}
                            </div>
                          </td>

                          <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div class="flex items-center">
                              {el?.user?.email}
                            </div>
                          </td>

                          <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div class="flex items-center">
                              {moment(el?.created_at).format("ll")}
                            </div>
                          </td>

                          <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 lg:table-cell whitespace-nowrap">
                            <div class="flex items-center">
                              {el?.referred ?? 0}
                            </div>
                          </td>

                          <td class="hidden px-4 py-4 text-sm font-medium text-gray-900 xl:table-cell whitespace-nowrap text-center">
                            <p className="text-left text-[12px] font-medium">
                              {el?.code}
                            </p>
                          </td>

                          <td class="hidden px-4 py-4 lg:table-cell whitespace-nowrap">
                            {status === "Active" ? (
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedUser(el?.user);
                                  document
                                    .getElementById("lead_details")
                                    .showModal();
                                }}
                                class="bg-brandPrimary inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200  shadow-sm focus:outline-none hover:text-black focus:ring-2 focus:ring-offset-2 focus:ring-[#fff122] px-[20px] py-[15px] rounded-full"
                              >
                                View Leads
                              </button>
                            ) : (
                              <CustomButton
                                buttonText={"Accept"}
                                isLoading={updating}
                                disabled={updating}
                                onClick={() => {
                                  const data = {
                                    request: el?._id,
                                    approved: true,
                                  };
                                  updateSalesRepRequests(data);
                                }}
                                className={
                                  "!text-[15px] font-light w-full mt-3 rounded-full mt-[25px] !bg-green-800 text-white !py-[15px]"
                                }
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <EmptyContent
              content={
                salesType === "Active" ? "No active sales rep" : "No requests"
              }
            />
          )}
        </div>

        <div className="flex items-center justify-center mt-3">
          <PaginationRounded
            count={pagination?.pageTotal}
            onChange={handlePage}
          />
        </div>
      </div>

      <LeadDetails user={selectedUser} />
    </>
  );
};

export default ReferralTable;
