import ReactGA from 'react-ga'

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const initGA = () => {
  const isProduction = process.env.NODE_ENV === 'production'
  ReactGA.initialize(GA_TRACKING_ID, { debug: !isProduction })
  ReactGA.set({ anonymizeIp: true })
}
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}
export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}