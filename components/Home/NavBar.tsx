import Image from "next/image";
import Link from "next/link";
import SearchBox from "../Helper/SearchBox";
import { HeartIcon, UserIcon } from "lucide-react";
import ShoppingCartButton from "../Helper/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="h-[12vh] sticky top-0 z-[1] bg-white shadow-md">
      <div className="flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={140} height={140}></Image>
        </Link>
        <div className="flex items-center space-x-6">
          <SearchBox />
          <HeartIcon size={26} cursor={"pointer"} />
          <ShoppingCartButton />

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
