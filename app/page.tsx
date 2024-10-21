import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold mb-8 text-center">Ultraflex Orthotics</h1>
      <p className="text-xl text-center mb-12">Innovative custom orthotics for enhanced mobility and comfort</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-primary/10 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Lower Extremity</h2>
          <p className="mb-4">Explore our cutting-edge solutions for knee, ankle, and foot support.</p>
          <Link href="/lower-extremity">
            <Button>
              View Catalog <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
        <div className="bg-secondary/10 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-4">Upper Extremity</h2>
          <p className="mb-4">Discover innovative orthotics for elbow, wrist, and MCP joint support.</p>
          <Link href="/upper-extremity">
            <Button>
              View Catalog <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
      
      <section className="text-center">
        <h2 className="text-4xl font-semibold mb-6">Why Choose Ultraflex?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-medium mb-2">Innovative Design</h3>
            <p>Cutting-edge technology for optimal support and comfort</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-2">Custom Fit</h3>
            <p>Tailored to each patient's unique needs and measurements</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-2">Superior Materials</h3>
            <p>High-quality, durable materials for long-lasting performance</p>
          </div>
        </div>
      </section>
    </div>
  );
}