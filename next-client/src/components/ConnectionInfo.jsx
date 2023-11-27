"use client";

import useAccount from "@/hooks/useAccount";
import useWeb3 from "@/hooks/useWeb3";
import { Suspense } from "react";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";
import ConnectionInfoSkeleton from "./ConnectionInfoSkeleton";

export default function ConnectionInfo() {
  const { account } = useAccount();
  const { web3 } = useWeb3();

  return (
    <Suspense fallback={ConnectionInfoSkeleton}>
      {account && web3 ? (
        <div role="alert" className="alert alert-success">
          <HiOutlineCheckCircle size={24} />
          <span>메타마스크에 연결되었습니다.</span>
        </div>
      ) : (
        <div role="alert" className="alert alert-error">
          <HiOutlineXCircle size={24} />
          <span>메타마스크 연결에 실패했습니다.</span>
        </div>
      )}
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">계정</span>
        </label>
        <input
          type="text"
          placeholder={account}
          className="input input-bordered w-full"
          disabled
        />
      </div>
    </Suspense>
  );
}
