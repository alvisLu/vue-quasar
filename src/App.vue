<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="amber" glossy label="Amber" />
      <q-btn color="brown-5" label="Brown 5" />
      <q-btn color="deep-orange" glossy label="Deep Orange" />
      <q-btn color="purple" label="Purple" />
      <q-btn color="black" label="Black" />
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" icon="mail" label="On Left" />
      <q-btn color="secondary" icon-right="mail" label="On Right" />
      <q-btn
        color="red"
        icon="mail"
        icon-right="send"
        label="On Left and Right"
      />
      <br />
      <q-btn icon="phone" label="Stacked" stack glossy color="purple" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
