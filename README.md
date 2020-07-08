- Run `yarn`
- Run `yarn start` -> you should have 3 servers runnning: 8080 (publisher), 8081 (advertiser), 8000 (adtech)
- Open Chrome Canary
- In Chrome Canary, enable the flags:
  `#enable-experimental-web-platform-features` and `#conversion-measurement-api`
- Open chrome://conversions-internals
- Visit localhost:8080 in Canary, click the ad, click "Buy" to convert -> In the conversion internals, you should see one impression and one conversion
