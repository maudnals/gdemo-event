Demo for [Click Through Conversion Measurement Event-Level API](https://github.com/WICG/conversion-measurement-api).

# About the API

TODO

# Set and run locally

- Run `yarn`
- Run `yarn start` -> you should have 3 servers runnning: 8080 (publisher), 8081 (advertiser), 8000 (adtech)
- Open Chrome Canary
- In Chrome Canary, enable the flags:
  `#enable-experimental-web-platform-features` and `#conversion-measurement-api`
- In Chrome canary, open 3 windows/tabs:
  - chrome://conversions-internals: to see the impressions and conversions the browser stores
  - localhost:8080: the publisher page, wher the add is embedded
  - localhost:8000: the report server UI
- In localhost:8080 (publisher), click the ad. This navigates to the advertiser's page. Click "Add to cart" to convert. In the conversion internals, you should see one impression and one conversion report scheduled.

💡More info about the API and these steps is visible in the UI.
