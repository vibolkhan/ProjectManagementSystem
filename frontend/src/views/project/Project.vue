<template>
    <div class="px-4">
        <v-subheader class="d-flex justify-space-between pa-0">
            <h3 class="black--text">Projects</h3>
            <div>
                <v-btn small>
                    <v-icon color="grey">mdi-filter</v-icon>
                </v-btn>
                <v-btn small class="font-weight-medium ml-4 black--text">
                    <v-icon>mdi-plus</v-icon>
                    New project
                </v-btn>
            </div>
        </v-subheader>
        <v-card >
            <v-data-table
            is-centered-table
            :headers="headers"
            :items="desserts"
            :items-per-page="4"
            >
                <template v-slot:[`item.name`]="{ item }">
                    <span >{{item.name}}</span>
                </template>
                <template v-slot:[`item.status`]="{ item }">
                    <span style="color:#00740C; ">{{item.status}}</span>
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon
                    style="font-size: 22px;"
                    small
                    class="mr-4"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                    style="font-size: 22px;"
                    small
                    @click="deleteItem(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "ProjectList",
        data() {
            return {
                headers: [
                    {
                        text: 'Name',
                        align: 'center',
                        sortable: false,
                        value: 'name',
                        class: 'black--text title grey lighten-3'
                    },
                    {text: 'Status', align: 'center', value: 'status', sortable: false, class: 'black--text title grey lighten-3'},
                    { text: 'Action', align: 'center', value: 'actions', sortable: false, class: 'black--text title grey lighten-3'},
                ],
                desserts: [
                    {
                        id:1,
                        name: 'Project name',
                        status: 'On Track',
                        action: {icon_edit: '', icon_delete:''}
                    },
                    {
                        id:2,                        
                        name: 'Project name',
                        status: 'On Track',
                        action: {icon_edit: '', icon_delete:''}
                    },
                    {
                        id:3,                        
                        name: 'Project name',
                        status: 'On Track',
                        action: {icon_edit: '', icon_delete:''}
                    },
                   
                ],
            }
        },
        
        methods: {
        deleteItem (item) {
        this.desserts.splice(this.desserts.indexOf(item, 1))
        },
    },

}
</script>

<style scoped>
    .overlap-icon {
        position: absolute;
        top: -33px;
        text-align: center;
        padding-top: 12px;
    }
</style>