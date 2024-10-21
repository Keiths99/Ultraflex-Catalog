"use client";

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const categories = {
  'Lower Extremity': ['Knee', 'Ankle', 'Foot'],
  'Upper Extremity': ['Elbow', 'Wrist', 'MCP'],
};

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([extremity, subCategories]) => (
        <section key={extremity} id={extremity.toLowerCase().replace(' ', '-')}>
          <h2 className="text-3xl font-semibold mb-4">{extremity}</h2>
          <Accordion type="single" collapsible className="w-full">
            {subCategories.map((category) => (
              <AccordionItem key={category} value={category}>
                <AccordionTrigger className="text-xl">{category}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <Card key={item} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle>{`${category} Orthotic ${item}`}</CardTitle>
                          <CardDescription>Custom fabricated for optimal support</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Tailored to individual patient needs</p>
                          <p>High-quality materials for durability</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      ))}
    </div>
  );
}