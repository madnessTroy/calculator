document.addEventListener("DOMContentLoaded", function () {
    const calculator = {
        firstValue: null,
        operator: null,
        secondValue: null,
    }
    const display = document.querySelector('#calculator input.form-control')

    display.value = '0'

    /*Event click*/
    document.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const key = e.target

            const action = key.dataset.action // An function key (operator & another function)
            const keyContent = key.textContent

            if (!action) {
                // Note: 'display' is String
                display.value = display.value == 0 ? keyContent : display.value + keyContent
                return calculator.firstValue = parseInt(display.value)
            } else {
                return display.value = calculator.firstValue + keyContent
            }
        }
    })
})

