import Link from "next/link"
import { Button } from "./ui/moving-border"
import Image from "next/image"
import logo from "../../public/images/logo-new.png"

function Hero() {
  return (
    <>
      <header className="header" role="banner">
        <div className="header__logo-box">
          <Image src={logo} alt="Logo" height="50" width="200" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Acharya</span>
            <span className="heading-primary--sub">Ashok Dwivedi</span>
          </h1>
          <div className="mt-10">
            <Link href={"/services"}>
              <Button
                borderRadius="1.75rem"
                className="btn-header bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Hero
