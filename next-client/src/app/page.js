import ConnectionInfo from "@/components/ConnectionInfo";

export default function Home() {
  return (
    <main className="prose mx-auto flex w-full flex-col">
      <h1 className="text-center">기프티콘 발급</h1>
      <div className="flex flex-col gap-4">
        <ConnectionInfo />
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
          <select defaultValue={null} className="select select-bordered">
            <option value={null} disabled>
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
