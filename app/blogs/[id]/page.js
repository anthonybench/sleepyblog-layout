import Image from 'next/image';
import Link from 'next/link';

export default function Page({ params }) {
  return (
    <main>
      <div>
        TODO: blog view <br />
        Blog {params.id}
      </div>
    </main>
  );
}
