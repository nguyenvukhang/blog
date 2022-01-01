const google_analytics_measurement_id =
  process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID

const pageview = (url) => {
  if (window && window.gtag) {
    window.gtag('config', google_analytics_measurement_id, {
      page_path: url
    })
  }
}

const event = ({ action, params }) => {
  window.gtag('event', action, params)
}

const ga = {
  pageview,
  event
}

export default ga
