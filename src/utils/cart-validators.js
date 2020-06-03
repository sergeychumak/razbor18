// TODO Уточнить требования по валидации полей
const validators = {
  city (value) {
    switch (true) {
      case (!value.name || !value.name.trim()):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  street (value) {
    switch (true) {
      case (!value.name || !value.name.trim()):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  house (value) {
    switch (true) {
      case (!value.name || !value.name.trim()):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  apartment (value) {
    switch (true) {
      case (isNaN(Number(value))):
        return 'Некорректное значение'
      default:
        return ''
    }
  },

  entrance (value) {
    switch (true) {
      case (isNaN(Number(value))):
        return 'Некорректное значение'
      default:
        return ''
    }
  },

  floor (value) {
    switch (true) {
      case (isNaN(Number(value))):
        return 'Некорректное значение'
      default:
        return ''
    }
  },

  dates () {
    return ''
  },

  date () {
    return ''
  },

  timePeriods () {
    return ''
  },

  time () {
    return ''
  },

  name (value) {
    switch (true) {
      case (!value.length || !value.trim()):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  email (value) {
    const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i
    switch (true) {
      case (!value.length):
        return 'Обязательное поле'
      case !regex.test(value):
        return 'Некорректное значение'
      default:
        return ''
    }
  },

  phone (value) {
    const phoneLength = 18
    switch (true) {
      case (!value.length || !value.trim()):
        return 'Обязательное поле'
      case (value.length !== phoneLength):
        return 'Некорректное значение'
      default:
        return ''
    }
  },

  code (value) {
    const codeSize = 6
    switch (true) {
      case (!value.length || !value.trim()):
        return 'Обязательное поле'
      case (value.length !== codeSize):
        return 'Код содержит 6 цифр'
      default:
        return ''
    }
  },

  surname (value) {
    switch (true) {
      case (!value.length || !value.trim()):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  comment () {
    return ''
  },

  accept (value) {
    switch (true) {
      case (value !== true):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  gender () {
    return ''
  },

  dateBirthday () {
    return ''
  },

  card (value) {
    switch (true) {
      case (!value.length || !value.trim()):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  capcha (value) {
    switch (true) {
      case (!value || !value.trim()):
        return 'Обязательное поле'
      default:
        return ''
    }
  },

  type () {
    return ''
  }
}

export default function validateCartFormValue (key, value) {
  if (validators[key]) {
    const { [key]: validator } = validators
    return validator(value)
  }
  throw new Error('key does not exist')
}
