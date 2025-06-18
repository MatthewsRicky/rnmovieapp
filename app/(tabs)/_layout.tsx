import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
