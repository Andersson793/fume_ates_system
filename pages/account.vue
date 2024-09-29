<script>
import AppMain from "~/components/app/AppMain.vue";
import AppButton from "~/components/form/AppButton.vue";
import AppInput from "~/components/form/AppInput.vue";

export default {
    data() {
        return {
            id: useId(),
        };
    },
    methods: {},
    components: { AppInput, AppButton, AppMain },
};
</script>
<template>
    <AppMain>
        <AppPanel title_panel="Account" class="col-start-3 col-span-2">
            <div>
                <span>Personal data</span>
                <div class="pl-10 mb-16">
                    <AppInput
                        placeholder="Your name"
                        value=""
                        label="User name"
                    />
                    <AppInput
                        placeholder="user@gmail.com"
                        value=""
                        label="User email"
                    />
                </div>

                <span>Change password</span>
                <div class="pl-10">
                    <AppInput
                        placeholder="Password"
                        value=""
                        label="New password"
                        type="password"
                    />

                    <AppInput
                        placeholder="Password"
                        value=""
                        label="Repeat passoword"
                        type="password"
                    />
                </div>

                <div class="flex justify-end mt-16">
                    <AppButton> Change </AppButton>
                </div>
            </div>
        </AppPanel>
    </AppMain>
</template>
