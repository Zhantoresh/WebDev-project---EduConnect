import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Добавим сервис для работы с аутентификацией

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName'); // Загружаем имя пользователя из localStorage
  }

  logout(): void {
    this.authService.logout(); // Логика выхода из системы
    this.router.navigate(['/login']); // Переход на страницу логина
  }
}
