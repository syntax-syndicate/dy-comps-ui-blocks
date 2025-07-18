import {
  FaApple,
  FaDiscord,
  FaRedditAlien,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa"

import { Separator } from "@/components/ui/separator"

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
]

const Footer1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <img
              src="/logos/shadcn-ui.svg"
              alt="logo"
              className="mb-8 mr-auto h-7 md:mb-0"
            />
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <p className="text-lg font-medium">
                Copy the code and make it yours.
              </p>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="bg-primary inline-flex items-center justify-center rounded-lg p-2.5"
                >
                  <FaApple className="text-background size-7" />
                </a>
                <a
                  href="#"
                  className="bg-primary inline-flex items-center justify-center rounded-lg p-2.5"
                >
                  <img
                    src="images/icons/google-play-icon.svg"
                    className="text-background size-6"
                    alt="google play"
                  />
                </a>
              </div>
            </div>
          </div>
          <Separator className="my-14" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 font-bold">Legal</h3>
              <ul className="text-muted-foreground space-y-4">
                <li className="hover:text-primary font-medium">
                  <a href="#">Term of Services</a>
                </li>
                <li className="hover:text-primary font-medium">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <h3 className="mb-4 mt-8 font-bold">Social</h3>
              <ul className="text-muted-foreground flex items-center space-x-6">
                <li className="hover:text-primary font-medium">
                  <a href="#">
                    <FaDiscord className="size-6" />
                  </a>
                </li>
                <li className="hover:text-primary font-medium">
                  <a href="#">
                    <FaRedditAlien className="size-6" />
                  </a>
                </li>
                <li className="hover:text-primary font-medium">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="hover:text-primary font-medium">
                  <a href="#">
                    <FaTelegramPlane className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-14" />
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Dy Comps. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Footer1
