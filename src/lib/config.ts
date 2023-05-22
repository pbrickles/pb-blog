import { dev } from '$app/environment'
import { PUBLIC_BASE_URL } from '$env/static/public';

export const title = 'Paul Brickles'
export const description = 'Software Engineer and Tech Lead'
export const url = dev ? 'http://localhost:5173/' : PUBLIC_BASE_URL
