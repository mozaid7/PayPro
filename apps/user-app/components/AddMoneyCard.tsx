"use client";

import { useState } from "react";
import { useRouter } from "next/router"; // For handling redirection
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textinput";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com",
  },
];

export const AddMoney = () => {
  const [amount, setAmount] = useState(""); // To manage the amount input
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl); // Initially set to HDFC
  const router = useRouter(); // Next.js router for navigation

  // Handler for amount input change
  const handleAmountChange = (value: string) => {
    setAmount(value); // Set the amount to state
  };

  // Handle bank selection
  const handleBankSelect = (value: string) => {
    const selectedBank = SUPPORTED_BANKS.find((x) => x.name === value);
    setRedirectUrl(selectedBank?.redirectUrl || ""); // Update redirect URL based on selected bank
  };

  // Handle "Add Money" button click
  const handleAddMoneyClick = () => {
    if (redirectUrl && amount) {
      router.push(redirectUrl); // Navigate to the bank's URL
    } else {
      console.error("No redirect URL or amount entered.");
      // Optionally show an error message to the user
    }
  };

  return (
    <Card title="Add Money">
      <div className="w-full">
        <TextInput
          label={"Amount"}
          placeholder={"Enter Amount"}
          value={amount} // Bind amount state to TextInput
          onChange={handleAmountChange} // Handle change in amount
        />
        <div className="py-4 text-left">Bank</div>
        <Select
          onSelect={handleBankSelect}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-4">
          <Button onClick={handleAddMoneyClick}>Add Money</Button>
        </div>
      </div>
    </Card>
  );
};
