export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 h-[100%]">
      <div className="col-start-1 col-span sm:col-start-2 col-end-13">
        {children}
      </div>
    </div>
  );
}
