<script lang="jsx">
import { Switch } from "@headlessui/vue";
import {
    BoltIcon,
    ChartScatterIcon,
    ChartSplineIcon,
    HomeIcon,
    UserSearchIcon,
} from "lucide-vue-next";
export default {
    data() {
        return {
            enabled: true,
            menuItems: [
                { icon: "asd", text: "Home" },
                { icon: "asd", text: "Dashboard" },
                { icon: "asd", text: "Config" },
                { icon: "aasd", text: "Admin" },
            ],
        };
    },
    beforeMount() {
        // Use SSR-safe IDs for Headless UI
        provideHeadlessUseId(() => useId());
    },
    components: {
        Switch,
        HomeIcon,
        ChartSplineIcon,
        BoltIcon,
        UserSearchIcon,
    },
};
</script>
<template>
    <div class="grid grid-cols-7 max-w-full max-h-full h-full w-full">
        <div class="bg-blue-200">
            <div>
                <div class="bg-blue-300 h-32 flex items-center justify-center">
                    [logo]
                </div>
                <div class="">
                    <ul class="grid grid-cols-1 gap-6 p-4">
                        <MenuItem>
                            <template #icon>
                                <HomeIcon />
                            </template>
                            Home
                        </MenuItem>
                        <MenuItem>
                            <template #icon>
                                <ChartSplineIcon />
                            </template>
                            Dashboard
                        </MenuItem>
                        <MenuItem>
                            <template #icon>
                                <BoltIcon />
                            </template>
                            Configs
                        </MenuItem>
                        <MenuItem>
                            <template #icon>
                                <UserSearchIcon />
                            </template>
                            Root
                        </MenuItem>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bg-red-200 col-span-6">
            <header
                class="bg-red-300 m-2 rounded-md py-5 grid grid-cols-2 px-5"
            >
                <span class="text-lg font-bold">Current Page</span>
                <div class="text-right">12/12/2001</div>
            </header>

            <main class="grid grid-cols-2 gap-10 p-5">
                <div class="bg-red-400 rounded-md h-52">
                    <header class="p-4">panel header</header>
                    <div class="p-4">panel body</div>
                </div>

                <div class="bg-red-400 rounded-md h-52">
                    <header class="p-4">panel header</header>
                    <div class="p-4">panel body</div>
                </div>

                <div class="bg-red-400 rounded-md h-52">
                    <header class="p-4">panel header</header>
                    <div class="p-4">panel body</div>
                </div>

                <div class="bg-red-400 rounded-md h-52">
                    <header class="p-4">panel header</header>
                    <div class="p-4">panel body</div>
                </div>
            </main>
        </div>
    </div>
</template>
