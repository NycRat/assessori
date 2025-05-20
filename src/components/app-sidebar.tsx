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
  SidebarRail,
} from "@/components/ui/sidebar";
import { A } from "@solidjs/router";
import { Component } from "solid-js";

const AppSidebar: Component = () => {
  return (
    <Sidebar variant="floating">
      <SidebarRail />
      <SidebarHeader class="p-6 bg-primary text-primary-foreground">
        <h1 class="font-bold text-2xl">assessori 📝</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        {/* <SidebarGroupLabel>Stuff</SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu class="px-6">
            <SidebarMenuItem>
              <SidebarMenuButton as={A} href={"/"}>
                home
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as={A} href={"/compose"}>
                compose
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton as={A} href={"/source"}>
                source
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
