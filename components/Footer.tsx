import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Ultraflex</h3>
          <p>Innovative orthotics for enhanced mobility and comfort. Custom solutions for every patient.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/lower-extremity" className="hover:underline">Lower Extremity</a></li>
            <li><a href="/upper-extremity" className="hover:underline">Upper Extremity</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Email: info@ultraflex.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/20 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> by Ultraflex
          </p>
          <p className="mt-2">&copy; 2024 Ultraflex Orthotics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}