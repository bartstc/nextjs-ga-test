import Page from '../components/Page'
import ReactGA from 'react-ga'

export default function About() {
    const grant = () => {
        ReactGA.set({ anonymizeIp: false })
    }

  return (
    <Page>
      <h1>This is the About page</h1>
        <button onClick={grant}>Dont anonimize</button>
    </Page>
  )
}
