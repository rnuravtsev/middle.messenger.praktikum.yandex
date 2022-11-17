document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.field__input')

    const toggleLabelClass = (input, label, className = 'field__label_shrink') => {
        if (input.value || document.activeElement === input) {
            label.classList.add(className)
        } else {
            label.classList.remove(className)
        }
    }

    const shrinkInputLabel = ({ target }) => {
        const label = target.parentElement
        toggleLabelClass(target, label)
    }

    inputs.forEach((el) => el.addEventListener('input', shrinkInputLabel))
    inputs.forEach((el) => el.addEventListener('blur', shrinkInputLabel))
    inputs.forEach((el) => el.addEventListener('focus', shrinkInputLabel))
})
