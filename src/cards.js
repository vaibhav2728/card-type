export default [
  {
    name: 'visa',
    pattern: [
      4
    ]
  },
  {
    name: 'mastercard',
    pattern: [
      [51, 55],
      [2221, 2720]
    ]
  },
  {
    name: 'amex',
    pattern: [
      34,
      37
    ]
  },
  {
    name: 'diners',
    pattern: [
      36,
      309,
      [300, 305],
      [38, 39]
    ]
  },
  {
    name: 'unionpay',
    pattern: [
      62
    ]
  },
  {
    name: 'discover',
    pattern: [
      6011,
      [622126, 622925],
      [644, 649],
      65
    ]
  },
  {
    name: 'jcb',
    pattern: [
      35
    ]
  },
  {
    name: 'maestro',
    pattern: [
      5018,
      502,
      503,
      506,
      56,
      57,
      58,
      639,
      6220,
      67
    ]
  },
  {
    name: 'mastercard',
    pattern: [
      5021
    ]
  },
  {
    name: 'elo',
    pattern: [
      401178,
      401179,
      431274,
      438935,
      451416,
      457393,
      457631,
      457632,
      504175,
      627780,
      636297,
      636297,
      636368,
      [506699, 506778],
      [509000, 509999],
      [650031, 650033],
      [650035, 650051],
      [650405, 650439],
      [650485, 650538],
      [650541, 650598],
      [650700, 650718],
      [650720, 650727],
      [650901, 650920],
      [651652, 651679],
      [655000, 655019],
      [655021, 655058],
      [650921, 650978]
    ]
  },
  {
    name: 'hipercard',
    pattern: [
      384100,
      384140,
      384160,
      /^60(?!11)/,
    ]
  }
]
