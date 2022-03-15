const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: theme => ({
        'base-img': "url('http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg')",
       }),
       height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/6": "calc(100vh - 100px)",
        "screen/7": "calc(100vh - 170px)",
        "screen/8": "calc(100vh - 147px)",
        "screen/9": "calc(100vh - 220px)",
        "modal-h":"-webkit-fill-available"
      }),
      width: theme => ({
        "screen/2": "32rem",
        "modal-w":"-webkit-fill-available"
      }),
      top:theme =>({
        "md":"17.3rem",
        "tab-top":"4.59rem"
      }),
      transitionProperty: {
        'width': 'width',
        'height':'height',
        'bottom':'bottom',
        'top':'top',
        'block':'block'
      },
    },
  },
  variants: {
    extend: {
       paddingLeft: ['first'],
       paddingRight:['last'],
       backgroundColor: ['active'],
       outline: ['hover', 'active'],
       display:['group-focus','group-hover'],
       position:['group-hover','group-focus']
    },
  },
  plugins: [plugin(({ addVariant, e }) => {
    addVariant('before', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`before${separator}${className}`)}::before`;
      });
    });
    addVariant('after', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`after${separator}${className}`)}::after`;
      });
    });
  }),
  plugin(({ addUtilities }) => {
    const contentUtilities = {
      '.content': {
        content: 'attr(data-content)',
      },
      '.content-before': {
        content: 'attr(data-before)',
      },
      '.content-after': {
        content: 'attr(data-after)',
      },
    };

    addUtilities(contentUtilities, ['before', 'after']);
  }),],
}
