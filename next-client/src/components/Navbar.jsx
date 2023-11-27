import Link from 'next/link';

import { HiBars3CenterLeft } from 'react-icons/hi2';

export default function Navbar() {
  return (
    <div className="flex justify-center w-full bg-base-100">
      <nav className="navbar max-w-4xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <HiBars3CenterLeft size={24} />
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href="/">발급</Link>
              </li>
              <li>
                <Link href="/mynft">조회</Link>
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
              <Link href="/mynft">조회</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="join">
            <button className="btn btn-warning join-item">거래상태</button>
            <select className="select select-bordered join-item">
              <option disabled selected>
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
