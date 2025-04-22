"use client";

import * as Tabs from "@radix-ui/react-tabs";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabNavigatorProps {
  tabs: Tab[];
}

export default function TabNavigator({ tabs }: TabNavigatorProps) {
  const defaultTab = tabs[0]?.label || "";

  return (
    <Tabs.Root defaultValue={defaultTab} className="w-full">
      <Tabs.List
        className="flex border-b border-gray-200 mb-4"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.label}
            value={tab.label}
            className="py-4 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 data-[state=active]:text-[#0E9696] data-[state=active]:border-[#0E9696] transition-colors"
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {tabs.map((tab) => (
        <Tabs.Content key={tab.label} value={tab.label} className="mt-2">
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
