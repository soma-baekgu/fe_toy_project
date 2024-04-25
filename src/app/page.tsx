import Link from "next/link";


export default function Home() {
  return (
    <main>
      <ul>
        <li><Link href="/yeongjin">영진</Link></li>
        <li><Link href="/seokmun">석문</Link></li>
        <li><Link href="/seonghwan">승환</Link></li>
      </ul>
    </main>
  );
}
