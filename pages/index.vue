<template>
    <AppMain>
        <AppPanel title_panel="Title panel" class="col-span-5">
            <AppTable />
        </AppPanel>

        <AppPanel title_panel="Alerts" class="col-span-3">

            <div v-if='true'>
                <AlertItem/>
            </div>

            <div v-else class="h-max w-max bg-gray-200 rounded-md">
                Nothing here !
            </div>
        </AppPanel>
    </AppMain>
</template>
