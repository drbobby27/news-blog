<template>
  <div class="flex flex-col min-h-screen">
    <navbar-comp />
    <main class="flex-grow overflow-y-auto">
      <slot />
    </main>
    <footer-comp />
  </div>
</template>