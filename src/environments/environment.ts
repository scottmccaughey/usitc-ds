// 888                            888          d88P         888                        888
// 888                            888         d88P          888                        888
// 888                            888        d88P           888                        888
// 888  .d88b.   .d8888b  8888b.  888       d88P    .d8888b 888  .d88b.  888  888  .d88888
// 888 d88""88b d88P"        "88b 888      d88P    d88P"    888 d88""88b 888  888 d88" 888
// 888 888  888 888      .d888888 888     d88P     888      888 888  888 888  888 888  888
// 888 Y88..88P Y88b.    888  888 888    d88P      Y88b.    888 Y88..88P Y88b 888 Y88b 888
// 888  "Y88P"   "Y8888P "Y888888 888   d88P        "Y8888P 888  "Y88P"   "Y88888  "Y88888
//
//
//
//
// These are environment configuration settings that are used when running `ng build` or
// `ng serve`. If you do not specify a configuration, the dev configuration is used.
// The full configuration setup can be found in `angular.json`.
//
// Configuration    File                    Serve Command           Build Command
// ------------------------------------------------------------------------------------------
// > dev            environment.ts          `ng serve`              `ng build`
//   prod           environment.prod.ts     `ng serve -c=prod`      `ng build -c=prod`

export const environment = {
  production: false,
  DEBUG: false,
  _devAssetsLocation: 'src/assets-dev/'
};
