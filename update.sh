#!/bin/bash

# Использование: chmod +x update.sh && ./update.sh

set -e

echo "🔄 Начинаем обновление приложения..."

if ! command -v git &> /dev/null; then
    echo "❌ Git не установлен"
    exit 1
fi

if ! command -v docker &> /dev/null; then
    echo "❌ Docker не установлен"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose не установлен"
    exit 1
fi

echo "📋 Сохраняем логи перед обновлением..."
docker-compose logs > logs_backup_$(date +%Y%m%d_%H%M%S).txt 2>/dev/null || true

echo "⬇️  Получаем обновления из репозитория..."
git fetch origin
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" = "$REMOTE" ]; then
    echo "✅ Приложение уже актуально"
    read -p "🔄 Все равно перезапустить? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 0
    fi
else
    echo "📥 Найдены обновления, применяем..."
    git pull origin main
fi

echo "⏹️  Останавливаем текущие контейнеры..."
docker-compose down

echo "🧹 Очищаем старые образы..."
docker system prune -f

echo "🏗️  Собираем и запускаем обновленную версию..."
docker-compose up -d --build

echo "⏳ Ждем запуска приложения..."
sleep 15

if docker-compose ps | grep -q "Up"; then
    echo "✅ Приложение успешно обновлено и запущено!"
    echo "🌐 Доступно по адресу: http://$(hostname -I | awk '{print $1}'):3000"
    
    echo "📋 Последние логи:"
    docker-compose logs --tail=20
else
    echo "❌ Ошибка запуска после обновления"
    echo "📋 Логи для диагностики:"
    docker-compose logs
    exit 1
fi

echo "🎉 Обновление завершено успешно!"