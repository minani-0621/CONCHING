import Link from "next/link";

import { HiBars3CenterLeft } from "react-icons/hi2";

export default function Navbar() {
  return (
    <div className="flex w-full justify-center bg-base-100">
      <nav className="navbar max-w-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiBars3CenterLeft size={24} />
            </div>
            <ul className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              <li>
                <Link href="/">발급</Link>
              </li>
              <li>
                <Link href="/list">조회</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            CONCHING
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">발급</Link>
            </li>
            <li>
              <Link href="/list">조회</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="join">
            <button className="btn btn-warning join-item">거래상태</button>
            <select
              defaultValue={null}
              className="join-item select select-bordered"
            >
              <option value={null} disabled>
                네트워크를 선택하세요
              </option>
              <option value="MATIC_MUMBAI">폴리곤-뭄바이</option>
              <option value="ETH_RINKEBY">이더리움-Rinkeby</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
}
