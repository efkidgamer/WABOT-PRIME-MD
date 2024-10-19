module.exports = {
  apps: [
    {
      name: 'Prime-MD',
      script: 'https://github.com/efkidgamer/WABOT-PRIME-MD/blob/main/index.js%20',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
