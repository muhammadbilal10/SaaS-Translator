"use client";

import React from "react";
import { Button } from "./ui/button";

const CheckoutButton = async () => {
  const createCheckoutSession = async () => {};

  return (
    <div>
      <Button className="w-full mt-6" onClick={() => createCheckoutSession()}>
        Sign Up
      </Button>
    </div>
  );
};

export default CheckoutButton;
