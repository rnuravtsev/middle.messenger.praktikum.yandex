import { setupServer } from 'msw/node'
import { rest } from 'msw'

const handlers = [
  rest.post(`${process.env.API_ENDPOINT}/auth/logout`, (_req: any, res: any, ctx: any) => {
    console.log('Call logout endpoint')

    return res(ctx.status(200))
  }),
]

export const server = setupServer(...handlers)
