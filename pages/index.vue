<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
    CircleEllipsis,
    Ellipsis,
    EllipsisVerticalIcon,
    LucideEclipse,
    BirdIcon,
} from "lucide-vue-next";
export default {
    mounted() {
        useWebsiteStore().currentPage = "home";
    },
    components: {
        EllipsisVerticalIcon,
        CircleEllipsis,
        LucideEclipse,
        Ellipsis,
        BirdIcon,
    },
};
</script>
<template>
    <main class="grid grid-cols-2 gap-10 p-5">
        <AppPanel title_panel="Title panel">
            <table class="table-auto bg-blue-200 w-full">
                <thead>
                    <tr>
                        <th
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            #
                        </th>
                        <th
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            Item
                        </th>
                        <th
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            Date
                        </th>
                        <th
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            Time
                        </th>
                        <th
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            Type
                        </th>
                        <th
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            opt
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-pink-100" v-for="item in 10">
                        <td
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            1
                        </td>
                        <td
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            Película fume parabrisa
                        </td>
                        <td
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            12/12/2001
                        </td>
                        <td
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            16:30
                        </td>
                        <td
                            class="font-semibold whitespace-nowrap text-left p-4"
                        >
                            up
                        </td>
                        <td
                            class="fixed font-semibold whitespace-nowrap text-left p-4"
                        >
                            <HeadlessPopover>
                                <HeadlessPopoverButton
                                    class="select-none outline-none"
                                >
                                    <EllipsisVerticalIcon
                                        class="inline-flex items-center"
                                    />
                                </HeadlessPopoverButton>
                                <HeadlessPopoverPanel
                                    class="relative top-2 bg-green-100 grid grid-cols-1 gap-2 p-1 rounded-lg"
                                >
                                    <div
                                        class="hover:bg-pink-100 rounded-md p-2 px-3 cursor-pointer inline-flex items-center"
                                    >
                                        <span class="pr-5">Item 1</span>
                                        <BirdIcon />
                                    </div>

                                    <div
                                        class="hover:bg-pink-100 rounded-md p-3 cursor-pointer inline-flex items-center"
                                    >
                                        <span class="pr-5">Item 1</span>
                                        <BirdIcon />
                                    </div>

                                    <div
                                        class="hover:bg-pink-100 rounded-md p-3 cursor-pointer inline-flex items-center"
                                    >
                                        <span class="pr-5">Item 1</span>
                                        <BirdIcon />
                                    </div>
                                </HeadlessPopoverPanel>
                            </HeadlessPopover>
                        </td>
                    </tr>
                </tbody>
            </table>
        </AppPanel>

        <AppPanel title_panel="Title panel"> add item / remove item </AppPanel>
    </main>
</template>
