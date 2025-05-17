import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { A } from "@solidjs/router";
import { Component } from "solid-js";

// TODO make sidebar links better
const AppSidebar: Component = () => {
  return (
    <Sidebar variant="floating">
      <SidebarHeader class="p-6 bg-primary text-primary-foreground">
        <h1 class="font-bold text-2xl">assessori 📝</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        {/* <SidebarGroupLabel>Stuff</SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu class="text-center list-inside">
            <SidebarMenuItem class="text-center">
              <SidebarMenuButton
                as={A}
                href={"/assessori/"}
                class="text-center"
              >
                home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as={A} href={"/assessori/woah"}>
                woah
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
