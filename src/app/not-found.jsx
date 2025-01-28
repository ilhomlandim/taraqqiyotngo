import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="h-full py-14">
      <div className="base-container">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-5">404</h1>
          <p>Bunday sahifa mavjud emas</p>
          <Button asChild>
            <Link href="/">Bosh sahifa</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
