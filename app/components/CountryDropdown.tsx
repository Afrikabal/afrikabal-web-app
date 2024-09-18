"use client";
import { useState } from "react";
import Image from "next/image";
import Global from '@/images/Earth.jpeg'
import Nigeria from '@/images/Nigeria.png'
import Rwanda from '@/images/Rwanda.png'
import Kenya from '@/images/Kenya.png'
import Tanzania from '@/images/Tanzania.png'


const countries = [
  { name: "Global", flag: Global, available: true },
  { name: "Nigeria", flag:Nigeria , available: true },
  { name: "Rwanda", flag:Rwanda , available: true },
  { name: "Kenya", flag:Kenya , available: true },
  { name: "Tanzania", flag: Tanzania, available: false }
];

export default function ProfileDropdown() {
  const [selectedCountry, setSelectedCountry] = useState<string>("Nigeria");

  return (
    <div className="relative group">
      
      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer">
        <Image
          src={countries.find((c) => c.name === selectedCountry)?.flag || Nigeria}
          alt="Selected Country Flag"
          width={32}
          height={20}
          className="w-8 h-5"
        />
      </div>

      
      <div className="absolute top-14 left-0 w-64 p-4 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ul className="space-y-2">
          {countries.map((country) => (
            <li
              key={country.name}
              onClick={() => country.available && setSelectedCountry(country.name)} 
              className={`cursor-pointer p-2 flex  items-center ${!country.available ? "opacity-50" : ""}`}
            >
              <div className="w-8 h-8 p-1 rounded-full flex items-center justify-center border border-solid transition-transform duration-300 hover:scale-110">
               <Image
                 src={country.flag}
                 alt={`${country.name} Flag`}
                 width={16} 
                 height={16} 
                 className="w-6 h-4"
                />
              </div>
              {selectedCountry === country.name && (
    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white" />
  )}
              {!country.available && (
                <span className="ml-auto text-sm text-gray-500">Coming Soon</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
