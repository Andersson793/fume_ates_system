<script>
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from "@headlessui/vue";
import {
    CircleEllipsis,
    Ellipsis,
    LucideEclipse,
    BirdIcon,
    Plus,
} from "lucide-vue-next";

export default {
    data() {
        return {
            form: {
                combobox: {
                    value: "",
                    query: "",
                    items: [
                        "model",
                        "test",
                        "mono",
                        "pong",
                        "ping",
                        "meta",
                        "mutant",
                        "motor",
                    ],
                },
                price: "",
                items: {
                    items: [],
                    total: "",
                },
                date: "",
                description: "",
            },
        };
    },
    mounted() {
        useWebsiteStore().currentPage = "home";
    },
    computed: {
        filteredItems() {
            if (this.form.combobox.value) {
                return this.form.combobox.items.slice(0, 5);
            } else {
                const filtered = this.form.combobox.items.filter((item) =>
                    item
                        .toLowerCase()
                        .includes(this.form.combobox.query.toLowerCase()),
                );

                return filtered.slice(0, 5);
            }
        },

        clearForm() {
            this.form.combobox.value = "";
            this.form.combobox.query = "";
            this.form.price = "";
            this.form.items.items = [];
            this.form.date = "";
        },

        newValue() {
            if (this.form.combobox.query != "") {
                return this.form.combobox.query;
            }
        },

        ItemsGetTotal() {
            let total = 0;

            this.form.items.items.forEach((item) => {
                total += item.price;
            });

            return total;
        },
    },
    methods: {
        addItem() {
            const item = {
                name: this.form.combobox.value,
                price: this.form.price,
            };

            this.form.items.items.push(item);

            this.form.items.total = this.ItemsGetTotal;
            this.form.combobox.value = "";
            this.form.price = "";
        },
    },
    components: {
        CircleEllipsis,
        LucideEclipse,
        Ellipsis,
        BirdIcon,
        Combobox,
        ComboboxInput,
        ComboboxOption,
        ComboboxOptions,
        Plus,
    },
};
</script>
<template>
    <main class="grid grid-cols-5 gap-10 p-5">
        <AppPanel title_panel="Title panel" class="col-span-3 row-span-2">
            <Table />
        </AppPanel>

        <AppPanel title_panel="Title panel" class="col-span-2">
            <div class="col-span-5 flex flex-col px-20">
                <label for="ident" class="mb-2">Item name</label>
                <Combobox v-model="form.combobox.value">
                    <ComboboxInput
                        class="bg-green-100 border-none rounded-sm p-3 text-sm leading-5 text-gray-900 focus:ring-0 mb-10"
                        @change="form.combobox.query = $event.target.value"
                        name="ident"
                    />
                    <ComboboxOptions>
                        <ComboboxOption :value="newValue">
                            Create item: {{ newValue }}
                        </ComboboxOption>
                        <ComboboxOption
                            v-for="item in filteredItems"
                            :value="item"
                            :key="item"
                        >
                            {{ item }}
                        </ComboboxOption>
                    </ComboboxOptions>
                </Combobox>
                <div class="inline-flex items-center mb-10">
                    <input
                        type="number"
                        class="px-2 py-3 w-48 mr-3 rounded-sm"
                        placeholder="R$"
                        v-model="form.price"
                    />
                    <button class="bg-blue-200 rounded-md p-2" @click="addItem">
                        <Plus size="20" />
                    </button>
                </div>

                <div
                    class="bg-fuchsia-200 mb-10"
                    v-show="form.items.items.length > 0"
                >
                    <ul>
                        <li
                            class="bg-red-100 rounded-sm p-2 flex whitespace-nowrap"
                            v-for="item in form.items.items"
                        >
                            <span class="font-bold mr-10 w-full">{{
                                item.name
                            }}</span>
                            <span> {{ item.price }} </span>
                        </li>

                        <li
                            class="bg-red-100 rounded-sm p-2 flex whitespace-nowrap"
                        >
                            <span class="font-bold mr-10 w-full">Total :</span>
                            <span class="font-bold">{{
                                form.items.total
                            }}</span>
                        </li>
                    </ul>
                </div>

                <input
                    type="date"
                    class="px-2 py-3 mb-10 w-48 rounded-sm"
                    v-model="form.date"
                />

                <label for="description" class="mb-2">Description</label>
                <textarea
                    maxlength="120"
                    name="desciption"
                    id="description"
                    class="w-full h-16 resize-none p-1 rounded-sm"
                    v-model="form.description"
                ></textarea>

                <div class="flex justify-end mt-10 mr-5">
                    <button
                        class="bg-rose-900 rounded-md px-3 py-1 text-white mr-10 font-bold"
                        @click="clearForm"
                    >
                        Discarte
                    </button>

                    <AppButton> Save </AppButton>
                </div>
            </div>
        </AppPanel>
    </main>
</template>
