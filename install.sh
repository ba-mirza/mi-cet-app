#!/bin/bash

# Использование: chmod +x install.sh && ./install.sh

set -e

echo "🚀 Начинаем установку MI-CET приложения..."

if [[ "$EUID" -eq 0 ]]; then
  echo "❌ Не запускайте скрипт от имени root. Используйте sudo при необходимости."
  exit 1
fi

if [[ -f /etc/os-release ]]; then
    . /etc/os-release
    OS=$NAME
else
    echo "❌ Не удалось определить операционную систему"
    exit 1
fi

echo "📋 Операционная система: $OS"

install_docker() {
    echo "🐳 Проверяем установку Docker..."
    
    if ! command -v docker &> /dev/null; then
        echo "📦 Устанавливаем Docker..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sudo sh get-docker.sh
        sudo usermod -aG docker $USER
        sudo systemctl enable docker
        sudo systemctl start docker
        rm get-docker.sh
        echo "✅ Docker установлен"
    else
        echo "✅ Docker уже установлен"
    fi
}

install_docker_compose() {
    echo "🔧 Проверяем установку Docker Compose..."
    
    if ! command -v docker-compose &> /dev/null; then
        echo "📦 Устанавливаем Docker Compose..."
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
        echo "✅ Docker Compose установлен"
    else
        echo "✅ Docker Compose уже установлен"
    fi
}

install_git() {
    echo "🌿 Проверяем установку Git..."
    
    if ! command -v git &> /dev/null; then
        echo "📦 Устанавливаем Git..."
        if [[ "$OS" == *"Ubuntu"* ]] || [[ "$OS" == *"Debian"* ]]; then
            sudo apt update && sudo apt install -y git
        elif [[ "$OS" == *"CentOS"* ]] || [[ "$OS" == *"Red Hat"* ]]; then
            sudo yum install -y git
        fi
        echo "✅ Git установлен"
    else
        echo "✅ Git уже установлен"
    fi
}

create_env_file() {
    echo "⚙️  Настраиваем переменные окружения..."
    
    if [[ ! -f .env ]]; then
        if [[ -f .env.example ]]; then
            cp .env.example .env
            echo "📝 Создан .env файл из .env.example"
            echo "⚠️  ВАЖНО: Отредактируйте .env файл с реальными значениями!"
            echo "nano .env"
        else
            echo "⚠️  Файл .env.example не найден. Создаем базовый .env"
            cat > .env << EOF
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=http://$(hostname -I | awk '{print $1}'):3000
EOF
        fi
    else
        echo "✅ Файл .env уже существует"
    fi
}

build_and_run() {
    echo "🏗️  Собираем и запускаем приложение..."
    
    if docker-compose ps | grep -q "Up"; then
        echo "⚠️  Найдены запущенные контейнеры. Останавливаем..."
        docker-compose down
    fi
    
    docker-compose up -d --build
    
    echo "⏳ Ждем запуска приложения..."
    sleep 10
    
    if docker-compose ps | grep -q "Up"; then
        echo "✅ Приложение успешно запущено!"
        echo "🌐 Доступно по адресу: http://$(hostname -I | awk '{print $1}'):3000"
    else
        echo "❌ Ошибка запуска. Проверьте логи: docker-compose logs"
        exit 1
    fi
}

main() {
    install_git
    install_docker
    install_docker_compose
    create_env_file
    
    echo "🔄 Необходимо перелогиниться для применения прав Docker"
    echo "После перелогина запустите:"
    echo "cd $(pwd) && docker-compose up -d --build"
    
    read -p "Хотите продолжить установку сейчас? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        if docker ps &> /dev/null; then
            build_and_run
        else
            echo "⚠️  Необходимо перелогиниться для работы с Docker"
            echo "Выполните: logout, затем войдите снова и запустите:"
            echo "cd $(pwd) && docker-compose up -d --build"
        fi
    fi
}

main

echo "🎉 Установка завершена!"