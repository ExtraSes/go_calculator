package main

import (
	"context"
	"fmt"
	"strconv"
)

// App struct
type App struct {
	ctx     context.Context
	display string
	first   float64
	op      string
	waiting bool
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{
		display: "0",
		first:   0,
		op:      "",
		waiting: false,
	}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// ButtonClick handles button click from frontend
func (a *App) ButtonClick(buttonText string) string {
	fmt.Printf("ButtonClick received: '%s'\n", buttonText)
	switch buttonText {
	case "0", "1", "2", "3", "4", "5", "6", "7", "8", "9":
		// Цифры
		if a.waiting {
			a.display = buttonText
			a.waiting = false
		} else {
			if a.display == "0" {
				a.display = buttonText
			} else {
				a.display += buttonText
			}
		}
		return a.display

	case "+", "-", "*", "/":
		// Операции
		if a.op != "" && !a.waiting {
			// Выполняем предыдущую операцию
			a.calculate()
		}
		a.first, _ = strconv.ParseFloat(a.display, 64)
		a.op = buttonText
		a.waiting = true
		return a.display

	case "=":
		// Равно
		if a.op != "" && !a.waiting {
			a.calculate()
		}
		a.op = ""
		a.waiting = true
		return a.display

	case "C", "Стереть":
		// Очистка
		a.display = "0"
		a.first = 0
		a.op = ""
		a.waiting = false
		return a.display

	default:
		return a.display
	}
}

// calculate выполняет вычисления
func (a *App) calculate() {
	second, _ := strconv.ParseFloat(a.display, 64)
	
	switch a.op {
	case "+":
		a.first += second
	case "-":
		a.first -= second
	case "*":
		a.first *= second
	case "/":
		if second != 0 {
			a.first /= second
		} else {
			a.display = "Ошибка: деление на ноль"
			return
		}
	}
	
	a.display = fmt.Sprintf("%.2f", a.first)
}