<template :class="$colorMode.value">
  <div class="min-h-screen dark:bg-gray-950 dark:text-white">
    <ThemeSwitcher />
    <slot />
    <FooterComponent />
  </div>
</template>
