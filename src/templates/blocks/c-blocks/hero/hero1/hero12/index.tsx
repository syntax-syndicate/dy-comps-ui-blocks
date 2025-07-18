import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        <div className="absolute inset-x-0 top-0 z-10 flex size-full items-center justify-center opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1125">
            <mask id="b" width={2000} height={1125} x={0} y={0}>
              <path fill="url(#a)" d="M0 0h2000v1125H0z" />
            </mask>
            <path fill="#fff" d="M0 0h2000v1125H0z" />
            <g
              stroke="#eee"
              strokeWidth={0.6}
              mask="url(#b)"
              style={{
                transformOrigin: "center center",
              }}
            >
              <path
                fill="none"
                d="M0 0h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333z"
              />
              <path fill="#eeeeeeaf" d="M444.444 0h111.111v111.111H444.444z" />
              <path
                fill="none"
                d="M555.556 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889zM1000 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 0h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1444.444 0h111.111v111.111h-111.111z" />
              <path
                fill="#eeeeee0b"
                d="M1555.556 0h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1666.667 0h111.111v111.111h-111.111z" />
              <path
                fill="#eeeeeed1"
                d="M1777.778 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 0H2000v111.111h-111.111zM0 111.111h111.111v111.111H0z"
              />
              <path
                fill="#eeeeee1c"
                d="M111.111 111.111h111.111v111.111H111.111z"
              />
              <path fill="none" d="M222.222 111.111h111.111v111.111H222.222z" />
              <path
                fill="#eeeeee2b"
                d="M333.333 111.111h111.111v111.111H333.333z"
              />
              <path
                fill="#eeeeeec2"
                d="M444.444 111.111h111.111v111.111H444.444z"
              />
              <path fill="none" d="M555.556 111.111h111.111v111.111H555.556z" />
              <path
                fill="#eeeeeeef"
                d="M666.667 111.111h111.111v111.111H666.667z"
              />
              <path
                fill="none"
                d="M777.778 111.111h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeee77" d="M1000 111.111h111.111v111.111H1000z" />
              <path
                fill="#eeeeeeea"
                d="M1111.111 111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 111.111h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 111.111H2000v111.111h-111.111zM0 222.222h111.111v111.111H0zm111.111 0h111.111v111.111H111.111z"
              />
              <path
                fill="#eeeeeed1"
                d="M222.222 222.222h111.111v111.111H222.222z"
              />
              <path
                fill="none"
                d="M333.333 222.222h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeee04"
                d="M777.778 222.222h111.111v111.111H777.778z"
              />
              <path
                fill="#eeeeee1f"
                d="M888.889 222.222H1000v111.111H888.889z"
              />
              <path fill="none" d="M1000 222.222h111.111v111.111H1000z" />
              <path
                fill="#eeeeeeb1"
                d="M1111.111 222.222h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 222.222h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 222.222h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 222.222h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee47"
                d="M1888.889 222.222H2000v111.111h-111.111z"
              />
              <path fill="#eeeeeed0" d="M0 333.333h111.111v111.111H0z" />
              <path
                fill="#eeeeeea6"
                d="M111.111 333.333h111.111v111.111H111.111z"
              />
              <path fill="none" d="M222.222 333.333h111.111v111.111H222.222z" />
              <path
                fill="#eeeeeebd"
                d="M333.333 333.333h111.111v111.111H333.333z"
              />
              <path fill="none" d="M444.444 333.333h111.111v111.111H444.444z" />
              <path
                fill="#eeeeee72"
                d="M555.556 333.333h111.111v111.111H555.556z"
              />
              <path
                fill="none"
                d="M666.667 333.333h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeee58" d="M1000 333.333h111.111v111.111H1000z" />
              <path
                fill="none"
                d="M1111.111 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 333.333h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeed7"
                d="M1555.556 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee57"
                d="M1666.667 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee75"
                d="M1777.778 333.333h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeebf"
                d="M1888.889 333.333H2000v111.111h-111.111z"
              />
              <path fill="#eeeeee16" d="M0 444.444h111.111v111.111H0z" />
              <path
                fill="none"
                d="M111.111 444.444h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778z"
              />
              <path
                fill="#eeeeee5b"
                d="M888.889 444.444H1000v111.111H888.889z"
              />
              <path
                fill="none"
                d="M1000 444.444h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeefb"
                d="M1222.222 444.444h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1333.333 444.444h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 444.444h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 444.444h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 444.444H2000v111.111h-111.111zM0 555.556h111.111v111.111H0z"
              />
              <path
                fill="#eeeeee9e"
                d="M111.111 555.556h111.111v111.111H111.111z"
              />
              <path
                fill="#eeeeeef4"
                d="M222.222 555.556h111.111v111.111H222.222z"
              />
              <path
                fill="none"
                d="M333.333 555.556h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeee87"
                d="M777.778 555.556h111.111v111.111H777.778z"
              />
              <path
                fill="none"
                d="M888.889 555.556H1000v111.111H888.889zm111.111 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 555.556h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeed4"
                d="M1444.444 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1555.556 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeec"
                d="M1666.667 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1777.778 555.556h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeece"
                d="M1888.889 555.556H2000v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M0 666.667h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222z"
              />
              <path
                fill="#eeeeeebd"
                d="M333.333 666.667h111.111v111.111H333.333z"
              />
              <path
                fill="#eeeeeec7"
                d="M444.444 666.667h111.111v111.111H444.444z"
              />
              <path
                fill="#eeeeee2a"
                d="M555.556 666.667h111.111v111.111H555.556z"
              />
              <path
                fill="#eeeeee24"
                d="M666.667 666.667h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeeedd"
                d="M777.778 666.667h111.111v111.111H777.778z"
              />
              <path
                fill="none"
                d="M888.889 666.667H1000v111.111H888.889zm111.111 0h111.111v111.111H1000zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee9a"
                d="M1222.222 666.667h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1333.333 666.667h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 666.667h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1666.667 666.667h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee12"
                d="M1888.889 666.667H2000v111.111h-111.111z"
              />
              <path fill="none" d="M0 777.778h111.111v111.111H0z" />
              <path
                fill="#eeeeee68"
                d="M111.111 777.778h111.111v111.111H111.111z"
              />
              <path
                fill="#eeeeee69"
                d="M222.222 777.778h111.111v111.111H222.222z"
              />
              <path
                fill="none"
                d="M333.333 777.778h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667zm111.111 0h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeee46" d="M1000 777.778h111.111v111.111H1000z" />
              <path
                fill="none"
                d="M1111.111 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee0d"
                d="M1222.222 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeda"
                d="M1333.333 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee60"
                d="M1444.444 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1555.556 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee09"
                d="M1666.667 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee2d"
                d="M1777.778 777.778h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1888.889 777.778H2000v111.111h-111.111zM0 888.889h111.111V1000H0z"
              />
              <path
                fill="#eeeeee1b"
                d="M111.111 888.889h111.111V1000H111.111z"
              />
              <path
                fill="#eeeeee05"
                d="M222.222 888.889h111.111V1000H222.222z"
              />
              <path
                fill="#eeeeee5d"
                d="M333.333 888.889h111.111V1000H333.333z"
              />
              <path fill="none" d="M444.444 888.889h111.111V1000H444.444z" />
              <path
                fill="#eeeeeefd"
                d="M555.556 888.889h111.111V1000H555.556z"
              />
              <path fill="none" d="M666.667 888.889h111.111V1000H666.667z" />
              <path
                fill="#eeeeee14"
                d="M777.778 888.889h111.111V1000H777.778z"
              />
              <path fill="#eeeeee2b" d="M888.889 888.889H1000V1000H888.889z" />
              <path
                fill="#eeeeee11"
                d="M1000 888.889h111.111V1000H1000zm111.111 0h111.111V1000h-111.111z"
              />
              <path fill="none" d="M1222.222 888.889h111.111V1000h-111.111z" />
              <path
                fill="#eeeeeecb"
                d="M1333.333 888.889h111.111V1000h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 888.889h111.111V1000h-111.111zm111.112 0h111.111V1000h-111.111z"
              />
              <path fill="none" d="M1666.667 888.889h111.111V1000h-111.111z" />
              <path
                fill="#eeeeee2f"
                d="M1777.778 888.889h111.111V1000h-111.111z"
              />
              <path
                fill="#eeeeeeec"
                d="M1888.889 888.889H2000V1000h-111.111z"
              />
              <path
                fill="none"
                d="M0 1000h111.111v111.111H0zm111.111 0h111.111v111.111H111.111zm111.111 0h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556z"
              />
              <path
                fill="#eeeeeef0"
                d="M666.667 1000h111.111v111.111H666.667z"
              />
              <path
                fill="none"
                d="M777.778 1000h111.111v111.111H777.778zm111.111 0H1000v111.111H888.889z"
              />
              <path fill="#eeeeeef0" d="M1000 1000h111.111v111.111H1000z" />
              <path
                fill="#eeeeeea8"
                d="M1111.111 1000h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeecf"
                d="M1222.222 1000h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1333.333 1000h111.111v111.111h-111.111z" />
              <path fill="none" d="M1444.444 1000h111.111v111.111h-111.111z" />
              <path
                fill="#eeeeeede"
                d="M1555.556 1000h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeee29"
                d="M1666.667 1000h111.111v111.111h-111.111z"
              />
              <path fill="none" d="M1777.778 1000h111.111v111.111h-111.111z" />
              <path fill="none" d="M1888.889 1000H2000v111.111h-111.111z" />
              <path fill="#eeeeeefd" d="M0 1111.111h111.111v111.111H0z" />
              <path
                fill="#eeeeee48"
                d="M111.111 1111.111h111.111v111.111H111.111z"
              />
              <path
                fill="none"
                d="M222.222 1111.111h111.111v111.111H222.222zm111.111 0h111.111v111.111H333.333zm111.111 0h111.111v111.111H444.444zm111.112 0h111.111v111.111H555.556zm111.111 0h111.111v111.111H666.667z"
              />
              <path
                fill="#eeeeee6d"
                d="M777.778 1111.111h111.111v111.111H777.778z"
              />
              <path
                fill="none"
                d="M888.889 1111.111H1000v111.111H888.889zm111.111 0h111.111v111.111H1000z"
              />
              <path
                fill="#eeeeeee4"
                d="M1111.111 1111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1222.222 1111.111h111.111v111.111h-111.111zm111.111 0h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1444.444 1111.111h111.111v111.111h-111.111zm111.112 0h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeb8"
                d="M1666.667 1111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="none"
                d="M1777.778 1111.111h111.111v111.111h-111.111z"
              />
              <path
                fill="#eeeeeeea"
                d="M1888.889 1111.111H2000v111.111h-111.111z"
              />
            </g>
            <defs>
              <radialGradient id="a">
                <stop offset={0} stopColor="#fff" />
                <stop offset={1} stopColor="#fff" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            <img
              src="https://placehold.co/900/transparent/005661?text=D&font=poppins.svg"
              alt="logo"
              className="h-16"
            />
            <Badge variant="outline">UI Blocks</Badge>
            <div>
              <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                Build your next project with Blocks
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-4">
              <p className="text-center: text-muted-foreground lg:text-left">
                Built with open-source technologies
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="/logos/shadcn-ui-small.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="/logos/typescript-small.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>

                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="/logos/react-icon.svg"
                    alt="company logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group px-3",
                  )}
                >
                  <img
                    src="/logos/tailwind-small.svg"
                    alt="company logo"
                    className="h-4 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero12
