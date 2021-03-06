import React from "react";
import {
  ActionIcon,
  Group,
  useMantineColorScheme
} from "@mantine/core";
import {
  SunIcon,
  MoonIcon
} from "@modulz/radix-icons";

export default function ColorSchemeToggle() {
  const {
    colorScheme,
    toggleColorScheme
  } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        aria-label="Toggle color scheme"
        onClick={() => toggleColorScheme()}
        size="lg"
        sx={(theme) => ({
          backgroundColor: "transparent",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2],
          },
        })}
      >
        {colorScheme === "dark"
          ? (
            <SunIcon
              width={20}
              height={20}
            />
          ) : (
            <MoonIcon
              width={20}
              height={20}
            />
          )}
      </ActionIcon>
    </Group>
  );
}
