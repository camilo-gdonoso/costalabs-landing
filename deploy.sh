#!/bin/bash
# ============================================
# CostaLabs Landing - DigitalOcean Deploy Script
# ============================================
# Ejecutar como root en tu Droplet Ubuntu
# Uso: bash deploy.sh TU_DOMINIO GITHUB_REPO_URL
# Ejemplo: bash deploy.sh costalabs.com https://github.com/usuario/costalabs-landing.git
# ============================================

set -e

DOMAIN=$1
REPO_URL=$2

if [ -z "$DOMAIN" ] || [ -z "$REPO_URL" ]; then
    echo "❌ Uso: bash deploy.sh TU_DOMINIO GITHUB_REPO_URL"
    echo "   Ejemplo: bash deploy.sh costalabs.com https://github.com/user/repo.git"
    exit 1
fi

echo "🚀 Iniciando deploy de CostaLabs Landing..."
echo "   Dominio: $DOMAIN"
echo "   Repo: $REPO_URL"
echo ""

# ============================================
# 1. Actualizar sistema
# ============================================
echo "📦 [1/7] Actualizando sistema..."
apt update && apt upgrade -y

# ============================================
# 2. Instalar Docker
# ============================================
echo "🐳 [2/7] Instalando Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com | sh
    systemctl enable docker
    systemctl start docker
    echo "   ✅ Docker instalado"
else
    echo "   ✅ Docker ya está instalado"
fi

# ============================================
# 3. Instalar Docker Compose (viene con Docker ahora)
# ============================================
echo "🔧 [3/7] Verificando Docker Compose..."
docker compose version

# ============================================
# 4. Clonar repositorio
# ============================================
echo "📥 [4/7] Clonando repositorio..."
cd /opt
rm -rf costalabs-landing
git clone $REPO_URL costalabs-landing
cd costalabs-landing

# ============================================
# 5. Construir y ejecutar contenedor
# ============================================
echo "🏗️  [5/7] Construyendo imagen Docker..."
docker compose up -d --build

echo "   Esperando que el contenedor inicie..."
sleep 5

# Verificar que está corriendo
if docker ps | grep -q costalabs-landing; then
    echo "   ✅ Contenedor corriendo en puerto 3000"
else
    echo "   ❌ Error: El contenedor no inició correctamente"
    docker logs costalabs-landing
    exit 1
fi

# ============================================
# 6. Configurar Nginx
# ============================================
echo "🌐 [6/7] Configurando Nginx..."
apt install nginx -y

cat > /etc/nginx/sites-available/costalabs << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/costalabs /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

nginx -t && systemctl reload nginx
echo "   ✅ Nginx configurado"

# ============================================
# 7. Configurar SSL con Certbot
# ============================================
echo "🔒 [7/7] Configurando SSL (HTTPS)..."
apt install certbot python3-certbot-nginx -y
certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN --redirect

echo ""
echo "============================================"
echo "✅ ¡DEPLOY COMPLETADO!"
echo "============================================"
echo ""
echo "🌐 Tu sitio está disponible en:"
echo "   https://$DOMAIN"
echo ""
echo "📋 Comandos útiles:"
echo "   Ver logs:      docker logs -f costalabs-landing"
echo "   Reiniciar:     docker compose -f /opt/costalabs-landing/docker-compose.yml restart"
echo "   Actualizar:    cd /opt/costalabs-landing && git pull && docker compose up -d --build"
echo ""
