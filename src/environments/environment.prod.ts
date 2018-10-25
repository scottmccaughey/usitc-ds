//                                888
//                                888
//                                888
//  88888b.  888d888 .d88b.   .d88888
//  888 "88b 888P"  d88""88b d88" 888
//  888  888 888    888  888 888  888
//  888 d88P 888    Y88..88P Y88b 888
//  88888P"  888     "Y88P"   "Y88888
//  888
//  888
//  888
//
// These are environment configuration settings that are used when running `ng build` or
// `ng serve`. If you do not specify a configuration, the dev configuration is used.
// The full configuration setup can be found in `angular.json`.
//
// Configuration    File                    Serve Command           Build Command
// ------------------------------------------------------------------------------------------
//   dev            environment.ts          `ng serve`              `ng build`
// > prod           environment.prod.ts     `ng serve -c=prod`      `ng build -c=prod`

export const environment = {
  production: true,
  DEBUG: false,
  _devAssetsLocation: 'src/assets-dev/'
};
