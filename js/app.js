const vue = new Vue({
    el: '#app',
    data: {
        items: [],
        newTodoTitle: ''
    },
    methods: {
        addTodo: function (title) {
            this.items.push({
                title: title,
                isChecked: false
            });
            this.newTodoTitle = '';
        }
    }
})