const styleObj = {
    "table": () => ({
      className: `mx-0`,
    }),
    "node": () => ({
      className: `px-0 min-w-12`,
    }),
    "nodecell": () => ({
      className: 'px-0',
    }),
    "line-right": ({context}: any) => ({
      className: `text-center align-top py-0 px-0 rounded-none
                  ${context.lineTop ? 'border-t' : ''}
                  dark:border-blue-900/40`,
    }),
    "line-left": ({context}: any) => ({
      className: `text-center align-top py-0 px-0 rounded-none border-r
                  ${context.lineTop ? 'border-t' : ''}
                  dark:border-blue-900/40`,
    }),
    "line-down": {
      className: 'border-r dark:border-blue-900/40',
    },
} 
export default styleObj;