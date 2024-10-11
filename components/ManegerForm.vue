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
    CircleX,
} from "lucide-vue-next";
import AppButton from "~/components/form/AppButton.vue";
import AppMain from "~/components/app/AppMain.vue";
import AppInput from "~/components/form/AppInput.vue";

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
                tags: [],
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
            this.form.description = "";
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

            this.form.combobox.value && this.form.price
                ? this.form.items.items.push(item)
                : alert("The form is empity");

            this.form.items.total = this.ItemsGetTotal;
            this.form.combobox.value = "";
            this.form.price = "";
        },

        addTag(i) {
            if (i != "") this.form.tags.push(i);
        },

        removeTag(index) {
            this.form.tags.splice(index, 1);
        },

        saveForm() {
            this.clearForm();
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
        AppButton,
        AppInput,
        CircleX,
    },
};
</script>
<template>
    <AppPanel title_panel="Title panel" class="col-span-3">
        <div class="flex flex-col">
            <Combobox v-model="form.combobox.value">
                <ComboboxInput
                    class="bg-green-100 border-none rounded-sm p-4 text-sm leading-5 text-gray-900 focus:ring-0 mb-5"
                    @change="form.combobox.query = $event.target.value"
                    name="ident"
                    placeholder="Product"
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

            <input
                type="number"
                class="px-2 py-4 w-48 mr-3 rounded-sm"
                placeholder="Price"
                min="0"
                v-model="form.price"
            />

            <div class="flex justify-end">
                <button
                    class="bg-blue-200 rounded-sm p-3 w-fit inline-flex items-center mt-5 mb-14"
                    @click="addItem"
                >
                    <span class="mr-3">Create new item</span>
                    <Plus size="19" />
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
                        <span class="font-bold">{{ form.items.total }}</span>
                    </li>
                </ul>
            </div>

            <div>
                <label for="">Add tags</label>
                <div class="mt-5 flex">
                    <div
                        v-for="(item, index) in form.tags"
                        :key="index"
                        class="py-2 px-3 rounded-3xl bg-yellow-300 flex items-center justify-center w-fit mx-2"
                    >
                        <small>{{ item }}</small>
                        <div
                            class="w-5 h-5 bg-blue-100 rounded-full flex justify-center items-center cursor-pointer ml-2"
                            @click="removeTag(index)"
                        >
                            <CircleX />
                        </div>
                    </div>
                </div>

                <AppInput placeholder="Add new tag" :action="addTag" />
                <button
                    class="bg-blue-200 rounded-sm p-3 w-fit inline-flex items-center mt-5 mb-14"
                    @click="addTag"
                >
                    <span class="mr-3">Add tag</span> <Plus size="19" />
                </button>
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

            <div class="flex justify-end mt-10">
                <AppButton @click="clearForm" class="bg-rose-900 mr-10">
                    Discart
                </AppButton>
                <AppButton> Save </AppButton>
            </div>
        </div>
    </AppPanel>
</template>
