module.exports = {
  apps: [
    {
      name: 'Prime-MD',
      script: 'https://github.com/WABOT-PRIME-MD/index.js',
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
