'use client';
import React, { useState } from 'react';
import Decimal from 'decimal.js';
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

type Props = {};

function DecimalCalculator({}: Props) {
  const [numberA, setNumberA] = useState('');
  const [decimalPlacesB, setDecimalPlacesB] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    try {
      const A = new Decimal(numberA);
      const B = new Decimal(10).pow(decimalPlacesB);
      const answer = A.times(B).toFixed(); // This converts the result to a string without scientific notation
      setResult(answer);
    } catch (error) {
      setResult('Invalid input');
    }
  };

  return (
    <div className="w-full">
      <div
        className="w-full flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <Card className="w-full flex justify-center bg-white shadow-none rounded-lg p-10 border-0 ">
          <div className="max-w-xl w-full">
            <CardContent>
              <CardTitle className="text-2xl font-semibold mb-6">Calculate Decimal</CardTitle>
              <CardDescription className="text-foreground mb-12 font-semibold">
                "Human readable number" X 1e"Decimals" = ?
              </CardDescription>
              <div className="mb-4">
                <Label htmlFor="numberA" className="block text-sm font-medium text-gray-700">
                  Human readable number:
                </Label>
                <Input
                  id="numberA"
                  type="text"
                  value={numberA}
                  onChange={(e) => setNumberA(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="decimalPlacesB" className="block text-sm font-medium text-gray-700">
                  Decimals:
                </Label>
                <Input
                  id="decimalPlacesB"
                  type="text"
                  value={decimalPlacesB}
                  onChange={(e) => setDecimalPlacesB(e.target.value)}
                  className="mt-1 block w-full"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 ">
              <Button onClick={handleCalculate} className="px-8 text-white py-2  rounded">
                Calculate
              </Button>
              <div>
                <h3 className="text-lg font-medium">Answer:</h3>
                <p className="text-gray-700">{result}</p>
              </div>
            </CardFooter>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default DecimalCalculator;
