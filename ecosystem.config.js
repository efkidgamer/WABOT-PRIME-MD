module.exports = {
  apps: [
    {
      name: 'Prime-MD',
      script: './src/index.js', // Update path if necessary
      cwd: '/opt/render/project/', // Specify working directory
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
