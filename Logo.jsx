import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to={"/"}
      className="flex shrink-0 items-center gap-2.5"
      aria-label="آیکن‌فا"
    >
      <span className="brand-mark grid h-9 w-9 grid-cols-2 gap-1 rounded-[10px] bg-[#6458e8] p-2 shadow-[0_6px_20px_rgba(100,88,232,.25)]">
        <i className="rounded-[2px] bg-white" />
        <i className="rounded-full bg-white" />
        <i className="rounded-full bg-white" />
        <i className="rounded-[2px] bg-white" />
      </span>
      <span className="text-[20px] font-black tracking-[-.04em]">آیکن‌فا</span>
    </Link>
  );
}
