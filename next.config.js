
// generated by lib/sync.js
module.exports = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  env: {
      zesty: {
          instance_zuid: "8-aaeffee09b-7w6v22", // zesty unique id of content instance
          stage: "https://kfg6bckb-dev.webengine.zesty.io", // e.g. https://XYZ-dev.webengine.zesty.io
          production: "https://www.zesty.io", // e.g. https://www.acme.com
          stage_password: "",
          src_dir: "", // where the next project has pages, components, etc folders
          options: {
            skip_config_overwrite: true, // for setups with custom config files, after initial setup of the env.zesty object, set to true
            model_ignore_list: [
              '6-dc9a98a2c5-ws073l',
              '6-f4e4d896f1-ql8bpt' // an array of models to ignore when creating component files in views/zesty
            ]
          }

      }
  }
}