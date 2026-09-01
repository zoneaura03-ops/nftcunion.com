import { LogoLoader } from "../components/logo-loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] bg-[#f7f9fc]">
      <LogoLoader />
    </div>
  );
}
