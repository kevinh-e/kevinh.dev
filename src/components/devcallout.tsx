'use client'

import React from 'react'
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout } from "@radix-ui/themes";

const DevCallout = () => {
  return (
    <div className="fixed h-0">
      <Callout.Root size="2" variant="outline">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          This site is still under development.
        </Callout.Text>
      </Callout.Root>
    </div>
  )
}

export default DevCallout
