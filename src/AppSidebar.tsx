import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Component } from "solid-js";

const AppSidebar: Component = () => {
  return (
    <Sidebar>
      <SidebarHeader class="p-6 bg-primary text-primary-foreground">
        <h1 class="font-bold text-2xl">assessori 📝</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        {/* <SidebarGroupLabel>Stuff</SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu></SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
