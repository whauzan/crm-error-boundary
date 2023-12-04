import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[calc(100vh-72px)] px-20 py-24">
      <div className="flex h-full flex-col justify-center px-8">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <p className="font-semibold text-[#175CD3]">404 error</p>
            <h1 className="text-6xl font-semibold">
              We can&apos;t find that page
            </h1>
          </div>
          <h3 className="text-xl font-normal text-[#475467]">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved
          </h3>
        </div>
        <div className="mt-12 flex gap-x-3">
          <Button variant={"outlined"} className="flex gap-x-3">
            <>
              <Image
                src={"/chevron-left.svg"}
                alt="Left Arrow Icon"
                width={50}
                height={50}
                className="h-[14px] w-[14px]"
              />
              Go back
            </>
          </Button>
          <Link href="/">
            <Button>Take me home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
