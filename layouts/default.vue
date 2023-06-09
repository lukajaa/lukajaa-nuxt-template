<template :class="$colorMode.value">
  <div class="transition duration-300 bg-slate-50 dark:bg-slate-800 dark:text-slate-50">
    <ThemeSwitcher />
    <slot />
    <FooterComponent />
  </div>
</template>
