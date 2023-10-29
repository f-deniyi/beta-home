import React, { useState } from "react";
import BaseDashboardNavigation from "../../../generalComponents/BaseDashboardNavigation";
import Transactions from '../component/Transactions'
import logo from '../../../assets/images/new_logo.svg'
import locker from '../../../assets/images/locker.svg'
import FundWallet from "../component/Fund";
import Withdraw from "../component/Withdraw";
import { walletbg2 } from '../../../assets/icons'
import useGetWalletBalanceQuery from "../controller/get_wallet_balance";
import moment from 'moment'
import useGetTransactionsHistoryQuery from "../controller/get_transactions_history";


const WalletManagement = () => {
    const { wallet_balance, lastRefetchTime } = useGetWalletBalanceQuery({ enabled: true })
    const [activePage, setActivePage] = useState(1)

    const { transactions, pagination } = useGetTransactionsHistoryQuery({
        enabled: true,
        page: activePage

    })
    const handlePage = (page) => {
        setActivePage(page)
    }
    return (
        <BaseDashboardNavigation title={"Wallet"} hideSearch={false}>
            <div class="grid grid-cols-7 h-screen gap-2">
                <div class="col-span-5 w-full">
                    <div className="w-full  h-[310px] mb-1 rounded-[10px] flex items-center justify-center text-center"
                        style={{
                            backgroundImage: `linear-gradient(180deg, rgba(255, 241, 18, 0.83) 0%, #FFF112 100%), url(${walletbg2})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: ', cover'
                        }}
                    >
                        <div>
                            <p className="text-[20px] font-normal -mb-6">Wallet Balance</p>
                            <h3 className='text-[89.564px] font-semibold mb-0' >{`N${wallet_balance?.toLocaleString()}`}</h3>
                            <p className="text-[13.93px] font-normal mb-0 -mt-5">{`Last Updated: ${moment(lastRefetchTime).calendar()}`}</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-[15px] font-semibold mt-4">Transactions History</h3>
                        <div className='overflow-scroll' style={{ maxHeight: 'calc(100vh - 400px - 1rem - 1.25rem)' }}>
                            <Transactions
                                transactions={transactions}
                                pagination={pagination}
                                handlePage={handlePage}
                            />
                        </div>
                    </div>
                </div>
                <div class="col-span-2  w-full">
                    <div className="bg-white rounded-[10px] p-[45px] mb-[10px]">
                        <button className="bg-brandPrimary rounded-full text-[15px] py-[18px] w-full mb-[16px] cursor-pointer"
                            onClick={() => document.getElementById('fund_wallet').showModal()}
                        >
                            Fund Wallet
                        </button>
                        <button className="bg-[#F2F2F2] rounded-full text-[15px] py-[18px] w-full"

                            onClick={() => document.getElementById('withdraw_fund').showModal()}
                        >
                            Withdraw
                        </button>

                    </div>
                    <div className="bg-brandPrimary py-[30px] rounded-[10px] flex items-center justify-center flex-col">
                        <div className=" mb-5">
                            <img src={logo} alt='logo' />
                        </div>
                        <div>
                            <img src={locker} alt='icon' />
                        </div>
                    </div>
                </div>
            </div>
            <FundWallet />
            <Withdraw />
        </BaseDashboardNavigation >
    );
};

export default WalletManagement;
