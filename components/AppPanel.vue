<script>
export default {
    data() {
        return {};
    },
    props: {
        title_panel: String,
        cols: {
            type: Number,
            default: 1,
        },
    },
};
</script>
<template>
    <div class="bg-red-400 rounded-md">
        <header class="p-3 font-bold">
            <h3 v-if="title_panel">{{ title_panel }}</h3>
        </header>
        <div class="grid grid-cols-5 p-5">
            <slot />
        </div>
    </div>
</template>
