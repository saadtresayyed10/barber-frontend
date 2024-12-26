"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function LocationForm() {
  const placeholders = [
    "Check, Choose & Book anywhere in Pune...",
    "Kondhwa Khurd",
    "Kondhwa Budruk",
    "Salunke Vihar",
    "Koregaon Park",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="w-full px-4 text-black font-tartuffo">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
