// Директива для Next.js - указывает, что этот файл должен выполняться на клиенте
"use client";

// Импортируем хук useState из React для управления состоянием компонента
import { useState } from "react";
// Импортируем функцию ButtonClick из сгенерированных Wails типов для вызова Go функций
import { ButtonClick } from "@/wailsjs/go/main/App";

// Интерфейс для описания состояния бэкенда
export interface BackendState {
  message: string;        // Сообщение от бэкенда
  error: string | null;   // Сообщение об ошибке (null если нет ошибки)
}

// Кастомный хук для работы с бэкендом
export const useBackend = () => {
  // Создаем состояние с начальными значениями
  const [state, setState] = useState<BackendState>({
    message: "",        // Пустое сообщение по умолчанию
    error: null,        // Нет ошибок по умолчанию
  });

  // Асинхронная функция для обработки нажатия кнопки
  const handleButtonClick = async (buttonText: string) => {
    // Очищаем предыдущие ошибки
    setState(prev => ({ ...prev, error: null }));
    
    // Блок try-catch для обработки ошибок
    try {
      // Вызываем функцию ButtonClick из Go бэкенда с переданным текстом
      const response = await ButtonClick(buttonText);
      // Обновляем состояние: сохраняем ответ
      setState(prev => ({ 
        ...prev, 
        message: response,  // Сохраняем ответ от бэкенда
      }));
    } catch (error) {
      // Логируем ошибку в консоль для отладки
      console.error("Ошибка при вызове Go функции:", error);
      // Обновляем состояние: показываем ошибку
      setState(prev => ({ 
        ...prev, 
        error: "Ошибка соединения с бэкендом",  // Пользовательское сообщение об ошибке
      }));
    }
  };

  // Функция для очистки сообщений и ошибок
  const clearMessage = () => {
    // Обновляем состояние: очищаем сообщение и ошибку
    setState(prev => ({ 
      ...prev, 
      message: "",    // Очищаем сообщение
      error: null     // Очищаем ошибку
    }));
  };

  // Возвращаем состояние и функции для использования в компонентах
  return {
    ...state,              // Распаковываем все свойства состояния
    handleButtonClick,     // Функция для обработки нажатий кнопок
    clearMessage,          // Функция для очистки сообщений
  };
};
