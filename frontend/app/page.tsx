"use client";

import "./page.css";
import { ButtonGroup } from "./components/ButtonGroup";
import { useBackend } from "./hooks/useBackend";
import { useEffect, useState } from "react";

export default function Home() {
  const { message, error, handleButtonClick, clearMessage } = useBackend();
  const [lastKeyPressed, setLastKeyPressed] = useState<string>("");

  // Обработчик клавиатуры
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
      
      // Показываем нажатую клавишу
      setLastKeyPressed(key);
      setTimeout(() => setLastKeyPressed(""), 500);
      
      // Цифры 0-9
      if (key >= "0" && key <= "9") {
        handleButtonClick(key);
        return;
      }
      
      // Операции
      if (["+", "-", "*", "/"].includes(key)) {
        handleButtonClick(key);
        return;
      }
      
      // Равно (Enter или =)
      if (key === "Enter" || key === "=") {
        handleButtonClick("=");
        return;
      }
      
      // Очистка (Escape или c)
      if (key === "Escape" || key.toLowerCase() === "c") {
        clearMessage();
        return;
      }
    };

    // Добавляем обработчик событий
    window.addEventListener("keydown", handleKeyPress);
    
    // Очищаем обработчик при размонтировании
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleButtonClick, clearMessage]);

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="text-container">
          <h1 className="main-title">
            КАЛЬКУЛЯТОР ДЕМИДЕДИШН
          </h1>
          <p className="keyboard-hint">
            💡 Используйте клавиатуру: цифры 0-9, операции +-*/, Enter для =, Escape для очистки
          </p>
          {lastKeyPressed && (
            <div className="key-indicator">
              Нажата клавиша: <span className="key-highlight">{lastKeyPressed}</span>
            </div>
          )}
          {/* Дисплей калькулятора для отображения результатов */}
          <textarea
            readOnly={true}
            value={message || error || "0"}
            className="textarea"
            rows={1}
            cols={20}
            placeholder="0"
          />
          
          <ButtonGroup 
            onButtonClick={handleButtonClick}
            onClear={clearMessage}
          />
        </div>
      </div>
    </div>
  );
}