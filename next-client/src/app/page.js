export default function Home() {
  const isConnected = false;

  return (
    <main className="prose w-full flex flex-col mx-auto">
      <h1 className="text-center">기프티콘 발급</h1>
      <div className="flex flex-col gap-4">
        {isConnected ? (
          <div role="alert" className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>메타마스크에 연결되었습니다.</span>
          </div>
        ) : (
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>메타마스크 연결에 실패했습니다.</span>
          </div>
        )}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">계정</span>
          </label>
          <input
            type="text"
            placeholder=""
            className="input input-bordered w-full"
            disabled
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">발행자</span>
          </label>
          <input
            type="text"
            placeholder="발행자를 입력하세요"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">대표 이미지</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">카테고리</span>
          </label>
          <select className="select select-bordered">
            <option disabled selected>
              선택하세요
            </option>
            <option value="기본">기본</option>
            <option value="중요">중요</option>
            <option value="기타">기타</option>
          </select>
        </div>
        <button className="btn btn-primary mt-8">민팅하기</button>
      </div>
    </main>
  );
}
