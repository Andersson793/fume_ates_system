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
        <AppPanel title_panel="User information" class="col-span-2">
            <div>
                <div class='py-5'>
                    <span>User name</span>
                    <p class='text-lg'>andersson793</p>

                </div>
                <div class='py-5'>
                    <span>Email</span>
                    <p class='text-lg'>andersson793@gmail.com</p>

                </div>
                <div class='py-5'>
                    <span>Account</span>
                    <p class='text-lg'>type: Master</p>
                    <p class='text-lg'>last login: 12/12/2001 10:15</p>

                </div>
                
            </div>
        </AppPanel>
        <AppPanel title_panel="Password" class="col-span-2">
            <div>
                <span>Change Password</span>
                <div class="pl-10 mb-16">
                    <AppInput
                    
                        value=""
                        label="New password"
                        type='password'
                    />
                    <AppInput
                        
                        value=""
                        label="Repeat"
                        type='password'
                    />
                </div>
                <AppButton>Chenge</AppButton>
            </div>
        </AppPanel>
    </AppMain>
</template>
