<script>
export default {
    data() {
        return {
            id: useId(),
            inputValue: "",
        };
    },
    props: {
        value: {
            type: String,
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
        },
        label: {
            type: String,
        },
        action: {
            type: Function,
        },
    },
};
</script>
<template>
    <label v-show="$props.label" :for="id">{{ $props.label }}</label>
    <br />
    <input
        :id="id"
        :type="$props.type"
        :placeholder="$props.placeholder"
        class="px-2 py-4 w-full mr-3 rounded-sm mt-3"
        v-model="inputValue"
        @change="action(inputValue)"
    />
</template>
