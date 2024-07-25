const Handlebars = require('handlebars')

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {

        const sortType =
            (field === sort.column &&
                ['asc', 'desc'].includes(sort.type)) ? sort.type : 'asc'

        const icons = {
            asc: 'bi bi-sort-alpha-down',
            desc: 'bi bi-sort-alpha-down-alt'
        }

        const types = {
            asc: 'desc',
            desc: 'asc'
        }

        const type = types[sortType]
        const icon = icons[sortType]

        const href =
            Handlebars.escapeExpression(
                `?_sort&column=${field}&type=${type}`
            )
        const output = `
                <a href="${href}">
                    <i class="${icon}"></i>
                </a>
            `
        return new Handlebars.SafeString(output);
    }
}