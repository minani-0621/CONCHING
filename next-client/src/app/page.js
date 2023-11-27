import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi2';

export default function Home() {
  const isConnected = true;

  return (
    <main className="prose w-full flex flex-col mx-auto">
      <h1 className="text-center">기프티콘 발급</h1>
      <div className="flex flex-col gap-4">
        {isConnected ? (
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
