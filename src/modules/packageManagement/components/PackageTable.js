import React from "react";

const PackageTable = ({ list }) => {
  return (
    <div class=" bg-white sm:py-2 lg:py-3">
      <div class="px-0 mx-auto max-w-7xl ">
        <div class="flex flex-col">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <table class="min-w-full lg:divide-gray-200 lg:divide-y border-separate border-spacing-y-2">
                <thead class="hidden lg:table-header-group">
                  <tr>
                    <th class="py-3.5 px-4 text-left  font-normal text-black text-[12px] uppercase tracking-widest">
                      No.
                    </th>

                    <th class="py-3.5 px-4 text-left  font-normal text-black text-[12px] uppercase tracking-widest">
                      No. of Item
                    </th>

                    <th class="py-3.5 px-4 text-left  uppercase tracking-widest font-normal text-black text-[12px]">
                      Features
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {list.map((item, index) => (
                    <tr class="bg-[#F2F2F2] mb-6 rounded-[5px]">
                      <td class="px-4 py-4 text-sm font-normal text-gray-900 align-top lg:align-middle whitespace-nowrap">
                        <div class="text-normal flex items-center">
                          {index + 1}
                        </div>
                        <div class="mt-1 space-y-2 font-normal pl-11 lg:hidden">
                          <div class="flex items-center justify-center">
                            {item.quantity}
                          </div>

                          <div class="flex items-center">{item.name}</div>
                        </div>
                      </td>

                      <td class="hidden px-4 py-4 text-sm font-normal text-gray-900 lg:table-cell whitespace-nowrap">
                        <div class="flex items-center justify-center">
                          {item.quantity}
                        </div>
                      </td>

                      <td class="hidden px-4 py-4 text-sm font-normal text-gray-900 lg:table-cell whitespace-nowrap">
                        <div class="flex items-center">{item.name}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageTable;
