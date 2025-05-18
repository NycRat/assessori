import { Component } from "solid-js";

const HomePage: Component = () => {
  return (
    <main class="w-full h-screen flex justify-center items-center">
      <a
        href="https://github.com/nycrat/assessori"
        class="text-muted-foreground underline hover:text-muted-foreground/80 text-lg"
      >
        repo
      </a>
    </main>
  );
};

export default HomePage;
