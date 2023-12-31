import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>
        Hello! I'm Isaac 👋<br />
        I live at the intersection of DevOps & Data.<br />
        I believe code is art, and art is personal.<br />
        I'm a passionate woodworker, skateboarder, and maker of dope pizzas.<br />
        A life long engineer, and professional kid.
      </p>

      <div>
        <span>
          (linkedin badge)
        </span>
        <span>
          <Link href="https://github.com/anthonybench">
            <Image src="/img/github-mark-black.png" alt="github logo" width={50} height={50}/>
          </Link>
        </span>
      </div>

      <p>
        👉 <Link href="/about/resume">View my resume</Link>
      </p>
    </div>
  );
}