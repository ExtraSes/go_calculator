// Директива для Next.js - указывает, что этот компонент должен выполняться на клиенте
"use client";

// Импортируем компонент Button из UI библиотеки shadcn/ui
import { Button } from "@/components/ui/button";

// Интерфейс для пропсов компонента ButtonGroup
interface ButtonGroupProps {
  onButtonClick: (buttonText: string) => Promise<void>;  // Функция для обработки нажатий кнопок
  onClear: () => void;                                   // Функция для очистки сообщений
}

// React компонент для группы кнопок
export const ButtonGroup = ({ onButtonClick, onClear }: ButtonGroupProps) => {

  // Возвращаем JSX разметку компонента
  return (
    // Контейнер для группы кнопок с CSS классом
    <div className="button-group">
      {/* Первая  -  1 */}
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("1")}  // Обработчик клика с передачей текста
                              
      >
        
        1
      </Button>
      
      {/* Вторая  -  2 */}
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("2")}  // Обработчик клика с передачей текста
                              
      >
        
        2
      </Button>
      
      {/* Вторая  -  2 */}
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("3")}  // Обработчик клика с передачей текста
                              
      >
        
        3
      </Button>

      {/* Вторая  -  2 */}
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("4")}  // Обработчик клика с передачей текста                       
      >
        
        4
      </Button>
      {/* Вторая  -  2 */}
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("5")}  // Обработчик клика с передачей текста                   
      >
        
        5
      </Button>

      {/* Вторая  -  2 */}
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("6")}  // Обработчик клика с передачей текста
                              
      >
        6
      </Button>

      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("7")}  // Обработчик клика с передачей текста
                              
      >
        7
      </Button>
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("8")}  // Обработчик клика с передачей текста
                              
      >
        8
      </Button>
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("9")}  // Обработчик клика с передачей текста
                              
      >
        9
      </Button>
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("0")}  // Обработчик клика с передачей текста
                              
      >
        0
      </Button>
      
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("+")}  // Обработчик клика с передачей текста
                              
      >
        +
      </Button>

      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("*")}  // Обработчик клика с передачей текста
                              
      >
        *
      </Button>

      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("-")}  // Обработчик клика с передачей текста
                              
      >
        -
      </Button>

      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("/")}  // Обработчик клика с передачей текста
                              
      >
        /
      </Button>

      {/* Кнопка равно */}
      <Button 
        className="little-button"                    // CSS класс для стилизации
        onClick={() => onButtonClick("=")}  // Обработчик клика с передачей текста
      >
        =
      </Button>

      {/*  для очистки сообщений */}
      <Button 
        className="little-button"                  // CSS класс для кнопки очистки
        onClick={onClear}                    // Обработчик клика для очистки
      >
        Стереть
      </Button>

    </div>
  );
};
