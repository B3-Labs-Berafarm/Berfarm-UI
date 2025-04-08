import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import Input from './base/Input'
import { useReadContract, useAccount, useWriteContract, useWaitForTransactionReceipt, useSimulateContract } from 'wagmi'
import { ADDITIONAL_CONTRACTS } from '../constants/contracts';
import Erc20Abi from '../constants/Abi/Erc20Abi.json';
import { ethers } from "ethers";
import TrancheVaultAbi from '../constants/abi/TrancheVaultAbi.json';

export default function Withdraw({ inputBlockClassName = '', inputClassName, icon, placeholder = '', label = '', vaultType, vaultInformation }) {
    console.log("vaultInformation ", vaultInformation)
    const [userBalance, setUserBalance] = useState(0);
    const [form, setForm] = useState({ amount: 0 });
    const { address, isConnected } = useAccount();
    const { data: yieldVaultInvestment } = useReadContract({
        address: ADDITIONAL_CONTRACTS.HoneyVaultToken0,
        abi: Erc20Abi,
        functionName: 'balanceOf',
        args: [address],
        enabled: isConnected && !!address,
    });

    const { data: rewardVaultInvestment } = useReadContract({
        address: ADDITIONAL_CONTRACTS.RewardVaultToken1,
        abi: Erc20Abi,
        functionName: 'balanceOf',
        args: [address],
        enabled: isConnected && !!address,
    });

    const [isApproved, setIsApproved] = useState(false);
    const { writeContract, data: hash } = useWriteContract()
    const { isLoading: isApprovalLoading, isSuccess: isApprovalSuccess } = useWaitForTransactionReceipt({
        hash,
    })

    const [withdrawHash, setWithdrawHash] = useState(null);
    const { isLoading: isWithdrawLoading, isSuccess: isWithdrawSuccess } = useWaitForTransactionReceipt({
        hash: withdrawHash,
    });

    useEffect(() => {
        if (isApprovalSuccess) {
            setIsApproved(true);
        }
    }, [isApprovalSuccess]);


    useEffect(() => {
        if (isWithdrawSuccess) {
            setForm({ amount: 0 });
        }
    }, [isWithdrawSuccess]);

    const getTokenBalance = () => {
        console.log({ vaultType, yieldVaultInvestment, rewardVaultInvestment })
        if (vaultType === 'base' && yieldVaultInvestment) {
            console.log("BALANCE base:", ethers.formatEther(yieldVaultInvestment));
            setUserBalance(ethers.formatEther(yieldVaultInvestment))
        }
        if (vaultType === 'rewards' && rewardVaultInvestment) {
            console.log("BALANCE rewards:", ethers.formatEther(rewardVaultInvestment));
            setUserBalance(ethers.formatEther(rewardVaultInvestment))
        }
    }
    useEffect(() => {
        getTokenBalance()
    }, [yieldVaultInvestment, rewardVaultInvestment]);

    const handleApproveWithdraw = async () => {
        if (!isConnected || !form.amount) return;
        try {
            // Add your deposit approval logic here
            const amountInWei = ethers.parseEther(form.amount.toString());
            const tid = vaultType === 'base' ? "0" : "1";
            console.log("VAULT TRANCH TYPE:", vaultType);
            console.log("TID:", tid);
            writeContract({
                abi: Erc20Abi,
                address: ADDITIONAL_CONTRACTS.HoneyToken,
                functionName: 'approve',
                args: [ADDITIONAL_CONTRACTS.DeployedTrancheVault, amountInWei],
            });
            console.log('Approving deposit for amount:', form.amount);
            toast.success('Approving deposit for amount', form.amount);
        } catch (error) {
            console.error('Error approving deposit:', error);
            toast.error('Error while approving deposit ', error);
        }
    };

    const handleWithdraw = async () => {
        if (!isConnected || !form.amount) return;
        try {
            const amountInWei = ethers.parseEther(form.amount.toString());
            const tid = vaultType === 'base' ? "0" : "1";
            const { hash = '' } = await writeContract({
                abi: TrancheVaultAbi,
                address: ADDITIONAL_CONTRACTS.DeployedTrancheVault,
                functionName: 'withdraw',
                args: [tid, amountInWei],
            });
            setWithdrawHash(hash);
        } catch (error) {
            console.error('Error depositing:', error);
            // toast.error('Error while depositing:', error);
        } finally {
            setIsApproved(false);
            setForm({ amount: 0 });
        }
    };

    return (
        <>
            <Input
                label='Amount'
                labelClassName="font-body font-weight-500 text-med pl-20"
                inputBlockClassName="!w-full !max-w-full"
                placeholder="0.00"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                disabled={!isConnected}
                inputClassName={"bg-srf-l2 font-headings text-hi border-action-neutral border-2 !rounded-[4px] h-[56px] !lbl-l text-low"}
                icon={<span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-hi font-body cursor-pointer" onClick={() => {
                    setForm({ ...form, amount: userBalance })
                }}>Max</span>} />

            < div className='flex justify-between items-center pt-g1 px-g2h' >
                <div className='body-s font-body text-med'>Wallet Balance</div>
                <div className='body-s font-body font-weight-700 text-hi'>{userBalance || '-'} HONEY</div>
            </div >


            {/* <div className='flex justify-between items-center pt-g1 px-g2h'>
                <div className='body-s font-body text-med'>Wallet Balance</div>
                <div className='body-s font-body font-weight-700 text-hi'>64,420.00 CURR UNIT</div>
            </div> */}
            <div className='flex justify-center items-center py-[28px] text-mean-err font-body body-m'>
                {/* error Message */}
            </div>
            <div className='flex justify-center items-center'>
                {!isApproved ? (
                    <button
                        onClick={() => handleApproveWithdraw()}
                        disabled={isApprovalLoading}
                        className='flex justify-between items-center space-x-g0h px-l bg-action-primary-default hover:bg-action-primary-hover ht-l shadow-level2 border border-light rounded-rnd-m text-inv-hi font-body'
                    >
                        <span className='font-weight-500'>
                            {isApprovalLoading ? 'Approving...' : 'Approve withdrawal'}
                        </span>
                    </button>
                ) : (
                    <button
                        onClick={() => handleWithdraw()}
                        disabled={isWithdrawLoading}
                        className='flex justify-between items-center space-x-g0h px-l bg-action-primary-default hover:bg-action-primary-hover ht-l shadow-level2 border border-light rounded-rnd-m text-inv-hi font-body'
                    >
                        <span className='font-weight-500'>
                            {isWithdrawLoading ? 'withdrawing...' : 'Withdrawal'}
                        </span>
                    </button>
                )}
            </div>

        </>
    )
}
