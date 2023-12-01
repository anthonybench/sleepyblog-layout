import Image from 'next/image';
import Link from 'next/link';

import {
  IdentificationIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#', icon: IdentificationIcon },
  { name: 'Software', href: '#', icon: CodeBracketIcon },
  { name: 'Tutoring', href: '#', icon: AcademicCapIcon },
  { name: 'Furniture', href: '#', icon: WrenchScrewdriverIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function SideBar() {
  return (
    <div>
      <Image />

      <nav>
        {/* TODO: nav links */}
      </nav>
    </div>
  )
}
