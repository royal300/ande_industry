#!/bin/bash

# ==========================================
# ANDE Industries - Automated Deploy Script
# ==========================================

VPS_IP="93.127.206.52"
VPS_USER="root" # Assuming root user; update if your VPS username is different

echo "🚀 Starting Deployment to $VPS_USER@$VPS_IP..."
echo "🔑 You will be prompted for the VPS password (Royal300@2026)"

# SSH into the VPS and execute the deployment commands
ssh $VPS_USER@$VPS_IP << 'EOF'
  echo "✅ Connected to VPS successfully!"
  
  # Ensure Node.js and npm are available in the non-interactive SSH session
  # Load NVM if it exists
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

  DIR="ande_industry"
  REPO_URL="https://github.com/royal300/ande_industry.git"

  # 1. Setup repository
  if [ ! -d "$DIR/.git" ]; then
    echo "📥 Git repository not found in $DIR. Cloning..."
    git clone $REPO_URL $DIR
  fi

  # Navigate to the project directory
  cd $DIR

  # 2. Pull latest code
  echo "⬇️ Pulling latest changes from GitHub..."
  git reset --hard
  git pull origin main

  # 3. Install dependencies
  echo "📦 Installing npm dependencies..."
  npm install

  # 4. Build the application
  echo "🏗️ Building the React application for production..."
  npm run build

  # 5. Serve the application
  echo "🚀 Setting up the live server..."
  
  # Install PM2 (Process Manager) globally if it is not installed
  if ! command -v pm2 &> /dev/null; then
      echo "⚙️ PM2 is not installed. Installing PM2 globally..."
      npm install -g pm2
  fi

  # Stop and remove any existing PM2 instance of this app to avoid conflicts
  pm2 stop ande-web 2>/dev/null || true
  pm2 delete ande-web 2>/dev/null || true

  # Start the Node/Express server using PM2
  pm2 start server.js --name "ande-web"

  # Save PM2 process list so it automatically restarts if the VPS reboots
  pm2 save
  
  echo "=========================================================="
  echo "🎉 Deployment complete!"
  echo "🌐 Your website should now be live at: https://www.andeitpl.com"
  echo "=========================================================="
EOF
