import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    gtag.initGA();
  }, []);

  useEffect(() => {
    router.events.on('routeChangeComplete', gtag.logPageView)
    return () => {
      router.events.off('routeChangeComplete', gtag.logPageView)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
