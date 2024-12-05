"use client"

import React from "react";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

export const DevCallout = () => {
  return (
    <div className="absolute left-0 right-0 top-20 h-max z-[1000] ">
      <div className="h-max w-max mx-auto">
        <Callout.Root size="2" variant="outline">
          <Callout.Icon >
            <InfoCircledIcon color="gray" />
          </Callout.Icon>
          <Callout.Text color="gray">
            This site is still under development.
          </Callout.Text>
        </Callout.Root>
      </div>
    </div>
  )
};

