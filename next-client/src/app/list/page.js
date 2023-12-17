export default function Mynft() {
  return (
    <main className="prose mx-auto flex w-full flex-col">
      <h1 className="text-center">기프티콘 조회</h1>
      <div className="flex flex-col">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Gifticons</div>
            <div className="stat-value">Loading...</div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>발행처</th>
                <th>제목</th>
                <th>유효기간</th>
                <th>교환처</th>
                <th>사용가능 금액</th>
                <th>대표이미지</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover">
                <th>1</th>
                <td>기프티쇼</td>
                <td>스타벅스 10만원권</td>
                <td>2023/12/16</td>
                <td>카카오</td>
                <td>100000</td>
                <td>이미지</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
