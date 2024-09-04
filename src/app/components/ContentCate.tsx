import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button'; 

const ContentCate = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
      {pathname.includes('/categories/Tea') && (
        <>
         
          <Card>
            <CardHeader>
              <CardTitle>Tea Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-40">
                <Image src="/images/tea.png" alt="Tea product" fill className="object-contain" />
              </div>
              <p>Details about tea product</p>
              <CardDescription>
                Information about various tea flavors and types.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-end">
              <Button>Add Tea</Button>
            </CardFooter>
          </Card>
        </>
      )}
      {pathname.includes('/categories/Juice') && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Juice Product</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full h-40">
                <Image src="/images/juice.png" alt="Juice product" fill className="object-contain" />
              </div>
              <p>Details about juice product</p>
              <CardDescription>
                Information about various juice flavors and types.
              </CardDescription>
            </CardContent>
            <CardFooter className="justify-end">
              <Button>Add Juice</Button>
            </CardFooter>
          </Card>
        </>
      )}
    </div>
  );
};

export default ContentCate;
