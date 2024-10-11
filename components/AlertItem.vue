<script>
import { X } from "lucide-vue-next";

export default {
    props: {
        user: {
            type: String,
            default: "user undefined",
        },
        date: {
            type: String,
        },
        body: {
            type: String,
            default: "",
        },
    },
    components: { X },
};
</script>
<template>
    <div class="bg-green-200 p-1 rounded-sm mb-10">
        <div class="flex justify-end items-center py-1.5 text-sm">
            <span>
                {{ $props.date }}
            </span>
            <span class="mx-5">
                {{ $props.user }}
            </span>
            <span class="cursor-pointer">
                <X size="22" />
            </span>
        </div>
        <div class="p-2 bg-blue-200 rounded-md">
            <p>{{ $props.body }}</p>
        </div>
    </div>
</template>
