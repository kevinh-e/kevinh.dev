"use client"

import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

export const DevCallout = () => {
  return (
    <div className="absolute h-0">
      <Callout.Root size="2" variant="outline">
        <Callout.Icon >
          <InfoCircledIcon color="gray" />
        </Callout.Icon>
        <Callout.Text color="gray">
          This site is still under development.
        </Callout.Text>
      </Callout.Root>
    </div>
  )
};

