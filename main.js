document.addEventListener('DOMContentLoaded', function () {
    const calculator = {
        firstValue: null,
        operator: null,
        secondValue: null
    }
    const display = document.querySelector('#calculator input.form-control')
    const INIT_DISPLAY = '0'
    display.value = INIT_DISPLAY
    let waitingForSecondValue = false
    let current = ''

    const calculating = function (firstValue, operator, secondValue) {
        firstVal = parseInt(firstValue)
        secVal = parseInt(secondValue)

        if (operator == 'plus') current = firstVal + secVal
        if (operator == 'minus') current = firstVal - secVal
        if (operator == 'multiply') current = firstVal * secVal
        if (operator == 'divide') current = firstVal / secVal

        afterCalculate()
    }

    const afterCalculate = function (isClear = '') {
        calculator.firstValue = current
        calculator.operator = null
        calculator.secondValue = null
        waitingForSecondValue = false
    }

    const optionClearDisplay = function (option = '') {
        if (option == 'clearAll') {
            current = INIT_DISPLAY
            calculator.firstValue = null
            calculator.operator = null
            calculator.secondValue = null
            return
        }

        // TODO: undo/redo function
    }

    /*Event click*/
    document.addEventListener('click', function (e) {
        if (e.target.matches('button')) {
            const key = e.target

            const action = key.dataset.action // An function key (operator & another function)
            const func = key.dataset.func
            const keyContent = key.textContent

            if (!action) {
                if (!waitingForSecondValue) {
                    current += keyContent
                    calculator.firstValue = current
                } else {
                    current += keyContent
                    const temp = keyContent
                    calculator.secondValue == null
                        ? calculator.secondValue = temp
                        : calculator.secondValue += temp
                }
            } else {
                if (action == 'equal' && (!calculator.secondValue || !calculator.firstValue || !calculator.operator)) return

                waitingForSecondValue = true
                current += ' ' + keyContent + ' '

                if (!calculator.operator) calculator.operator = action
                else calculating(calculator.firstValue, calculator.operator, calculator.secondValue)
            }


            if (func && func == 'clearAll') optionClearDisplay(func)

            return display.value = current
        }
    })
})

