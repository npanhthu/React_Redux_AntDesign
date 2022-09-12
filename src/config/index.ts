
const { VITE_HTTP_BASE, VITE_DEV } = import.meta.env
const PROD = VITE_DEV === 'false'
const isDevelopment = !PROD

const CONFIG = {
  isProduction: PROD,
  isDevelopment,
  baseURL: '/',
  title: 'Tomato Work',
  http: {
    baseURL: VITE_HTTP_BASE as string
  },
  github: {
    clientId: PROD ? '789d87c19dd5ed1dc42e' : '489b39e1f91d934128c8',
    // callbackURL 
    callbackURL: `${PROD ? 'http://113.161.75.255:2004' : window.location.origin}/api/passport/github/callback`,

    repositoryUrl: 'https://github.com/xjh22222228/tomato-work',
    bug: 'https://github.com/xjh22222228/tomato-work/issues'
  }
}

export default CONFIG
