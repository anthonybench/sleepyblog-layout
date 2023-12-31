import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import {
  IdentificationIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

const navs = [
  { name: 'About', href: '/about', icon: IdentificationIcon },
  { name: 'Software', href: '/software', icon: CodeBracketIcon },
  { name: 'Tutoring', href: '/tutoring', icon: AcademicCapIcon },
  { name: 'Furniture', href: '/furniture', icon: WrenchScrewdriverIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SideBar() {
  return (
    <div className="text-violet-950">
      <Image src="/img/holo_chan.jpg" alt="sleepyboy technologist asset" width={200} height={200} />

      <nav><ul>
        {navs.map((nav) => (
          <Link key={nav.name} href={nav.href}>
            <li>{nav.name}</li>
          </Link>
        ))}
      </ul></nav>

      <div>
        <Link href="https://github.com/anthonybench/sleepyblog-layout/blob/main/README.md">
          <FontAwesomeIcon className="px-56" icon={faSquareGithub} />
        </Link><br />
        Authored by Isaac Yep,<br />
        <em>Last updated September 30th, 1992</em>
      </div>
    </div>
  )
}
