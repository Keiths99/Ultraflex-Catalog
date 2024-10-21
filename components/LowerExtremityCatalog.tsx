"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Filter } from 'lucide-react';

const anatomicalSegments = ['Knee', 'Ankle', 'Foot'];

const products = [
  { name: 'UltraKnee Pro', description: 'Advanced knee support with dynamic stabilization', segments: ['Knee'] },
  { name: 'FlexiKnee Comfort', description: 'Lightweight knee brace for everyday use', segments: ['Knee'] },
  { name: 'PowerKnee Elite', description: 'High-performance knee orthotic for athletes', segments: ['Knee'] },
  { name: 'StabilAnkle', description: 'Ankle support with customizable compression', segments: ['Ankle'] },
  { name: 'ArchMaster Insole', description: 'Custom molded insoles for optimal arch support', segments: ['Foot'] },
  { name: 'ToeAlign Pro', description: 'Corrective orthotic for toe alignment issues', segments: ['Foot'] },
  { name: 'TotalLeg Support', description: 'Comprehensive lower limb orthotic system', segments: ['Knee', 'Ankle', 'Foot'] },
  { name: 'GaitMaster', description: 'Integrated knee-ankle-foot orthosis for gait correction', segments: ['Knee', 'Ankle', 'Foot'] },
  { name: 'PosturePerfect Lower', description: 'Full lower extremity support for posture improvement', segments: ['Knee', 'Ankle', 'Foot'] },
];

export default function LowerExtremityCatalog() {
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
            <Button variant="outline" >
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
                <li>Custom-fitted for optimal comfort</li>
                <li>Made with lightweight, durable materials</li>
                <li>Adjustable support levels</li>
                <li>Breathable design for all-day wear</li>
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}