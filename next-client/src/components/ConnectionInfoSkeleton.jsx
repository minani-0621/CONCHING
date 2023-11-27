export default function ConnectionInfoSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="skeleton h-16 w-full"></div>
      <div>
        <div className="skeleton mx-1 my-2 h-5 w-6"></div>
        <div className="skeleton h-12 w-full"></div>
      </div>
    </div>
  );
}
