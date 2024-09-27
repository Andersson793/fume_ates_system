<script>
export default {
    data() {
        return {
            id: useId(),
        };
    },
    props: {
        value: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            defalt: "",
        },
        label: {
            type: String,
        },
    },
};
</script>
<template>
    <div>
        <label v-show="$props.label" :for="id">{{ $props.label }}</label>
        <input
            :id="id"
            :type="$props.type"
            :placeholder="$props.placeholder"
            class="px-2 py-4 w-48 mr-3 rounded-sm mt-3"
            v-model="$props.value"
        />
    </div>
</template>
