<script>
import {
    Chart,
    DoughnutController,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Legend,
    Title,
    Tooltip,
    SubTitle,
} from "chart.js";
import { Doughnut, Bar } from "vue-chartjs";

Chart.register(
    DoughnutController,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    SubTitle,
    Legend,
);

Chart.defaults.color = "black";

export default {
    data() {
        return {
            id: useId(),
            DoughnutData: {
                title: "test",
                datasets: [
                    {
                        data: [200, 50],
                        backgroundColor: ["red", "green"],
                    },
                ],
                labels: ["test", "mono"],
            },

            options: {
                plugins: {
                    legend: {
                        display: true,
                    },
                    title: {
                        display: true,
                        text: "Custom Chart Title",
                    },
                },
            },

            BarData: {
                title: "mode",
                labels: [
                    "janeiro",
                    "fevereiro",
                    "marco",
                    "abril",
                    "maio",
                    "junio",
                    "julio",
                    "agosto",
                    "setembro",
                    "outubro",
                    "novembro",
                    "dezembro",
                ],

                datasets: [
                    {
                        data: [10, 14, 20, 30, 10, 14, 20, 31, 14, 20, 30, 45],
                        backgroundColor: [
                            "red",
                            "blue",
                            "pink",
                            "gray",
                            "orange",
                            "cian",
                            "green",
                        ],
                        borderColor: "white",
                        borderWidth: 2,
                        borderRadius: 3,
                        color: "blue",
                    },
                ],
            },

            BarOptions: {
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                        title: {
                            display: true,
                            text: "Custom Chart Title",
                        },
                    },
                },
            },
        };
    },
    mounted() {
        useWebsiteStore().currentPage = this.$route.name;
    },
    components: { Doughnut, Bar },
};
</script>
<template>
    <main class="grid grid-cols-4 gap-10 p-5">
        <AppPanel title_panel="Title panel" class="col-span-3 row-span-2">
            <Bar :data="BarData" :options="BarOptions.options" />
        </AppPanel>

        <AppPanel title_panel="Title panel">
            <Doughnut :data="DoughnutData" :options="options" />
        </AppPanel>
    </main>
</template>
