<script>
export default {
    data() {
        return {};
    },
    props: {
        pages: {
            type: Number,
            require: true,
        },
        curerntPage: {
            type: Number,
            default: 0,
        },
        changeCurrentPage: {
            type: Function,
        },
    },
};
</script>
<template>
    <div>
        <span
            v-for="(item, index) in $props.pages"
            class="hover:bg-purple-200 py-2 px-3 mx-2 rounded-md cursor-pointer"
            @click="changeCurrentPage(index)"
        >
            {{ index + 1 }}
        </span>
    </div>
</template>
