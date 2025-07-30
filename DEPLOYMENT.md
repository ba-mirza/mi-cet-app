# 🚀 Инструкция по развертыванию

## Требования к серверу
- Ubuntu/CentOS/Debian Linux
- Минимум 1GB RAM, 10GB свободного места
- Доступ к интернету
- Права sudo/root

## 📋 Пошаговая инструкция для сисадмина

### 1. Установка Docker
```bash
# Для Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
sudo systemctl enable docker
sudo systemctl start docker

# Установка Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Перелогиниться для применения прав
logout
```

### 2. Клонирование проекта
```bash
git clone [URL_РЕПОЗИТОРИЯ] mi-cet-app
cd mi-cet-app
```

### 3. Запуск приложения
```bash
# Сборка и запуск (одна команда)
docker-compose up -d --build

# Проверка статуса
docker-compose ps

# Просмотр логов
docker-compose logs -f
```

### 4. Проверка работоспособности
- Открыть в браузере: `http://localhost:3000`
- Приложение должно быть доступно

## 🔄 Обновление приложения
```bash
cd mi-cet-app
git pull origin main
docker-compose down
docker-compose up -d --build
```

## 📊 Полезные команды
```bash
# Остановка
docker-compose down

# Перезапуск
docker-compose restart

# Просмотр логов
docker-compose logs mi-cet-app

# Очистка неиспользуемых образов
docker system prune -f
```

## 🆘 Устранение проблем

### Порт занят
```bash
sudo lsof -i :3000
sudo kill -9 [PID]
```

### Нет места на диске
```bash
docker system prune -a
```

### Контейнер не запускается
```bash
docker-compose logs mi-cet-app
```

## 📞 Поддержка
При проблемах отправить вывод команды:
```bash
docker-compose logs mi-cet-app > logs.txt
```