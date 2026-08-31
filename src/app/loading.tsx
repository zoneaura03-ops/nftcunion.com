export default function Loading() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-[250] h-1 overflow-hidden bg-[#dcebea]"
      role="status"
      aria-label="Loading"
    >
      <div className="h-full w-1/3 animate-[loading-bar_1s_ease-in-out_infinite] rounded-full bg-[#d8b45b]" />
    </div>
  );
}
