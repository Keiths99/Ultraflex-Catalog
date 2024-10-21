"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

const anatomicalSegments = ['Elbow', 'Wrist', 'Hand', 'Fingers'];

const products = [
  { name: 'ElbowFlex Pro', description: 'Dynamic elbow support for various conditions', segments: ['Elbow'] },
  { name: 'TennisElbow Relief', description: 'Specialized orthotic for tennis elbow', segments: ['Elbow'] },
  { name: 'UlnarGuard', description: 'Protective brace for ulnar nerve issues', segments: ['Elbow'] },
  { name: 'CarpalEase', description: 'Ergonomic wrist support for carpal tunnel syndrome', segments: ['Wrist'] },
  { name: 'WristStabil-X', description: 'High-stability wrist brace for sports', segments: ['Wrist'] },
  { name: 'FlexiWrist Comfort', description: 'Lightweight wrist support for daily use', segments: ['Wrist'] },
  { name: 'ArthriGrip', description: 'MCP joint support for arthritis patients', segments: ['Hand', 'Fingers'] },
  { name: 'DigiFlex Pro', description: 'Individual finger joint orthotics', segments: ['Fingers'] },
  { name: 'HandMaster', description: 'Comprehensive hand and MCP support system', segments: ['Hand', 'Fingers'] },
];

export default function UpperExtremityCatalog() {
  const [selectedSegments, setSelectedSegments] = useState(anatomicalSegments);

  const handleSegmentChange = (segment: string) => {
    setSelectedSegments(prev =>
      prev.includes(segment)
        ? prev.filter(s => s !== segment)
        : [...prev, segment]
    );
  };

  const filteredProducts = products.filter(product =>
    product.segments.some(segment => selectedSegments.includes(segment))
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-end">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter Products
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter by Anatomical Segment</SheetTitle>
              <SheetDescription>
                Select the anatomical segments you're interested in.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              {anatomicalSegments.map(segment => (
                <div key={segment} className="flex items-center space-x-2">
                  <Checkbox
                    id={segment}
                    checked={selectedSegments.includes(segment)}
                    onCheckedChange={() => handleSegmentChange(segment)}
                  />
                  <Label htmlFor={segment}>{segment}</Label>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Anatomical Segments:</p>
              <ul className="list-disc pl-5">
                {product.segments.map(segment => (
                  <li key={segment}>{segment}</li>
                ))}
              </ul>
              <ul className="list-disc pl-5 mt-2">
                <li>Precision-engineered for targeted support</li>
                <li>Adjustable compression levels</li>
                <li>Breathable, hypoallergenic materials</li>
                <li>Easy to put on and remove</li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}