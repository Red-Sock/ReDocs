import { hookstate } from '@hookstate/core';

// TODO расписать базовую страницу с документацией по запуску и началу
const basicContent = `
# RedSock Markdown based documentation service
`

export const currentContent = hookstate(basicContent);

