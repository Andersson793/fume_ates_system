<script>
export default {
    data() {
        return {};
    },
    props: {
        title_panel: String,
    },
};
</script>
<template>
    <div class="bg-red-400 rounded-md">
        <header class="p-3 font-bold">
            <h3>{{ title_panel }}</h3>
        </header>
        <div class="p-5">
            <slot />
        </div>
    </div>
</template>
