<script>
import { EllipsisVerticalIcon } from "lucide-vue-next";
export default {
    data() {
        return {
            table: {
                headers: ["#", "Item", "Date", "Value", "Status"],
                itemsMenu: [
                    {
                        label: "Item menu",
                        action: null,
                    },
                    {
                        label: "Item menu",
                        action: null,
                    },
                    {
                        label: "Item menu",
                        action: null,
                    },
                ],
            },
        };
    },
    components: { EllipsisVerticalIcon },
};
</script>
<template>
    <table class="table-auto bg-blue-200 col-span-5 row-span-2">
        <thead>
            <tr>
                <th
                    class="font-semibold whitespace-nowrap text-left p-4"
                    v-for="item in table.headers"
                >
                    {{ item }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-pink-100" v-for="item in 10">
                <td class="font-semibold whitespace-nowrap text-left p-4">1</td>
                <td class="font-semibold whitespace-nowrap text-left p-4">
                    Película fume parabrisa
                </td>
                <td class="font-semibold whitespace-nowrap text-left p-4">
                    12/12/2001
                </td>
                <td class="font-semibold whitespace-nowrap text-left p-4">
                    R$ 330,00
                </td>

                <td class="font-semibold whitespace-nowrap text-left p-4">
                    up
                </td>

                <!--

                <td class="fixed font-semibold whitespace-nowrap text-left p-4">
                    <HeadlessPopover>
                        <HeadlessPopoverButton class="select-none outline-none">
                            <EllipsisVerticalIcon
                                class="inline-flex items-center"
                            />
                        </HeadlessPopoverButton>
                        <HeadlessPopoverPanel
                            class="relative top-2 bg-green-100 grid grid-cols-1 gap-1 py-1.5 rounded-lg"
                        >
                            <div
                                class="hover:bg-pink-100 p-2 px-3 cursor-pointer inline-flex items-center w-full"
                                v-for="item in table.itemsMenu"
                            >
                                <span>{{ item.label }}</span>
                            </div>
                        </HeadlessPopoverPanel>
                    </HeadlessPopover>
                </td>

                -->
            </tr>
        </tbody>
    </table>
</template>
