'use client'

import React from 'react'
import { CardItem } from '@/app/contact/page';
import { Box, Card, Flex, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";

function ContactCard({
  item,
}: {
  item: CardItem;
}) {
  return (
    <Link href={item.href}>
      <Card size="3">
        <Flex>
          <Inset side="left" mr="5">
            <Flex
              align="center"
              justify="center"
              px="7"
              style={{ background: '#24292F', height: '100%' }}
            >
              {item.icon}
            </Flex>
          </Inset>

          <Box style={{ maxWidth: 400 }}>
            <Text as="div" color="gray" mb="1" size="2">
              {item.label}
            </Text>
            <Text size="5">
              {item.handle}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Link>
  )
}

export default ContactCard