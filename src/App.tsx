import { JSX, Component } from "solid-js";
import { SidebarProvider } from "./components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { RouteSectionProps } from "@solidjs/router";

const App: Component<RouteSectionProps> = (props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      {props.children}
    </SidebarProvider>
  );
};

export default App;
