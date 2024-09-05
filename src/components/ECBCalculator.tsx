// components/ECBCalculator.tsx
"use client";

import React, { useState } from "react";

const ECBCalculator: React.FC = () => {
  const [plaintext, setPlaintext] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // konvert heksadesimal ke biner
  const hexToBinary = (hex: string): string => {
    return parseInt(hex, 16).toString(2).padStart(4, "0");
  };

  // konvert biner ke heksadesimal
  const binaryToHex = (binary: string): string => {
    return parseInt(binary, 2).toString(16).toUpperCase();
  };

  // OPERASI XOR
  const xor = (a: string, b: string): string => {
    const length = Math.max(a.length, b.length);
    const aBin = a.padStart(length, "0");
    const bBin = b.padStart(length, "0");

    let result = "";
    for (let i = 0; i < length; i++) {
      result += aBin[i] === bBin[i] ? "0" : "1";
    }
    return result;
  };

  // ENKRIPSI ECB
  const encryptECB = () => {
    const blocks = plaintext.split("").map((char) => hexToBinary(char));
    const keyBinary = hexToBinary(key);

    const encryptedBlocks = blocks.map((block) => {
      const xorResult = xor(block, keyBinary);
      const shifted = xorResult.slice(1) + xorResult[0];
      return binaryToHex(shifted);
    });

    setResult(encryptedBlocks.join(""));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Kalkulator ECB - Agas Ananta</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Plaintext (Hex):</label>
        <input
          type="text"
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value.toUpperCase())}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Kunci (Hex):</label>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value.toUpperCase())}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={encryptECB}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
      >
        Encrypt
      </button>
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold">Hasil:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default ECBCalculator;
