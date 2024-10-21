import Link from 'next/link';
import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Activity size={32} />
          <span className="text-xl font-bold">Ultraflex</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/lower-extremity" className="hover:underline">Lower Extremity</Link></li>
            <li><Link href="/upper-extremity" className="hover:underline">Upper Extremity</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}