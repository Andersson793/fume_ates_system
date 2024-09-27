<script>
import AppButton from "~/components/form/AppButton.vue";
import AppInput from "~/components/form/AppInput.vue";

export default {
    data() {
        return {
            id: useId(),
        };
    },
    methods: {},
    components: { AppInput, AppButton },
};
</script>
<template>
    <main class="grid grid-cols-4 row-auto gap-10 p-5">
        <AppPanel class="col-span-4">
            <div>
                <AppInput placeholder="User name" value="" label="User name" />
            </div>

            <div>
                <AppButton> Save </AppButton>
            </div>
        </AppPanel>
    </main>
</template>
