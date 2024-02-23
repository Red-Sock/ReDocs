import { hookstate } from '@hookstate/core';

// TODO расписать базовую страницу с документацией по запуску и началу
const basicContent = {
    content: `
# RedSock Markdown based documentation service
`,
    openedPage: '/'
}

export const currentContent = hookstate(basicContent);
