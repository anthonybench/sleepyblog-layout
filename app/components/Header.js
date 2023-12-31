import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h1 style={{display: "inline-block"}}>SleepyBlog</h1>
      </Link>
      <span>(theme select list)</span>
    </header>
  )
}
